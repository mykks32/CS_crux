# Average Time of Process per Machine

## Table: Activity

| Column Name    | Type                      |
|----------------|---------------------------|
| machine_id     | int                       |
| process_id     | int                       |
| activity_type  | enum ('start', 'end')     |
| timestamp      | float                     |

**Primary Key:** `(machine_id, process_id, activity_type)`

**Notes:**

- `machine_id`: ID of the machine
- `process_id`: ID of the process running on the machno ine
- `activity_type`: indicates if the process started or ended
- `timestamp`: time in seconds
- Each `(machine_id, process_id)` has exactly one `'start'` and one `'end'`
- `'start'` timestamp is always less than `'end'` timestamp

---

## Problem

There is a factory website with several machines. Each machine runs the same number of processes.

Write a query to compute the **average processing time** for each machine, where:

- Processing time of a process = `end.timestamp - start.timestamp`
- Average processing time for a machine = sum of all process times ÷ number of processes
- Round the average to 3 decimal places
- Return a table with:

| Column Name       | Description |
|------------------|-------------|
| `machine_id`      | ID of the machine |
| `processing_time` | Average time to complete a process (rounded to 3 decimals) |

---

## Example

### Input: Activity table

| machine_id | process_id | activity_type | timestamp |
|------------|------------|---------------|-----------|
| 0          | 0          | start         | 0.712     |
| 0          | 0          | end           | 1.520     |
| 0          | 1          | start         | 3.140     |
| 0          | 1          | end           | 4.120     |
| 1          | 0          | start         | 0.550     |
| 1          | 0          | end           | 1.550     |
| 1          | 1          | start         | 0.430     |
| 1          | 1          | end           | 1.420     |
| 2          | 0          | start         | 4.100     |
| 2          | 0          | end           | 4.512     |
| 2          | 1          | start         | 2.500     |
| 2          | 1          | end           | 5.000     |

---

### Output

| machine_id | processing_time |
|------------|----------------|
| 0          | 0.894          |
| 1          | 0.995          |
| 2          | 1.456          |

---

### Explanation

- Machine 0 average time: `((1.520 - 0.712) + (4.120 - 3.140)) / 2 = 0.894`
- Machine 1 average time: `((1.550 - 0.550) + (1.420 - 0.430)) / 2 = 0.995`
- Machine 2 average time: `((4.512 - 4.100) + (5.000 - 2.500)) / 2 = 1.456`

---