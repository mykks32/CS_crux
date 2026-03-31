db.account.aggregate([
    // Define all categories in parallel
    // $facet -> Runs multiple pipelines simultaneously like CTEs
    {
        $facet: {
            low: [
                { $match: { income: { $lt: 20000 } } },
                { $count: "accounts_count" }
                ],
            average: [
                { $match: { income: { $gte: 20000, $lte: 50000 } } },
                { $count: "accounts_count" }
                ],
            high: [
                { $match: { income: { $gt: 50000 } } },
                { $count: "accounts_count" }
                ]
            }
        },
    //    <- FACET_OUTPUT ->
    //    +-------+-----------------------+-----------------------+
    //    |average|high                   |low                    |
    //    +-------+-----------------------+-----------------------+
    //    |[]     |[{"accounts_count": 3}]|[{"accounts_count": 1}]|
    //    +-------+-----------------------+-----------------------+

    // Transform facet output into documents
    {
        $project: {
            counts: [
                // $arrayElemAT -> aggregation operator used to get an element from an array by index.
                // { $arrayElemAt: [ <array>, <index> ] }
                { category: "Low Salary", accounts_count: { $arrayElemAt: ["$low.accounts_count", 0] } },
                { category: "Average Salary", accounts_count: { $arrayElemAt: ["$average.accounts_count", 0] } },
                { category: "High Salary", accounts_count: { $arrayElemAt: ["$high.accounts_count", 0] } }
                ]
            }
        },
    //    <- PROJECT_OUTPUT ->
    //    +-----------------------------------------------------------------------------------------------------------------------------------+
    //    |counts                                                                                                                             |
    //    +-----------------------------------------------------------------------------------------------------------------------------------+
    //    |[{"category": "Low Salary", "accounts_count": 1}, {"category": "Average Salary"}, {"category": "High Salary", "accounts_count": 3}]|
    //    +-----------------------------------------------------------------------------------------------------------------------------------+
    { $unwind: "$counts" },
    //    <- UNWIND_OUTPUT ->
    //    +------------------------------------------------+
    //    |counts                                          |
    //    +------------------------------------------------+
    //    |{"category": "Low Salary", "accounts_count": 1} |
    //    |{"category": "Average Salary"}                  |
    //    |{"category": "High Salary", "accounts_count": 3}|
    //    +------------------------------------------------+

    // $repaceRoot -> replaces the entire document with a specified nested field
    // { $replaceRoot: { newRoot: "$address" } } converts { name: "Alice", address: { city: "Kathmandu" } } into { city: "Kathmandu" }.
    { $replaceRoot: { newRoot: "$counts" } },
    //    <- REPLACEROOT_OUTPUT ->
    //    +--------------+--------------+
    //    |accounts_count|category      |
    //    +--------------+--------------+
    //    |1             |Low Salary    |
    //    |null          |Average Salary|
    //    |3             |High Salary   |
    //    +--------------+--------------+

    // Replace null with 0
    {
        $addFields: {
            accounts_count: { $ifNull: ["$accounts_count", 0] }
            }
        }
    //    <- ADDFIELDS_OUTPUT ->
    //    +--------------+--------------+
    //    |accounts_count|category      |
    //    +--------------+--------------+
    //    |1             |Low Salary    |
    //    |0             |Average Salary|
    //    |3             |High Salary   |
    //    +--------------+--------------+
    ])