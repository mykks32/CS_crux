WITH
    total_product
        -- Get total_count of product
        AS (SELECT COUNT(*) AS total_count
            FROM product)

SELECT c.customer_id
FROM customer c
-- Group by customer_id
GROUP BY c.customer_id
-- Have count of group and total_product equal
HAVING COUNT(DISTINCT c.product_key) = (SELECT t.total_count
                                        FROM total_product t);
