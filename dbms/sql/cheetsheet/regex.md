# Regex in SQL

SQL regex support varies by engine. Covered here: **PostgreSQL**, **MySQL**, and **SQLite**.

---

## Core Syntax (POSIX / PCRE)

```
.           any character except newline
\d          digit [0-9]
\w          word character [a-zA-Z0-9_]
\s          whitespace
^           start of string
$           end of string
*           0 or more
+           1 or more
?           0 or 1
{n}         exactly n
{n,m}       between n and m
[abc]       a, b, or c
[^abc]      anything except a, b, c
(a|b)       a or b
(abc)       capturing group
```

---

## PostgreSQL

### Match operators

```sql
-- Case-sensitive match
SELECT * FROM users WHERE email ~ '^admin';

-- Case-insensitive match
SELECT * FROM users WHERE email ~* '^admin';

-- Does NOT match (case-sensitive)
SELECT * FROM users WHERE email !~ '@gmail\.com$';

-- Does NOT match (case-insensitive)
SELECT * FROM users WHERE email !~* '@gmail\.com$';
```

### `REGEXP_REPLACE`

```sql
-- Remove all non-digit characters (g = global, all occurrences)
SELECT REGEXP_REPLACE(phone, '[^0-9]', '', 'g') FROM users;
-- "977-981-234" → "977981234"

-- Reformat date using capture group back-references (\1, \2, \3)
SELECT REGEXP_REPLACE('2024-01-15', '^(\d{4})-(\d{2})-(\d{2})$', '\3/\2/\1');
-- "15/01/2024"

-- Replace first occurrence only (no g flag)
SELECT REGEXP_REPLACE(description, 'foo', 'bar') FROM posts;
```

### `REGEXP_MATCH` — first match + captures

Returns a text array. Index 1 = full match or first group.

```sql
-- Extract local part and domain from email
SELECT REGEXP_MATCH(email, '^([\w.-]+)@([\w.-]+)$') FROM users;
-- {"john.doe", "gmail.com"}

-- Access a specific capture group
SELECT (REGEXP_MATCH(email, '^([\w.-]+)@'))[1] AS local_part FROM users;
```

### `REGEXP_MATCHES` — all matches (use with `g` flag)

Returns a set of rows, one per match.

```sql
-- Extract all hashtags from a post body
SELECT m[1]
FROM posts,
     REGEXP_MATCHES(body, '#(\w+)', 'g') AS m
WHERE id = 1;
-- "mongodb"
-- "nosql"
-- "database"
```

### `SIMILAR TO` (SQL standard — limited)

Uses SQL regex syntax, not POSIX/PCRE.

```sql
-- % = any sequence (like .* in regex)
-- _ = any single char (like . in regex)
SELECT * FROM users WHERE name SIMILAR TO 'J(ohn|ane)%';
SELECT * FROM products WHERE code SIMILAR TO '[A-Z]{2}[0-9]{4}';
```

> Prefer `~` over `SIMILAR TO` — it is more powerful and uses standard regex syntax.

### Flags for `REGEXP_REPLACE` and `REGEXP_MATCHES`

```
g    global (all occurrences)
i    case-insensitive
n    newline-sensitive (. does not match \n)
```

---

## MySQL

### `REGEXP` / `RLIKE`

`REGEXP` and `RLIKE` are aliases.

```sql
-- Basic match (case-insensitive by default)
SELECT * FROM users WHERE email REGEXP '^admin';

-- Case-sensitive using BINARY
SELECT * FROM users WHERE email REGEXP BINARY '^Admin';

-- NOT match
SELECT * FROM users WHERE email NOT REGEXP '@gmail\.com$';

-- Multiple patterns with alternation
SELECT * FROM users WHERE phone REGEXP '^(98|97)[0-9]{8}$';
```

### `REGEXP_REPLACE` (MySQL 8+)

```sql
-- Remove all non-digit characters
SELECT REGEXP_REPLACE(phone, '[^0-9]', '') FROM users;
-- "977-981-2345678" → "97798123456789"

-- Replace all spaces with hyphens (slugify)
SELECT REGEXP_REPLACE(LOWER(title), ' ', '-') FROM posts;
```

### `REGEXP_SUBSTR` (MySQL 8+)

Extracts the first matching substring.

```sql
-- Extract first number from a string
SELECT REGEXP_SUBSTR(description, '[0-9]+') FROM products;
-- "Order 123 placed" → "123"

-- With occurrence and position arguments
-- REGEXP_SUBSTR(str, pattern, pos, occurrence)
SELECT REGEXP_SUBSTR('cat dog bird', '[a-z]+', 1, 2);
-- "dog"  (second occurrence)
```

### `REGEXP_INSTR` (MySQL 8+)

Returns the starting position of the first match (1-indexed, 0 = not found).

```sql
SELECT REGEXP_INSTR(email, '@') FROM users;
-- "john@gmail.com" → 5

-- With occurrence argument
SELECT REGEXP_INSTR('one1two2three3', '[0-9]', 1, 2);
-- position of second digit → 8
```

### `REGEXP_LIKE` (MySQL 8+)

Explicit function form of `REGEXP`. Supports a flags argument.

```sql
SELECT * FROM users WHERE REGEXP_LIKE(email, '^admin', 'i');
-- 'i' = case-insensitive
-- 'c' = case-sensitive
-- 'm' = multiline
```

---

## SQLite

SQLite has a `REGEXP` keyword but the underlying function **must be registered at runtime** — it is not built in.

### Register in Node.js (better-sqlite3)

```ts
import Database from 'better-sqlite3';

const db = new Database('app.db');

db.function('regexp', (pattern: string, value: string): number => {
  return new RegExp(pattern, 'i').test(value ?? '') ? 1 : 0;
});
```

### Register in Python

```python
import sqlite3
import re

conn = sqlite3.connect('app.db')
conn.create_function('REGEXP', 2, lambda pat, val: bool(re.search(pat, val or '')))
```

### Usage after registering

```sql
SELECT * FROM users WHERE email REGEXP '^admin';
SELECT * FROM products WHERE name REGEXP 'wireless|bluetooth';
SELECT * FROM posts WHERE body REGEXP '#\w+';
```

---

## Common Patterns — SQL

```sql
-- Email
WHERE email ~ '^[\w.-]+@[\w.-]+\.\w{2,}$'

-- Nepali phone (98xxxxxxxx or 97xxxxxxxx)
WHERE phone ~ '^9[78][0-9]{8}$'

-- URL (http or https)
WHERE url ~ '^https?:\/\/'

-- Only digits
WHERE value ~ '^\d+$'

-- Date YYYY-MM-DD
WHERE date_str ~ '^\d{4}-\d{2}-\d{2}$'

-- Slug (lowercase, hyphens only)
WHERE slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'

-- IPv4 address
WHERE ip ~ '^\d{1,3}(\.\d{1,3}){3}$'

-- Starts with http or https
WHERE url ~ '^https?://'

-- Ends with image extension
WHERE filename ~ '\.(jpg|jpeg|png|gif|webp)$'
```

---

## Quick Reference

| Feature              | PostgreSQL        | MySQL 8+            | SQLite             |
|----------------------|-------------------|---------------------|--------------------|
| Match                | `~` / `~*`        | `REGEXP`            | `REGEXP` (manual)  |
| Not match            | `!~` / `!~*`      | `NOT REGEXP`        | `NOT REGEXP`       |
| Replace              | `REGEXP_REPLACE`  | `REGEXP_REPLACE`    | —                  |
| Extract first match  | `REGEXP_MATCH`    | `REGEXP_SUBSTR`     | —                  |
| Extract all matches  | `REGEXP_MATCHES`  | `REGEXP_SUBSTR` + occurrence | —       |
| Position of match    | —                 | `REGEXP_INSTR`      | —                  |
| Case-insensitive     | `~*` or `i` flag  | default / `'i'` flag | depends on impl   |
| Capture groups       | `\1`, `\2`        | `\1`, `\2`          | —                  |