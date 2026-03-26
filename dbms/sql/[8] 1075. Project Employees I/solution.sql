SELECT p.project_id,
       -- Calculate average_years and rounded to 2
       ROUND((SUM(e.experience_years)::numeric/ COUNT(p.employee_id)),2) AS average_years
FROM project p
JOIN employee e
ON p.employee_id = e.employee_id
-- Group by project_id
GROUP BY p.project_id
ORDER BY p.project_id;