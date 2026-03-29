# 2356. Number of Unique Subjects Taught by Each Teacher

**Difficulty:** Easy

## Table: Teacher

| Column Name | Type |
|-------------|------|
| teacher_id  | int  |
| subject_id  | int  |
| dept_id     | int  |

- (subject_id, dept_id) is the primary key.
- Each row indicates that a teacher teaches a subject in a specific department.

## Problem Description

A teacher may teach the same subject in multiple departments.

You need to count the number of **unique subjects** each teacher teaches, regardless of the department.

## Objective

For each `teacher_id`, calculate:
- The number of **distinct subject_id** they teach.

Return the result table in any order.

## Example

### Input

Teacher table:

| teacher_id | subject_id | dept_id |
|------------|------------|---------|
| 1          | 2          | 3       |
| 1          | 2          | 4       |
| 1          | 3          | 3       |
| 2          | 1          | 1       |
| 2          | 2          | 1       |
| 2          | 3          | 1       |
| 2          | 4          | 1       |

### Output

| teacher_id | cnt |
|------------|-----|
| 1          | 2   |
| 2          | 4   |

## Explanation

- Teacher 1:
    - Subject 2 (appears in multiple departments but counted once)
    - Subject 3  
      → Total unique subjects = 2

- Teacher 2:
    - Subjects 1, 2, 3, 4  
      → Total unique subjects = 4  