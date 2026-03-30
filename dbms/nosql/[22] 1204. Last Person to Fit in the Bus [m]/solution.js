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

    // Calculate cumulative weight
    {
        $addFields: {
            totalWeight: { $sum: "$previousTurns.weight" }
            }
        },

    // Filter only rows where cumulative weight <= 1000
    {
        $match: {
            totalWeight: { $lte: 1000 }
            }
        },

    // Sort by turn descending to get last person who can board
    { $sort: { turn: -1 } },

    // Limit to 1
    { $limit: 1 },

    // Project only person_name
    { $project: { _id: 0, person_name: 1 } }
    ])


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

  // Filter only rows where cumulative weight <= 1000
  {
    $match: {
      cum_weight: { $lte: 1000 }
    }
  },

  // Sort descending by cumulative weight to get the last person who fits
  {
    $sort: { cum_weight: -1 }
  },

  // Limit to 1 row
  { $limit: 1 },

  // Project only the person_name
  { $project: { _id: 0, person_name: 1 } }
])