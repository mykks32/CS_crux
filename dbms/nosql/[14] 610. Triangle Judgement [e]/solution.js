db.triangle.aggregate([
    // Project x, y, z, triangle or not
    {
        $project: {
            _id: 0,
            x: 1,
            y: 1,
            z: 1,
            triangle: {
                $cond: [
                    {
                        $and: [
                            // All sides must be positive
                            { $gt: ["$x", 0] },
                            { $gt: ["$y", 0] },
                            { $gt: ["$z", 0] },

                            // Triangle inequality conditions
                            { $gt: [{ $add: ["$x", "$y"] }, "$z"] },
                            { $gt: [{ $add: ["$x", "$z"] }, "$y"] },
                            { $gt: [{ $add: ["$y", "$z"] }, "$x"] }
                            ]
                        },
                    'Yes',
                    'No'
                    ]
                }
            }
        }
    ])