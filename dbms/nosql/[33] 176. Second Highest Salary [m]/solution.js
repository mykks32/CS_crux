// First Way
    db.Employees.aggregate([
        {
            $sort: {
                salary: -1
                }
            },
        {
            $skip: 1
            },
        {
            $limit: 1
            },
        //    <- SKIP_LIMIT_OUTPUT ->
        //    +------------------------+--+------+
        //    |_id                     |id|salary|
        //    +------------------------+--+------+
        //    |69d10bac7c527a0e9ffc37a2|2 |200   |
        //    +------------------------+--+------+

        {
            $project: {
                _id: 0,
                SecondHighestSalary: '$salary'
                }
            }
        ])
    //    <- FINAL_OUTPUT ->
    //    +-------------------+
    //    |SecondHighestSalary|
    //    +-------------------+
    //    |200                |
    //    +-------------------+

    // Second Way
    db.Employees.aggregate([
        {
            $group: {
                _id: null,
                maxSalary: { $max: "$salary" }
                }
            },
        {
            $lookup: {
                from: "Employees",
                let: { maxSal: "$maxSalary" },
                pipeline: [
                    {
                        $match: {
                            $expr: { $lt: ["$salary", "$$maxSal"] }
                            }
                        },
                    {
                        $group: {
                            _id: null,
                            secondMax: { $max: "$salary" }
                            }
                        }
                    ],
                as: "result"
                }
            },
        //    <- LOOKUP_OUTPUT ->
        //    +----+---------+---------------------------------+
        //    |_id |maxSalary|result                           |
        //    +----+---------+---------------------------------+
        //    |null|300      |[{"_id": null, "secondMax": 200}]|
        //    +----+---------+---------------------------------+
        {
            $project: {
                _id: 0,
                SecondHighestSalary: {
                    $arrayElemAt: ["$result.secondMax", 0]
                    }
                }
            }
        ])
    //    <- FINAL_OUTPUT ->
    //    +-------------------+
    //    |SecondHighestSalary|
    //    +-------------------+
    //    |200                |
    //    +-------------------+

