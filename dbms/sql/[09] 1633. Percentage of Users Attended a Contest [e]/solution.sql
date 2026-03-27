SELECT r.contest_id,
       -- count user based on grouping and divide it with total user in users table
	   ROUND(COUNT(r.user_id) * 100.0 / (SELECT COUNT(user_id) FROM Users), 2) AS percentage
FROM register r
LEFT JOIN users u
		  ON u.user_id = r.user_id
GROUP BY r.contest_id
ORDER BY percentage DESC, r.contest_id;

-- Simple Implementation
-- SELECT
-- 	r.contest_id,
-- 	ROUND(COUNT(r.user_id) * 100.0 / (SELECT COUNT(*) FROM Users), 2) AS percentage
-- FROM Register r
-- GROUP BY r.contest_id
-- ORDER BY percentage DESC, contest_id ASC;