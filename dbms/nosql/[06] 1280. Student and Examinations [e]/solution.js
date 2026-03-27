db.students.aggregate([
	// Cross Join
	{
		$lookup: {
			from: 'subjects',
			pipeline: [],
			as: 'subjects'
			}
		},
	{
		$unwind: '$subjects'
		},
	// Left Join examination
	{
		$lookup: {
			from: 'examinations',
			let: {
				studentId: '$student_id',
				studentName: '$subjects.subject_name'
				},
			pipeline: [
				{
					$match: {
						$expr:{
							$and:[
								{ $eq: ['$student_id', '$$studentId'] },
								{ $eq: ['$subject_name', '$$studentName'] }
								]
							}
						}
					}
				],
			as: 'exam_records'
			}
		},
	// add attended_exams field
	{
		$addFields: {
			attended_exams: {
				$size: '$exam_records'
				}
			}
		},
	// project required fields only
	{
		$project: {
			_id: 0,
			student_id: 1,
			student_name: 1,
			subject_name: '$subjects.subject_name',
			attended_exams: 1
			}
		},
	// sort by student_id and subject_name
	{
		$sort: {
			student_id: 1,
			subject_name: 1
			}
		}
	])