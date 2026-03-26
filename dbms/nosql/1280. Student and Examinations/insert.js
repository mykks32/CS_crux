// Insert
	db.students.insertMany([
		{ student_id: 1, student_name: "Alice" },
		{ student_id: 2, student_name: "Bob" },
		{ student_id: 13, student_name: "John" },
		{ student_id: 6, student_name: "Alex" }
		]);

	db.subjects.insertMany([
		{ subject_name: "Math" },
		{ subject_name: "Physics" },
		{ subject_name: "Programming" }
		]);

	db.examinations.insertMany([
		{ student_id: 1, subject_name: "Math" },
		{ student_id: 1, subject_name: "Physics" },
		{ student_id: 1, subject_name: "Programming" },
		{ student_id: 2, subject_name: "Programming" },
		{ student_id: 1, subject_name: "Physics" },
		{ student_id: 1, subject_name: "Math" },
		{ student_id: 13, subject_name: "Math" },
		{ student_id: 13, subject_name: "Programming" },
		{ student_id: 13, subject_name: "Physics" },
		{ student_id: 2, subject_name: "Math" },
		{ student_id: 1, subject_name: "Math" }
		]);