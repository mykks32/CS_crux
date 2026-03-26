SELECT p.product_id,
	   -- average_price = (unit * price) / total_units rounded to 2
	   -- case when unitsSold table is empty so average_price becomes zero
	   CASE
		   WHEN SUM(u.units) IS NULL OR SUM(u.units) = 0 THEN 0
		   ELSE ROUND(SUM(u.units * p.price)::NUMERIC / SUM(u.units), 2)
		   END AS average_price
FROM prices p
-- left join -> even when units table is empty
-- it still calculate the average_price to be zero
LEFT JOIN unitssold u
		  ON p.product_id = u.product_id
			  -- purchase date decide which price was used for the units
			  -- 100 units sold for price 5
			  -- 15 unit sold for price 20
			  AND u.purchase_date BETWEEN p.start_date AND p.end_date
GROUP BY p.product_id
ORDER BY p.product_id;