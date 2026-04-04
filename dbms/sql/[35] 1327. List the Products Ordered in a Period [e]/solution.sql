-- EXPLAIN ANALYSE
SELECT p.product_name,
       SUM(o.unit) AS unit
FROM "Orders" o
-- Join Order with product on FK->product_id
JOIN "Products" p
           ON o.product_id = p.product_id
-- <- GROUP_BY_OUTPUT ->
-- +---------------------+----+
-- |product_name         |unit|
-- +---------------------+----+
-- |Leetcode Solutions   |130 |
-- |Lenovo               |20  |
-- |Leetcode Kit         |100 |
-- |HP                   |5   |
-- |Jewels of Stringology|110 |
-- +---------------------+----+

-- Where it is in 2nd month of 2020
WHERE EXTRACT(MONTH FROM order_date) = 2
  AND EXTRACT(YEAR FROM order_date) = 2020
GROUP BY o.product_id, p.product_name
-- +---------------------+----+
-- |product_name         |unit|
-- +---------------------+----+
-- |Leetcode Solutions   |130 |
-- |Jewels of Stringology|80  |
-- |HP                   |5   |
-- |Leetcode Kit         |100 |
-- +---------------------+----+

-- Having Sum of units >= 100
HAVING SUM(o.unit) >= 100
-- <- FINAL_OUTPUT ->
-- +------------------+----+
-- |product_name      |unit|
-- +------------------+----+
-- |Leetcode Solutions|130 |
-- |Leetcode Kit      |100 |
-- +------------------+----+


-- <- EXPLAIN_ANALYZE_OUTPUT ->
-- +-----------------------------------------------------------------------------------------------------------------------------------------------+
-- |QUERY PLAN                                                                                                                                     |
-- +-----------------------------------------------------------------------------------------------------------------------------------------------+
-- |GroupAggregate  (cost=59.00..59.02 rows=1 width=44) (actual time=0.048..0.050 rows=2 loops=1)                                                  |
-- |  Group Key: o.product_id, p.product_name                                                                                                      |
-- |  Filter: (sum(o.unit) >= 100)                                                                                                                 |
-- |  Rows Removed by Filter: 2                                                                                                                    |
-- |  ->  Sort  (cost=59.00..59.00 rows=1 width=40) (actual time=0.042..0.043 rows=7 loops=1)                                                      |
-- |        Sort Key: o.product_id, p.product_name                                                                                                 |
-- |        Sort Method: quicksort  Memory: 25kB                                                                                                   |
-- |        ->  Nested Loop  (cost=0.15..58.99 rows=1 width=40) (actual time=0.025..0.034 rows=7 loops=1)                                          |
-- |              ->  Seq Scan on "Orders" o  (cost=0.00..50.80 rows=1 width=8) (actual time=0.012..0.015 rows=7 loops=1)                          |
-- |                    Filter: ((EXTRACT(month FROM order_date) = '2'::numeric) AND (EXTRACT(year FROM order_date) = '2020'::numeric))            |
-- |                    Rows Removed by Filter: 2                                                                                                  |
-- |              ->  Index Scan using "Products_pkey" on "Products" p  (cost=0.15..8.17 rows=1 width=36) (actual time=0.002..0.002 rows=1 loops=7)|
-- |                    Index Cond: (product_id = o.product_id)                                                                                    |
-- |Planning Time: 0.122 ms                                                                                                                        |
-- |Execution Time: 0.076 ms                                                                                                                       |
-- +-----------------------------------------------------------------------------------------------------------------------------------------------+
