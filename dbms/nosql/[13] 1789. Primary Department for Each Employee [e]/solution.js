db.Employee.aggregate([
    {
        $lookup: {
            from: "Employee",
            let: { employee_id: "$employee_id" },
            pipeline: [
                {
                    $match: {
                        $expr: {
                            $and: [
                                { $eq: ["$employee_id", "$$employee_id"] },
                                { $eq: ["$primary_flag", "Y"] }
                                ]
                            }
                        }
                    }
                ],
            as: "primary_dept"
            }
        },
    // <- LOOKUP_OUTPUT ->
    // Left Join Self on employee_id and primary_flag = 'Y'
    //    -- Out of Left join for *
    //    -- (e1.employee_id, e1.department_id, e1.primary_flag, e2.employee_id, e2.department_id, e2.primary_flag)
    //    -- (1, 1, 'N', NULL, NULL, NULL),
    //        -- (2, 1, 'Y', 2, 1, 'Y'),
    //        -- (2, 2, 'N', 2, 1, 'Y'),
    //        -- (3, 3, 'N', NULL, NULL, NULL),
    //        -- (4, 2, 'N', 4, 3, 'Y'),
    //        -- (4, 3, 'Y', 4, 3, 'Y'),
    //        -- (4, 4, 'N', 4, 3, 'Y');
    {
        $unwind: {
            path: "$primary_dept",
            preserveNullAndEmptyArrays: true
            }
        },
    //    <- UNWIND_OUTPUT ->
    //    +------------------------+-------------+-----------+------------+--------------------------------------------------------------------------------------------------------+
    //    |_id                     |department_id|employee_id|primary_flag|primary_dept                                                                                            |
    //    +------------------------+-------------+-----------+------------+--------------------------------------------------------------------------------------------------------+
    //    |69c81ef0f02a837ea7270ce2|1            |1          |N           |null                                                                                                    |
    //    |69c81ef0f02a837ea7270ce3|1            |2          |Y           |{"_id": {"$oid": "69c81ef0f02a837ea7270ce3"}, "employee_id": 2, "department_id": 1, "primary_flag": "Y"}|
    //    |69c81ef0f02a837ea7270ce4|2            |2          |N           |{"_id": {"$oid": "69c81ef0f02a837ea7270ce3"}, "employee_id": 2, "department_id": 1, "primary_flag": "Y"}|
    //    |69c81ef0f02a837ea7270ce5|3            |3          |N           |null                                                                                                    |
    //    |69c81ef0f02a837ea7270ce6|2            |4          |N           |{"_id": {"$oid": "69c81ef0f02a837ea7270ce7"}, "employee_id": 4, "department_id": 3, "primary_flag": "Y"}|
    //    |69c81ef0f02a837ea7270ce7|3            |4          |Y           |{"_id": {"$oid": "69c81ef0f02a837ea7270ce7"}, "employee_id": 4, "department_id": 3, "primary_flag": "Y"}|
    //    |69c81ef0f02a837ea7270ce8|4            |4          |N           |{"_id": {"$oid": "69c81ef0f02a837ea7270ce7"}, "employee_id": 4, "department_id": 3, "primary_flag": "Y"}|
    //    +------------------------+-------------+-----------+------------+--------------------------------------------------------------------------------------------------------+
    //
    {
        $match: {
            $or: [
                { primary_flag: "Y" },
                { primary_dept: null }
                ]
            }
        },
    // <- MATCH_OUTPUT ->
    //    +------------------------+-------------+-----------+------------+--------------------------------------------------------------------------------------------------------+
    //    |_id                     |department_id|employee_id|primary_flag|primary_dept                                                                                            |
    //    +------------------------+-------------+-----------+------------+--------------------------------------------------------------------------------------------------------+
    //    |69c81ef0f02a837ea7270ce2|1            |1          |N           |null                                                                                                    |
    //    |69c81ef0f02a837ea7270ce3|1            |2          |Y           |{"_id": {"$oid": "69c81ef0f02a837ea7270ce3"}, "employee_id": 2, "department_id": 1, "primary_flag": "Y"}|
    //    |69c81ef0f02a837ea7270ce5|3            |3          |N           |null                                                                                                    |
    //    |69c81ef0f02a837ea7270ce7|3            |4          |Y           |{"_id": {"$oid": "69c81ef0f02a837ea7270ce7"}, "employee_id": 4, "department_id": 3, "primary_flag": "Y"}|
    //    +------------------------+-------------+-----------+------------+--------------------------------------------------------------------------------------------------------+
    {
        $project: {
            _id: 0,
            employee_id: 1,
            department_id: 1
            }
        }
    // <- PROJECT_OUTPUT ->
    //    +-------------+-----------+
    //    |department_id|employee_id|
    //    +-------------+-----------+
    //    |1            |1          |
    //    |1            |2          |
    //    |3            |3          |
    //    |3            |4          |
    //    +-------------+-----------+
    ])