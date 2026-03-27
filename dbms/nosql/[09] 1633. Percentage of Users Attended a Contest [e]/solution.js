db.register.aggregate([
	// Group based on contest_id and find total registered count
	// Aggregation stages can only use aggregation stages expression
	{
		$group: {
			_id: "$contest_id",
			registered_count: { $sum: 1 }
			}
		},

	// Compute total users in users collections
	// All aggregations stages expression can be used in lookup in pipeline
	{
		$lookup: {
			from: "users",
			// Count total users
			pipeline: [
				{ $count: "total_users" }
				],
			as: "total_users"
			}
		},

	// Flatten total_users array
	{ $unwind: "$total_users" },

	// Calculate percentage and round
	// All the expression are used in projections but not in group
	{
		$project: {
			_id: 0,
			contest_id: "$_id",
			percentage: {
				$round: [
					{
						$multiply: [
							{ $divide: ["$registered_count", "$total_users.total_users"] },
							// Or simply just count another document instead of lookup
//							{ $divide: ["$registered_count", db.users.countDocuments()] },
							100
							]
						},
					2
					]
				}
			}
		},

	// Sort by percentage descending, then contest_id ascending
	{ $sort: { percentage: -1, contest_id: 1 } }
	]);