db.prices.aggregate([
	// Left join prices and unitsSold table
	{
		$lookup: {
			from: "unitssold",
			let: { productId: "$product_id", startDate: "$start_date", endDate: "$end_date" },
			pipeline: [
				{
					$match: {
						$expr: {
							$and: [
								{ $eq: ["$product_id", "$$productId"] },
								{ $gte: ["$purchase_date", "$$startDate"] },
								{ $lte: ["$purchase_date", "$$endDate"] }
								]
							}
						}
					}
				],
			as: "sold_units"
			}
		},
	// Flatten the array; keep documents even if no matching UnitsSold
	{
		$unwind: { path: "$sold_units", preserveNullAndEmptyArrays: true }
		},
	{
		// Group by product_id to calculate totals
		$group: {
			_id: "$product_id",
			// totalRevenue -> price * units(0 if null sold_units)
			totalRevenue: { $sum: { $multiply: ["$price", { $ifNull: ["$sold_units.units", 0] }] } },
			// totalUnits 0 (if null)
			totalUnits: { $sum: { $ifNull: ["$sold_units.units", 0] } }
			}
		},
	{
		// Compute average_price safely
		$project: {
			product_id: "$_id",
			// calculate average_price (if totalUnits = 0, then average_price = 0)
			average_price: {
				$cond: [
					{ $eq: ["$totalUnits", 0] },
					0,
					{ $round: [{ $divide: ["$totalRevenue", "$totalUnits"] }, 2] }
					]
				}
			}
		},
	{ $sort: { product_id: 1 } }
	])