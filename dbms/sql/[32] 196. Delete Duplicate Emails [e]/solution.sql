DELETE
FROM person
WHERE id NOT IN
      ( SELECT MIN(id)
        FROM person
        GROUP BY email
-- <- SUBQUERY_OUTPUT ->
-- +---+
-- |min|
-- +---+
-- |2  |
-- |1  |
-- +---+
      );
-- <- FINAL_OUTPUT ->
-- +--+----------------+
-- |id|email           |
-- +--+----------------+
-- |3 |john@example.com|
-- +--+----------------+