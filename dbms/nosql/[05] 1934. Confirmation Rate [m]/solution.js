db.signups.aggregate([
	{
		// Lookup confirmations per user
		$lookup: {
			from: "confirmations",
			localField: "user_id",
			foreignField: "user_id",
			as: "confirmations"
			}
		},
	{
		// Compute counts
		$addFields: {
			total_count: {
				$size: '$confirmations'
				},
			confirmed_count: {
				$size: {
					$filter: {
						input: "$confirmations",
						as: "c",
						cond: { $eq: ["$$c.action", "confirmed"] }
						}
					}
				}
			}
		},
	{
		// Compute confirmation_rate
		$addFields: {
			confirmation_rate: {
				$cond: {
					if: { $eq: ["$total_count", 0] },
					then: 0,
					else: { $round: [{ $divide: ["$confirmed_count", "$total_count"] }, 2] }
					}
				// or $cond: [{ $eq: ["$total_count", 0] }, 0, { $divide: ["$confirmed_count", "$total_count"] }]
				}
			}
		},
	{
		// Only return user_id and confirmation_rate
		$project: {
			_id: 0,
			user_id: 1,
			confirmation_rate: 1
			}
		},
	{
		// Sort by user_id
		$sort: { user_id: 1 }
		}
	])