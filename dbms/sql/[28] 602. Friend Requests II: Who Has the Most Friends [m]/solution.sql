SELECT id, COUNT(*) AS num
FROM ( SELECT requester_id AS id
       FROM RequestAccepted
       UNION ALL
       SELECT accepter_id AS id
       FROM RequestAccepted ) AS combined
-- <- COMBINED_OUTPUT ->
-- +--+
-- |id|
-- +--+
-- |1 |
-- |1 |
-- |2 |
-- |3 |
-- |2 |
-- |3 |
-- |3 |
-- |4 |
-- +--+
GROUP BY id
ORDER BY num DESC
-- <- GROUP_ORDER_OUTPUT ->
-- +--+---+
-- |id|num|
-- +--+---+
-- |3 |3  |
-- |2 |2  |
-- |1 |2  |
-- |4 |1  |
-- +--+---+
LIMIT 1
-- <- FINAL_OUTPUT ->
-- +--+---+
-- |id|num|
-- +--+---+
-- |3 |3  |
-- +--+---+
