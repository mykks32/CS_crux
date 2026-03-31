db.Seat.aggregate([
    // Group by id and maxId = MAX(id) and seats: [ ...contains seats data array ]
    {
        $group: {
            _id: null,
            maxId: { $max: "$id" },
            // PUSH root array i.e. collection into seats JSON array
            seats: { $push: "$$ROOT" }
            }
        },
    // Unwind seats array
    { $unwind: "$seats" },
    //    <- MATCH_OUTPUT ->
    //    +----+-----+----------------------------------------------------------------------------+
    //    |_id |maxId|seats                                                                       |
    //    +----+-----+----------------------------------------------------------------------------+
    //    |null|5    |{"_id": {"$oid": "69cb8b113b56083e4ce4247b"}, "id": 1, "student": "Abbot"}  |
    //    |null|5    |{"_id": {"$oid": "69cb8b113b56083e4ce4247c"}, "id": 2, "student": "Doris"}  |
    //    |null|5    |{"_id": {"$oid": "69cb8b113b56083e4ce4247d"}, "id": 3, "student": "Emerson"}|
    //    |null|5    |{"_id": {"$oid": "69cb8b113b56083e4ce4247e"}, "id": 4, "student": "Green"}  |
    //    |null|5    |{"_id": {"$oid": "69cb8b113b56083e4ce4247f"}, "id": 5, "student": "Jeames"} |
    //    +----+-----+----------------------------------------------------------------------------+

    // Select condition for if else in $addFields
    {
        $addFields: {
            swappedId: {
                $cond: [
                    // if part
                    // MOD (id, 2) = 1 AND id + 1 < MAX(id)
                    {
                        $and: [
                            {$eq: [{$mod: ['$seats.id', 2]},1]},
                            {$lt: [{$add: ['$seats.id', 1]}, '$maxId']}
                            ]
                        },
                    // then part
                    // id + 1
                    {$add: ['$seats.id', 1]},
                    // Else part
                    // MOD(id, 2) = 0 -> then id - 1 else id
                    { $cond: [
                        { $eq: [{ $mod: ["$seats.id", 2] }, 0] },
                        { $subtract: ["$seats.id", 1] },
                        // fallback: if id is odd but id + 1 > MAX(id) from first step
                        "$seats.id"
                        ]},
                    ]
                }
            }
        },
    //    <- ADDFIELD_OUTPUT ->
    //    +----+-----+----------------------------------------------------------------------------+---------+
    //    |_id |maxId|seats                                                                       |swappedId|
    //    +----+-----+----------------------------------------------------------------------------+---------+
    //    |null|5    |{"_id": {"$oid": "69cb8b113b56083e4ce4247b"}, "id": 1, "student": "Abbot"}  |2        |
    //    |null|5    |{"_id": {"$oid": "69cb8b113b56083e4ce4247c"}, "id": 2, "student": "Doris"}  |1        |
    //    |null|5    |{"_id": {"$oid": "69cb8b113b56083e4ce4247d"}, "id": 3, "student": "Emerson"}|4        |
    //    |null|5    |{"_id": {"$oid": "69cb8b113b56083e4ce4247e"}, "id": 4, "student": "Green"}  |3        |
    //    |null|5    |{"_id": {"$oid": "69cb8b113b56083e4ce4247f"}, "id": 5, "student": "Jeames"} |5        |
    //    +----+-----+----------------------------------------------------------------------------+---------+

    // Project id and student
    {
        $project: {
            _id: 0,
            id: '$swappedId',
            student: '$seats.student'
            }
        },
    //    <- PROJECT_OUTPUT ->
    //    +--+-------+
    //    |id|student|
    //    +--+-------+
    //    |2 |Abbot  |
    //    |1 |Doris  |
    //    |4 |Emerson|
    //    |3 |Green  |
    //    |5 |Jeames |
    //    +--+-------+

    // ORDER BY id
    {
        $sort: {
            id: 1
            }
        }
    // <- FINAL_OUTPUT ->
    //    +--+-------+
    //    |id|student|
    //    +--+-------+
    //    |1 |Doris  |
    //    |2 |Abbot  |
    //    |3 |Green  |
    //    |4 |Emerson|
    //    |5 |Jeames |
    //    +--+-------+
    ])