// Delete duplicate email from Person collections
    const duplicates = db.Person.aggregate([
        {
            $lookup: {
                from: 'Person',
                let: { id: '$id', email: '$email' },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $and: [
                                    { $eq: ['$email', '$$email'] },
                                    { $gt: ['$id', '$$id'] }
                                    ]
                                }
                            }
                        }
                    ],
                as: 'matched_person'
                }
            },
        { $unwind: '$matched_person' },
        {
            $replaceRoot: { newRoot: '$matched_person' }
            },
        {
            $project: { _id: 1 }
            }
        ]).toArray();

    db.Person.deleteMany({
        _id: { $in: duplicates.map(d => d._id) }
        });