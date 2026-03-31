----------------
-- CTEs AND JOIN
------------------
WITH
    categories(category) AS (VALUES ( 'Low Salary' ), ( 'Average Salary' ), ( 'High Salary' ))
-- <- CTEs_OUTPUT ->
-- +--------------+
-- |category      |
-- +--------------+
-- |Low Salary    |
-- |Average Salary|
-- |High Salary   |
-- +--------------+

SELECT c.category,
       COUNT(a.account_id) AS accounts_count
FROM categories c
         LEFT JOIN account a
                   ON
                       -- JOIN on Low Salary and Income < 20000
                       (C.category = 'Low Salary' AND a.income < 20000)
                           -- JOIN on Average Salary and 20000 < income <= 50000
                           OR (c.category = 'Average Salary' AND a.income BETWEEN 20000 AND 50000)
                           -- JOIN on High Salary and Income > 50000
                           OR (c.category = 'High Salary' AND a.income > 50000)
GROUP BY C.category
ORDER BY C.category;
-- <- OUTPUT ->
-- +--------------+--------------+
-- |category      |accounts_count|
-- +--------------+--------------+
-- |Average Salary|0             |
-- |High Salary   |3             |
-- |Low Salary    |1             |
-- +--------------+--------------+

-------------
-- UNION
-------------
SELECT 'Low Salary' AS category,
       COUNT(*)     AS accounts_count
FROM account
WHERE income < 20000
-- <- LOWSALARY_OUTPUT ->
-- +----------+--------------+
-- |category  |accounts_count|
-- +----------+--------------+
-- |Low Salary|1             |
-- +----------+--------------+

UNION ALL

SELECT 'Average Salary' AS category,
       COUNT(*)         AS accounts_count
FROM account
WHERE income BETWEEN 20000 AND 50000
-- <- AVERAGE_SALARY_OUTPUT ->
-- +--------------+--------------+
-- |category      |accounts_count|
-- +--------------+--------------+
-- |Average Salary|0             |
-- +--------------+--------------+

UNION ALL

SELECT 'High Salary' AS category,
       COUNT(*)      AS accounts_count
FROM account
WHERE income > 50000;
-- <- HIGH_SALARY_OUTPUT ->
-- +-----------+--------------+
-- |category   |accounts_count|
-- +-----------+--------------+
-- |High Salary|3             |
-- +-----------+--------------+

-- <- OUTPUT ->
-- +--------------+--------------+
-- |category      |accounts_count|
-- +--------------+--------------+
-- |Low Salary    |1             |
-- |Average Salary|0             |
-- |High Salary   |3             |
-- +--------------+--------------+
