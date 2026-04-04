// Find command is project in aggregation Pipeline
    db.patient.find(
        {
            // Match DIAB1 at start OR after a space
            $or: [
                { conditions: { $regex: "^DIAB1" } },
                { conditions: { $regex: "\\sDIAB1" } }
                ]
            },
        // Projection in find Command
        {
            _id: 0,
            patient_id: 1,
            patient_name: 1,
            conditions: 1
            }
        ).sort({ patient_id: 1 });