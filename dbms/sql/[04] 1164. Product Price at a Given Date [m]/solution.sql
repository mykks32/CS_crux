SELECT product_id, price
FROM (
	-- Prices with changes
	SELECT p.product_id, p.new_price AS price
	FROM product_price p
	JOIN (
		SELECT product_id, MAX(change_date) AS last_change_date
		FROM product_price
		WHERE change_date <= '2019-08-16'
		GROUP BY product_id
	) AS last_change
		 ON p.product_id = last_change.product_id
			 AND p.change_date = last_change.last_change_date

	UNION ALL

	-- Products with no changes before the date
	SELECT DISTINCT product_id, 10 AS price
	FROM product_price
	WHERE product_id NOT IN (
		SELECT product_id
		FROM product_price
		WHERE change_date <= '2019-08-16'
	)
) AS result
ORDER BY product_id;