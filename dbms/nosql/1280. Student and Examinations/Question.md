# 1280. Students and Examinations

## Problem

You are given three tables: **Students**, **Subjects**, and **Examinations**.

- **Students** table:

| Column Name   | Type    |
|---------------|---------|
| student_id    | int     |
| student_name  | varchar |

- **Subjects** table:

| Column Name  | Type    |
|--------------|---------|
| subject_name | varchar |

- **Examinations** table:

| Column Name  | Type    |
|--------------|---------|
| student_id   | int     |
| subject_name | varchar |

**Notes:**

- Each student may have attended an exam for a subject multiple times.
- `Examinations` may contain duplicates.
- Every student can take every subject, but they may not have attended all exams.

---

## Task

Find the **number of times each student attended each exam**.

Return the table ordered by `student_id` and `subject_name`.

**Output columns:**

| Column Name       | Description                               |
|------------------|-------------------------------------------|
| student_id        | Student ID                                |
| student_name      | Student name                              |
| subject_name      | Subject name                              |
| attended_exams    | Number of times student attended that exam |

---

## Example

### Input

#### Students Table

| student_id | student_name |
|------------|--------------|
| 1          | Alice        |
| 2          | Bob          |
| 13         | John         |
| 6          | Alex         |

#### Subjects Table

| subject_name |
|--------------|
| Math         |
| Physics      |
| Programming  |

#### Examinations Table

| student_id | subject_name |
|------------|--------------|
| 1          | Math         |
| 1          | Physics      |
| 1          | Programming  |
| 2          | Programming  |
| 1          | Physics      |
| 1          | Math         |
| 13         | Math         |
| 13         | Programming  |
| 13         | Physics      |
| 2          | Math         |
| 1          | Math         |

---

### Output

| student_id | student_name | subject_name | attended_exams |
|------------|--------------|--------------|----------------|
| 1          | Alice        | Math         | 3              |
| 1          | Alice        | Physics      | 2              |
| 1          | Alice        | Programming  | 1              |
| 2          | Bob          | Math         | 1              |
| 2          | Bob          | Physics      | 0              |
| 2          | Bob          | Programming  | 1              |
| 6          | Alex         | Math         | 0              |
| 6          | Alex         | Physics      | 0              |
| 6          | Alex         | Programming  | 0              |
| 13         | John         | Math         | 1              |
| 13         | John         | Physics      | 1              |
| 13         | John         | Programming  | 1              |

---

### Explanation

- **Alice**:
    - Math: 3 times
    - Physics: 2 times
    - Programming: 1 time

- **Bob**:
    - Math: 1 time
    - Physics: 0 times
    - Programming: 1 time

- **Alex**:
    - Did not attend any exams

- **John**:
    - Attended each exam 1 time