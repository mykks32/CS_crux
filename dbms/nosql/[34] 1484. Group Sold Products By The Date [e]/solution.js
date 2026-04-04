db.Activities.aggregate([
    {
        $group: {
            _id: "$sell_date",
            // $addToSet: accumulator operator
            // syntax: { $addToSet: <expression> }
            // collects unique values of product into an array
            // Alternative of DISTINCT of PostgreSQL
            unique_products: { $addToSet: "$product" }
            }
        },
    //    <- GROUP_OUTPUT ->
    //    +------------------------+--------------------------------------+
    //    |_id                     |unique_products                       |
    //    +------------------------+--------------------------------------+
    //    |2020-05-30T00:00:00.000Z|["Basketball", "Headphone", "T-Shirt"]|
    //    |2020-06-01T00:00:00.000Z|["Bible", "Pencil"]                   |
    //    |2020-06-02T00:00:00.000Z|["Mask"]                              |
    //    +------------------------+--------------------------------------+

    {
        $project: {
            _id: 0,
            sell_date: "$_id",
            num_count: { $size: "$unique_products" },
            product: {
                // $reduce operator: transforms array into a single value (string)
                // syntax:
                // {
                //   $reduce: {
                //     input: <array>,
                //     initialValue: <expression>,
                //     in: <expression>
                //   }
                // }
                $reduce: {
                    // $sortArray operator: sorts array elements
                    // syntax: { $sortArray: { input: <array>, sortBy: <1|-1> } }
                    // sortBy: 1 = ascending, -1 = descending
                    input: { $sortArray: { input: "$unique_products", sortBy: 1 } },
                    // starting value for reduction (empty string)
                    initialValue: "",
                    in:{
                        $cond: [
                            // $cond operator: conditional expression
                            // syntax: { $cond: [ <condition>, <trueExpr>, <falseExpr> ] }
                            // $$value: the variable that represents the cumulative value of the expression
                            // $$value: is like accumulator in reduce callback function
                            { $eq: ["$$value", ""] },
                            // $$this: current element in array iteration
                            "$$this",
                            { $concat: ["$$value", ",", "$$this"] }
                            ]
                        }
                    }
                }
            }
        }
    ]);
//  <- FINAL_OUTPUT ->
//  +---------+----------------------------+------------------------+
//  |num_count|product                     |sell_date               |
//  +---------+----------------------------+------------------------+
//  |2        |Bible,Pencil                |2020-06-01T00:00:00.000Z|
//  |3        |Basketball,Headphone,T-Shirt|2020-05-30T00:00:00.000Z|
//  |1        |Mask                        |2020-06-02T00:00:00.000Z|
//  +---------+----------------------------+------------------------+