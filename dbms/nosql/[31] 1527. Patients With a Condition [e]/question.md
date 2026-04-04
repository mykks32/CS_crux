# 1527. Patients With a Condition

**Difficulty:** Easy

## Table: Patients

| Column Name  | Type    |
|--------------|---------|
| patient_id   | int     |
| patient_name | varchar |
| conditions   | varchar |

- `patient_id` is the primary key.
- `conditions` contains zero or more condition codes separated by spaces.

## Problem Description

You need to find patients who have **Type I Diabetes**.

- Type I Diabetes condition codes **start with "DIAB1"**.

## Objective

- Filter patients whose `conditions` column contains at least one condition starting with `"DIAB1"`.
- Return:
    - patient_id
    - patient_name
    - conditions

- The result can be in any order.

## Example

### Input

Patients table:

| patient_id | patient_name | conditions     |
|------------|--------------|----------------|
| 1          | Daniel       | YFEV COUGH     |
| 2          | Alice        |                |
| 3          | Bob          | DIAB100 MYOP   |
| 4          | George       | ACNE DIAB100   |
| 5          | Alain        | DIAB201        |

### Output

| patient_id | patient_name | conditions     |
|------------|--------------|----------------|
| 3          | Bob          | DIAB100 MYOP   |
| 4          | George       | ACNE DIAB100   |

## Explanation

- Bob → has "DIAB100" → matches DIAB1 prefix
- George → has "DIAB100" → matches DIAB1 prefix
- Others do not contain any condition starting with "DIAB1"  