db.Users.aggregate([
    {
        $project: {
            _id: 0,
            user_id: 1,
            name: {
                // $concat: joins multiple strings
                // Syntax: { $concat: [ <string1>, <string2>, ... ] }
                $concat: [

                    // $toUpper: converts string to uppercase
                    // Syntax: { $toUpper: <expression> }
                    // $substrCP: extracts substring
                    // Syntax: { $substrCP: [ <string>, <start>, <length> ] }
                    { $toUpper: { $substrCP: ["$name", 0, 1] } },

                    // $toLower: converts string to lowercase
                    // Syntax: { $toLower: <expression> }
                    // $substrCP: extracts substring from index to end
                    // $strLenCP: returns string length
                    // Syntax: { $strLenCP: <string> }
                    { $toLower: { $substrCP: ["$name", 1, { $strLenCP: '$name' }] } }
                    ]
                }
            }
        }
    ])