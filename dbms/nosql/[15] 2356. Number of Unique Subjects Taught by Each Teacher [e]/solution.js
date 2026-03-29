db.teacher.aggregate([
    {
        $group: {
            _id: '$teacher_id',
            // Without distinct normal COUNT alternative
            // cnt: {
            //  $sum: 1
            // },
            // COUNT(DISTINCT subject_id) -> $addToSet + $size
            subjects: {
                $addToSet: '$subject_id'
                }
            }
        },
    {
        $project: {
            _id: 0,
            teacher_id: '$_id',
            // cnt: 1
            cnt: {$size: '$subjects'}
            }
        }
    ])