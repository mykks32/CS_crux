-- EXPLAIN ANALYZE
SELECT sell_date,
       -- COUNT(DISTINCT column):
       -- counts unique values of product per sell_date
       COUNT(DISTINCT product) AS num_sold,
       -- concatenates distinct product values into a single string,
       -- separated by comma,
       -- sorted alphabetically
       -- STRING_AGG(expression, separator ORDER BY ...)
       STRING_AGG(DISTINCT product, ',' ORDER BY product) AS products
FROM activities
-- GROUP BY clause:
-- groups rows by sell_date
GROUP BY sell_date;
-- <- FINAL_OUTPUT ->
-- +----------+--------+----------------------------+
-- |sell_date |num_sold|products                    |
-- +----------+--------+----------------------------+
-- |2020-05-30|3       |Basketball,Headphone,T-Shirt|
-- |2020-06-01|2       |Bible,Pencil                |
-- |2020-06-02|1       |Mask                        |
-- +----------+--------+----------------------------+


-- <- EXPLAIN_ANALYZE_OUTPUT ->
-- +-------------------------------------------------------------------------------------------------------------------+
-- |QUERY PLAN                                                                                                         |
-- +-------------------------------------------------------------------------------------------------------------------+
-- |GroupAggregate  (cost=88.17..103.37 rows=200 width=44) (actual time=0.034..0.037 rows=3 loops=1)                   |
-- |  Group Key: sell_date                                                                                             |
-- |  ->  Sort  (cost=88.17..91.35 rows=1270 width=36) (actual time=0.021..0.021 rows=7 loops=1)                       |
-- |        Sort Key: sell_date, product                                                                               |
-- |        Sort Method: quicksort  Memory: 25kB                                                                       |
-- |        ->  Seq Scan on activities  (cost=0.00..22.70 rows=1270 width=36) (actual time=0.011..0.012 rows=7 loops=1)|
-- |Planning Time: 0.068 ms                                                                                            |
-- |Execution Time: 0.082 ms                                                                                           |
-- +-------------------------------------------------------------------------------------------------------------------+
