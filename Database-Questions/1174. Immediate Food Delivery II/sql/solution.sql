WITH FirstOrders AS
         (SELECT customer_id,
                 order_date,
                 customer_pref_delivery_date,
                 ROW_NUMBER() OVER (
                     PARTITION BY customer_id
                     ORDER BY order_date
                     ) AS rn
          FROM delivery)
SELECT ROUND(100.0 * SUM(
        CASE WHEN order_date = customer_pref_delivery_date THEN 1 ELSE 0 END
                     ) / COUNT(*),
             2)::numeric(5, 2) AS immediate_percentage
FROM FirstOrders
WHERE rn = 1;