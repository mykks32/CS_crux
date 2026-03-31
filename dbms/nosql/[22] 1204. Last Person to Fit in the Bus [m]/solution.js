// ------------------------
    // LOOKUP AND PROJECT
    // --------------------
    db.queue.aggregate([
        // Self-join to get all people with turn <= current turn
        {
            $lookup: {
                from: "queue",
                let: { turn: "$turn", pid: "$person_id" },
                pipeline: [
                    {
                        $match: {
                            // match all previous turns including self
                            $expr: { $lte: ["$turn", "$$turn"] }
                            }
                        },
                    // we only need weight
                    { $project: { weight: 1, _id: 0 } }
                    ],
                as: "previousTurns"
                }
            },
        //    <- LOOKUP_OUTPUT ->
        //    +------------------------+---------+-----------+------------------------------------------------------------------------------------------------------+----+------+
        //    |_id                     |person_id|person_name|previousTurns                                                                                         |turn|weight|
        //    +------------------------+---------+-----------+------------------------------------------------------------------------------------------------------+----+------+
        //    |69ca57f33b56083e4ce42467|5        |Alice      |[{"weight": 250}]                                                                                     |1   |250   |
        //    |69ca57f33b56083e4ce42468|4        |Bob        |[{"weight": 250}, {"weight": 175}, {"weight": 350}, {"weight": 400}, {"weight": 200}]                 |5   |175   |
        //    |69ca57f33b56083e4ce42469|3        |Alex       |[{"weight": 250}, {"weight": 350}]                                                                    |2   |350   |
        //    |69ca57f33b56083e4ce4246a|6        |John Cena  |[{"weight": 250}, {"weight": 350}, {"weight": 400}]                                                   |3   |400   |
        //    |69ca57f33b56083e4ce4246b|1        |Winston    |[{"weight": 250}, {"weight": 175}, {"weight": 350}, {"weight": 400}, {"weight": 500}, {"weight": 200}]|6   |500   |
        //    |69ca57f33b56083e4ce4246c|2        |Marie      |[{"weight": 250}, {"weight": 350}, {"weight": 400}, {"weight": 200}]                                  |4   |200   |
        //    +------------------------+---------+-----------+------------------------------------------------------------------------------------------------------+----+------+


        // Calculate cumulative weight
        {
            $addFields: {
                totalWeight: { $sum: "$previousTurns.weight" }
                }
            },
        //    <- ADDFIELD_OUTPUT->
        //    +------------------------+---------+-----------+------------------------------------------------------------------------------------------------------+-----------+----+------+
        //    |_id                     |person_id|person_name|previousTurns                                                                                         |totalWeight|turn|weight|
        //    +------------------------+---------+-----------+------------------------------------------------------------------------------------------------------+-----------+----+------+
        //    |69ca57f33b56083e4ce42467|5        |Alice      |[{"weight": 250}]                                                                                     |250        |1   |250   |
        //    |69ca57f33b56083e4ce42468|4        |Bob        |[{"weight": 250}, {"weight": 175}, {"weight": 350}, {"weight": 400}, {"weight": 200}]                 |1375       |5   |175   |
        //    |69ca57f33b56083e4ce42469|3        |Alex       |[{"weight": 250}, {"weight": 350}]                                                                    |600        |2   |350   |
        //    |69ca57f33b56083e4ce4246a|6        |John Cena  |[{"weight": 250}, {"weight": 350}, {"weight": 400}]                                                   |1000       |3   |400   |
        //    |69ca57f33b56083e4ce4246b|1        |Winston    |[{"weight": 250}, {"weight": 175}, {"weight": 350}, {"weight": 400}, {"weight": 500}, {"weight": 200}]|1875       |6   |500   |
        //    |69ca57f33b56083e4ce4246c|2        |Marie      |[{"weight": 250}, {"weight": 350}, {"weight": 400}, {"weight": 200}]                                  |1200       |4   |200   |
        //    +------------------------+---------+-----------+------------------------------------------------------------------------------------------------------+-----------+----+------+

        // Filter only rows where cumulative weight <= 1000
        {
            $match: {
                totalWeight: { $lte: 1000 }
                }
            },
        //    <- MATCH_OUTPUT ->
        //    +------------------------+---------+-----------+---------------------------------------------------+-----------+----+------+
        //    |_id                     |person_id|person_name|previousTurns                                      |totalWeight|turn|weight|
        //    +------------------------+---------+-----------+---------------------------------------------------+-----------+----+------+
        //    |69ca57f33b56083e4ce42467|5        |Alice      |[{"weight": 250}]                                  |250        |1   |250   |
        //    |69ca57f33b56083e4ce42469|3        |Alex       |[{"weight": 250}, {"weight": 350}]                 |600        |2   |350   |
        //    |69ca57f33b56083e4ce4246a|6        |John Cena  |[{"weight": 250}, {"weight": 350}, {"weight": 400}]|1000       |3   |400   |
        //    +------------------------+---------+-----------+---------------------------------------------------+-----------+----+------+

        // Sort by turn descending to get last person who can board
        { $sort: { turn: -1 } },

        // Limit to 1
        { $limit: 1 },
        //    <- SORT_LIMIT_OUTPUT ->
        //    +------------------------+---------+-----------+---------------------------------------------------+-----------+----+------+
        //    |_id                     |person_id|person_name|previousTurns                                      |totalWeight|turn|weight|
        //    +------------------------+---------+-----------+---------------------------------------------------+-----------+----+------+
        //    |69ca57f33b56083e4ce4246a|6        |John Cena  |[{"weight": 250}, {"weight": 350}, {"weight": 400}]|1000       |3   |400   |
        //    +------------------------+---------+-----------+---------------------------------------------------+-----------+----+------+

        // Project only person_name
        { $project: { _id: 0, person_name: 1 } }
        //    <- PROJECT_OUTPUT ->
        //    +-----------+
        //    |person_name|
        //    +-----------+
        //    |John Cena  |
        //    +-----------+
        ])

    // ----------------------
    // WINDOW FUNCTION
    // ----------------------
    db.queue.aggregate([
        // Compute cumulative sum of weight ordered by turn
        {
            $setWindowFields: {
                // order by turn
                sortBy: { turn: 1 },
                output: {
                    cum_weight: {
                        // cumulative sum
                        $sum: "$weight",
                        // ROWS UNBOUNDED PRECEDING
                        window: { documents: ["unbounded", "current"] }
                        }
                    }
                }
            },
        //    <- WINDOW_OUTPUT ->
        //    +------------------------+----------+---------+-----------+----+------+
        //    |_id                     |cum_weight|person_id|person_name|turn|weight|
        //    +------------------------+----------+---------+-----------+----+------+
        //    |69ca57f33b56083e4ce42467|250       |5        |Alice      |1   |250   |
        //    |69ca57f33b56083e4ce42469|600       |3        |Alex       |2   |350   |
        //    |69ca57f33b56083e4ce4246a|1000      |6        |John Cena  |3   |400   |
        //    |69ca57f33b56083e4ce4246c|1200      |2        |Marie      |4   |200   |
        //    |69ca57f33b56083e4ce42468|1375      |4        |Bob        |5   |175   |
        //    |69ca57f33b56083e4ce4246b|1875      |1        |Winston    |6   |500   |
        //    +------------------------+----------+---------+-----------+----+------+


        // Filter only rows where cumulative weight <= 1000
        {
            $match: {
                cum_weight: { $lte: 1000 }
                }
            },
        //    <- MATCH_OUTPUT ->
        //    +------------------------+----------+---------+-----------+----+------+
        //    |_id                     |cum_weight|person_id|person_name|turn|weight|
        //    +------------------------+----------+---------+-----------+----+------+
        //    |69ca57f33b56083e4ce42467|250       |5        |Alice      |1   |250   |
        //    |69ca57f33b56083e4ce42469|600       |3        |Alex       |2   |350   |
        //    |69ca57f33b56083e4ce4246a|1000      |6        |John Cena  |3   |400   |
        //    +------------------------+----------+---------+-----------+----+------+

        // Sort descending by cumulative weight to get the last person who fits
        {
            $sort: { cum_weight: -1 }
            },

        // Limit to 1 row
        { $limit: 1 },
        //    <- SORT_LIMIT_OUTPUT ->
        //    +------------------------+----------+---------+-----------+----+------+
        //    |_id                     |cum_weight|person_id|person_name|turn|weight|
        //    +------------------------+----------+---------+-----------+----+------+
        //    |69ca57f33b56083e4ce4246a|1000      |6        |John Cena  |3   |400   |
        //    +------------------------+----------+---------+-----------+----+------+

        // Project only the person_name
        { $project: { _id: 0, person_name: 1 } }
        //    <- PROJECT_OUTPUT ->
        //    +-----------+
        //    |person_name|
        //    +-----------+
        //    |John Cena  |
        //    +-----------+
        ])