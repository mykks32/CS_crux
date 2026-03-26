db.Project.aggregate([
	// Join to Employee collection
	{
		$lookup: {
			from: 'Employee',
			localField: 'employee_id',
			foreignField: 'employee_id',
			as: 'employee'
			}
		},
	// Flatten the employee array
	{
		$unwind: '$employee'
		},
	{
		// Group all docs with the same project_id
		$group: {
			_id: '$project_id',
			total_experience: { $sum: "$employee.experience_years" },
			// For each doc in the group, add 1 to employee_count
			employee_count: { $sum: 1 }
			}
		},
	// Calculate average and round to 2 decimals
	{
		$project: {
			_id: 0,
			project_id: '$_id',
			average_years: { $round: [{ $divide: ["$total_experience", "$employee_count"] }, 2] }
			}
		},
	// Sort by project_id
	{
		$sort: {
			project_id: 1
		}
	}
	])