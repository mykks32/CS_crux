db.MyNumbers.aggregate([
    {
        // count occurrences of each number
        $group: {
            _id: "$num",
            count: { $sum: 1 }
            }
        },
    {
        // keep only numbers appearing once
        $match: {
            count: 1
            }
        },
    {
        // find maximum among those numbers
        $group: {
            _id: null,
            num: { $max: "$_id" }
            }
        },
    {
        // format output
        $project: {
            _id: 0,
            num: 1
            }
        }
    ]);