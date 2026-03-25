WITH COM AS ( SELECT user_id, action, COUNT(*) AS count
			  FROM confirmations
			  GROUP BY user_id, action )

SELECT s.user_id,
-- 	   COALESCE(SUM(c.count), 0) AS total_count,
-- 	   COALESCE(SUM(CASE WHEN c.action = 'confirmed' THEN count END), 0) AS confirmed_actions,
	   ROUND(
			   CASE
				   WHEN COALESCE(SUM(c.count), 0) = 0 THEN 0
				   ELSE COALESCE(SUM(CASE WHEN c.action = 'confirmed' THEN c.count END), 0)::DECIMAL
					   / SUM(c.count)
				   END
		   , 2) AS confirmation_rate
FROM signups s
LEFT JOIN COM c
		  ON s.user_id = c.user_id
GROUP BY s.user_id
ORDER BY s.user_id


