// Insert into teacher collections
    db.teacher.insertMany([
        { teacher_id: 1, subject_id: 2, dept_id: 3 },
        { teacher_id: 1, subject_id: 2, dept_id: 4 },
        { teacher_id: 1, subject_id: 3, dept_id: 3 },
        { teacher_id: 2, subject_id: 1, dept_id: 1 },
        { teacher_id: 2, subject_id: 2, dept_id: 1 },
        { teacher_id: 2, subject_id: 3, dept_id: 1 },
        { teacher_id: 2, subject_id: 4, dept_id: 1 }
        ]);
