SELECT *
FROM "Users"
-- ~ -> case-sensitive match
-- ^ -> start of string
-- [a-zA-Z] -> must start with letter
-- [a-zA-Z0-9_.-]* -> allowed characters
-- @leetcode\.com -> fixed domain (. escaped)
-- $ -> end of string
WHERE mail ~ '^[a-zA-Z][a-zA-Z0-9_.-]*@leetcode\.com$';