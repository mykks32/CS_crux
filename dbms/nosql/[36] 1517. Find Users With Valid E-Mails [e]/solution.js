db.Users.find({
    //-- ^ -> start of string
    //-- [a-zA-Z] -> must start with letter
    //-- [a-zA-Z0-9_.-]* -> allowed characters
    //-- @leetcode\.com -> fixed domain (. escaped)
    //-- $ -> end of string
    mail: {
        $regex: '^[A-Za-z][a-zA-Z0-9_.-]*@leetcode\\.com$'
        }
    },
    {
        _id: 0,
        user_id: 1,
        name: 1,
        mail: 1
        }
    )
//    <- FINAL_OUTPUT ->
//    +-----------------------+---------+-------+
//    |mail                   |name     |user_id|
//    +-----------------------+---------+-------+
//    |winston@leetcode.com   |Winston  |1      |
//    |bella-@leetcode.com    |Annabelle|3      |
//    |sally.come@leetcode.com|Sally    |4      |
//    +-----------------------+---------+-------+