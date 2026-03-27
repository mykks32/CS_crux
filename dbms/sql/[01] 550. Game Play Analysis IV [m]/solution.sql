WITH first_login AS (SELECT player_id,
                            MIN(event_date) AS first_login_date
                     FROM "Activity"
                     GROUP BY player_id),
     next_day_login AS (SELECT DISTINCT a.player_id
                        FROM "Activity" a
                                 JOIN first_login f
                                      ON a.player_id = f.player_id
                                          AND a.event_date = f.first_login_date + INTERVAL '1 day')
SELECT ROUND(
               COUNT(*)::numeric /
               (SELECT COUNT(*) FROM first_login),
               2
       ) AS fraction
FROM next_day_login;