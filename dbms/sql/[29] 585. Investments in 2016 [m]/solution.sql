----------------
-- USING CTEs
----------------
WITH atleast_one_tiv
         AS ( SELECT tiv_2015
              FROM insurance
              GROUP BY tiv_2015
              HAVING COUNT(tiv_2015) >= 2 ),
-- <- CTE_1_OUTPUT ->
-- +--------+
-- |tiv_2015|
-- +--------+
-- |10      |
-- +--------+
    unique_location
         AS ( SELECT lat, lon
              FROM insurance
              GROUP BY lat, lon
              HAVING COUNT(*) = 1 )
-- <- CTE_2_OUTPUT ->
-- +---+---+
-- |lat|lon|
-- +---+---+
-- |10 |10 |
-- |40 |40 |
-- +---+---+

SELECT ROUND(SUM(i.tiv_2016)::NUMERIC, 2) AS tiv_2016
FROM atleast_one_tiv a1
JOIN insurance i
     ON i.tiv_2015 = a1.tiv_2015
JOIN unique_location u ON
    i.lat = u.lat
        AND i.lon = u.lon;
-- <- FINAL_OUTPUT ->
-- +--------+
-- |tiv_2016|
-- +--------+
-- |45      |
-- +--------+

-----------------------
-- USING IN
-----------------------
SELECT ROUND(SUM(tiv_2016)::numeric, 2)
FROM insurance
WHERE tiv_2015 IN ( SELECT tiv_2015
                    FROM insurance
                    GROUP BY tiv_2015
                    HAVING COUNT(*) > 1 )
  AND (lat, lon) IN ( SELECT lat, lon
                      FROM insurance
                      GROUP BY lat, lon
                      HAVING COUNT(*) = 1 )
-- <- FINAL_OUTPUT ->
-- +--------+
-- |tiv_2016|
-- +--------+
-- |45      |
-- +--------+