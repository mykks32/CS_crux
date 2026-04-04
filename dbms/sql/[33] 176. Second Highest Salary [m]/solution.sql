-- First Way
SELECT ( SELECT DISTINCT salary
         FROM "Employee"
         ORDER BY salary DESC
         OFFSET 1 LIMIT 1
           -- <- OFFSET_LIMIT_OUTPTU ->
           -- +------+
           -- |salary|
           -- +------+
           -- |200   |
           -- +------+
       ) AS "SecondHighestSalary";
-- <- SCALAR_SELECT_OUTPUT ->
-- +-------------------+
-- |SecondHighestSalary|
-- +-------------------+
-- |200                |
-- +-------------------+

-- Second Way
SELECT MAX(salary) AS "SecondHighestSalary"
FROM "Employee"
-- salary < Max(salary)
WHERE salary < ( SELECT MAX(salary)
                 FROM "Employee"
    -- <- MAX_OUTPUT ->
    -- +---+
    -- |max|
    -- +---+
    -- |300|
    -- +---+
);
-- <- FINAL_OUTPUT ->
-- +-------------------+
-- |SecondHighestSalary|
-- +-------------------+
-- |200                |
-- +-------------------+