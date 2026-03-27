db.product_price.aggregate([
	// get all distinct product_ids
	{
		$group: {
			_id: "$product_id"
			}
		},
	// lookup the latest price change on or before 2019-08-16
	{
		$lookup: {
			from: "product_price",
			let: { pid: "$_id" },
			pipeline: [
				{ $match: { $expr: { $and: [
					{ $eq: ["$product_id", "$$pid"] },
					{ $lte: ["$change_date", ISODate("2019-08-16")] }
					]}}},
				{ $sort: { change_date: -1 } },
				{ $limit: 1 },
				{ $project: { _id: 0, new_price: 1 } }
				],
			as: "latest_price"
			}
		},
	// add price field with default 10
	{
		$addFields: {
			price: { $ifNull: [{ $arrayElemAt: ["$latest_price.new_price", 0] }, 10] }
			}
		},
	// project final output
	{
		$project: {
			_id: 0,
			product_id: "$_id",
			price: 1
			}
		},
	{ $sort: { product_id: 1 } }
	])