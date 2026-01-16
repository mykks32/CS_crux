CREATE DATABASE factory;

\c factory;

CREATE TABLE Activity
(
    machine_id    INT,
    process_id    INT,
    activity_type VARCHAR(10) CHECK (activity_type IN ('start', 'end')),
    timestamp     FLOAT,
    PRIMARY KEY (machine_id, process_id, activity_type)
);