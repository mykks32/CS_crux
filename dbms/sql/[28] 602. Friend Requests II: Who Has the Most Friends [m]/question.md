# 602. Friend Requests II: Who Has the Most Friends

**Difficulty:** Medium

## Table: RequestAccepted

| Column Name  | Type |
|--------------|------|
| requester_id | int  |
| accepter_id  | int  |
| accept_date  | date |

- (requester_id, accepter_id) is the primary key.
- Each row represents a **friend request that was accepted**.
- Friendship is **bidirectional**:
    - If A is friends with B, then B is also friends with A.

## Problem Description

Each accepted request creates a friendship between two users.

You need to:
- Count the total number of friends each user has
- Identify the user with the **maximum number of friends**

## Objective

- Return:
    - `id` → user id with the most friends
    - `num` → number of friends

- It is guaranteed that **only one user** has the maximum number of friends.

## Example

### Input

RequestAccepted table:

| requester_id | accepter_id | accept_date |
|--------------|-------------|-------------|
| 1            | 2           | 2016/06/03  |
| 1            | 3           | 2016/06/08  |
| 2            | 3           | 2016/06/08  |
| 3            | 4           | 2016/06/09  |

### Output

| id | num |
|----|-----|
| 3  | 3   |

## Explanation

- User 1 → friends: {2, 3} → 2 friends
- User 2 → friends: {1, 3} → 2 friends
- User 3 → friends: {1, 2, 4} → 3 friends
- User 4 → friends: {3} → 1 friend

→ User 3 has the most friends (3)

## Follow-up

If multiple users can have the same maximum number of friends:
- Return all such users along with their friend counts  