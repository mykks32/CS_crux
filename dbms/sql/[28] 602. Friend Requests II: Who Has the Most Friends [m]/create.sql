-- RequestAccepted
CREATE TABLE RequestAccepted
    (
        requester_id INT,
        accepter_id  INT,
        accept_date  DATE,

        PRIMARY KEY (requester_id, accepter_id)
    )