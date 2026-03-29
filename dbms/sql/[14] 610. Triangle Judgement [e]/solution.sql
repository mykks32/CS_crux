SELECT x,
       y,
       z,
       -- Check if given sides can form a triangle
       CASE
           -- All sides must be positive
           WHEN x > 0 AND y > 0 AND z > 0
               -- Sum of any two sides must be greater than the third
               AND (x + y > z)
               AND (x + z > y)
               AND (y + z > x)
               -- Valid Triangle
               THEN 'Yes'
           -- Invalid Triangle
           ELSE 'No'
           END AS triangle
FROM triangle