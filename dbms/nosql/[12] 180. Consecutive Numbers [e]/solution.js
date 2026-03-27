// Solution 1
	db.logs.aggregate([
		// Step 1: Sort by num and id
		{ $sort: { num: 1, id: 1 } }
		// Output:
		// [
		//   {id: 1, num: "1"}, {id: 2, num: "1"}, {id: 3, num: "1"}, {id: 5, num: "1"},
		//   {id: 4, num: "2"}, {id: 6, num: "2"}, {id: 7, num: "2"}
		// ]

		// Step 2: Group by num and collect all ids
		,{
			$group: {
				_id: "$num",
				ids: { $push: "$id" }
				}
			}
		// Output:
		// [
		//   { _id: "1", ids: [1, 2, 3, 5] },
		//   { _id: "2", ids: [4, 6, 7] }
		// ]

		// Step 3: Compute "grp" for each id (id - index)
		,{
			$project: {
				num: "$_id",
				idGrpPairs: {
					$map: {
						input: "$ids",
						as: "id",
						in: {
							id: "$$id",
							grp: { $subtract: ["$$id", { $indexOfArray: ["$ids", "$$id"] }] }
							}
						}
					}
				}
			}
		// Output:
		// [
		//   { num: "1", idGrpPairs: [
		//       {id:1, grp:1-0=1}, {id:2, grp:2-1=1}, {id:3, grp:3-2=1}, {id:5, grp:5-3=2}
		//     ] },
		//   { num: "2", idGrpPairs: [
		//       {id:4, grp:4-0=4}, {id:6, grp:6-1=5}, {id:7, grp:7-2=5}
		//     ] }
		// ]

		// Step 4: Unwind idGrpPairs to process each element separately
		,{ $unwind: "$idGrpPairs" }
		// Output:
		// { num: "1", idGrpPairs: {id:1, grp:1} }
		// { num: "1", idGrpPairs: {id:2, grp:1} }
		// { num: "1", idGrpPairs: {id:3, grp:1} }
		// { num: "1", idGrpPairs: {id:5, grp:2} }
		// { num: "2", idGrpPairs: {id:4, grp:4} }
		// { num: "2", idGrpPairs: {id:6, grp:5} }
		// { num: "2", idGrpPairs: {id:7, grp:5} }

		// Step 5: Group by num and grp to count consecutive length
		,{
			$group: {
				_id: { num: "$num", grp: "$idGrpPairs.grp" },
				count: { $sum: 1 }
				}
			}
		// Output:
		// { _id: {num:"1", grp:1}, count: 3 }  // consecutive sequence of 1's
		// { _id: {num:"1", grp:2}, count: 1 }  // single 1, ignored
		// { _id: {num:"2", grp:4}, count: 1 }  // single 2, ignored
		// { _id: {num:"2", grp:5}, count: 2 }  // consecutive 2's (length <3)

		// Step 6: Filter groups with count >= 3
		,{ $match: { count: { $gte: 3 } } }
		// Output:
		// { _id: {num:"1", grp:1}, count: 3 }

		// Step 7: Return distinct nums
		,{
			$group: {
				_id: "$_id.num"
				}
			}
		// Output:
		// { _id: "1" }

		// Step 8: Rename field
		,{ $project: { ConsecutiveNums: "$_id", _id: 0 } }
		// Final Output:
		// [ { "ConsecutiveNums": "1" } ]
		]);

	// Solution 2
	db.logs.aggregate([
		// Step 1: Sort by id
		{ $sort: { id: 1 } },
		// Example result:
		// [
		//   { id: 1, num: "1" },
		//   { id: 2, num: "1" },
		//   { id: 3, num: "1" },
		//   { id: 4, num: "2" },
		//   { id: 5, num: "1" },
		//   { id: 6, num: "2" },
		//   { id: 7, num: "2" }
		// ]

		// Step 2: Add next1Num and next2Num for comparison
		{
			$setWindowFields: {
				sortBy: { id: 1 },
				output: {
					next1Num: { $shift: { by: 1, output: "$num" } },
					next2Num: { $shift: { by: 2, output: "$num" } }
					}
				}
			},
		// Example result:
		// [
		//   { id: 1, num: "1", next1Num: "1", next2Num: "1" },
		//   { id: 2, num: "1", next1Num: "1", next2Num: "2" },
		//   { id: 3, num: "1", next1Num: "2", next2Num: "1" },
		//   { id: 4, num: "2", next1Num: "1", next2Num: "2" },
		//   { id: 5, num: "1", next1Num: "2", next2Num: "2" },
		//   { id: 6, num: "2", next1Num: "2", next2Num: null },
		//   { id: 7, num: "2", next1Num: null, next2Num: null }
		// ]

		// Step 3: Match rows where current num == next1Num == next2Num
		{
			$match: {
				$expr: {
					$and: [
						{ $eq: ["$num", "$next1Num"] },
						{ $eq: ["$num", "$next2Num"] }
						]
					}
				}
			},
		// Example matched rows:
		// [
		//   { id: 1, num: "1", next1Num: "1", next2Num: "1" }
		// ]

		// Step 4: Return distinct numbers
		{ $group: { _id: "$num" } },
		// Example result:
		// [ { _id: "1" } ]

		// Step 5: Rename field for final output
		{ $project: { ConsecutiveNums: "$_id", _id: 0 } }
		// Final result:
		// [ { ConsecutiveNums: "1" } ]
		]);