# String Manipulation in PostgreSQL

## 1. Basic String Functions

### `length(str)` / `char_length(str)`
Returns the number of characters in a string.
```sql
SELECT length('hello');        -- 5
SELECT char_length('hello');   -- 5
```

### `upper(str)` / `lower(str)`
Converts string to uppercase or lowercase.
```sql
SELECT upper('hello');   -- HELLO
SELECT lower('WORLD');   -- world
```

### `initcap(str)`
Capitalizes the first letter of each word.
```sql
SELECT initcap('hello world');  -- Hello World
```

---

## 2. Trimming & Padding

### `trim(str)` / `ltrim(str)` / `rtrim(str)`
Removes spaces (or specified characters) from both, left, or right sides.
```sql
SELECT trim('  hello  ');            -- 'hello'
SELECT ltrim('  hello  ');           -- 'hello  '
SELECT rtrim('  hello  ');           -- '  hello'
SELECT trim(BOTH 'x' FROM 'xxhelloxx');  -- 'hello'
SELECT trim(LEADING 'x' FROM 'xxhello'); -- 'hello'
SELECT trim(TRAILING 'x' FROM 'helloxx');-- 'hello'
```

### `lpad(str, length, fill)` / `rpad(str, length, fill)`
Pads a string to a certain length with a fill character.
```sql
SELECT lpad('5', 4, '0');    -- 0005
SELECT rpad('hi', 5, '-');   -- hi---
```

---

## 3. Concatenation

### `||` operator
```sql
SELECT 'Hello' || ' ' || 'World';  -- Hello World
```

### `concat(str1, str2, ...)`
NULL-safe concatenation (NULLs are ignored).
```sql
SELECT concat('Hello', ' ', NULL, 'World');  -- Hello World
```

### `concat_ws(separator, str1, str2, ...)`
Concatenates with a separator, skipping NULLs.
```sql
SELECT concat_ws(', ', 'Alice', NULL, 'Bob');  -- Alice, Bob
SELECT concat_ws('-', '2024', '01', '15');      -- 2024-01-15
```

---

## 4. Substring Extraction

### `substring(str FROM start FOR length)` / `substr(str, start, length)`
Extracts a portion of a string (1-indexed).
```sql
SELECT substring('PostgreSQL' FROM 1 FOR 4);   -- Post
SELECT substr('PostgreSQL', 5, 3);             -- gre
SELECT substring('PostgreSQL' FROM 5);         -- greSQL  (no length = rest of string)
```

### `left(str, n)` / `right(str, n)`
Returns the first or last N characters.
```sql
SELECT left('PostgreSQL', 4);   -- Post
SELECT right('PostgreSQL', 3);  -- SQL
```

---

## 5. Search & Position

### `position(substr IN str)` / `strpos(str, substr)`
Returns the position of the first occurrence (0 if not found).
```sql
SELECT position('gre' IN 'PostgreSQL');   -- 5
SELECT strpos('PostgreSQL', 'SQL');       -- 8
```

### `like` / `ilike`
Pattern matching. `%` = any sequence, `_` = any single character.
```sql
SELECT 'PostgreSQL' LIKE 'Post%';    -- true
SELECT 'PostgreSQL' ILIKE 'post%';   -- true (case-insensitive)
SELECT 'abc' LIKE '_b_';             -- true
```

---

## 6. Replace & Substitution

### `replace(str, from, to)`
Replaces all occurrences of a substring.
```sql
SELECT replace('hello world', 'world', 'postgres');  -- hello postgres
SELECT replace('aabbcc', 'b', 'X');                  -- aaXXcc
```

### `overlay(str PLACING new FROM start FOR length)`
Replaces a portion of a string.
```sql
SELECT overlay('hello world' PLACING 'PostgreSQL' FROM 7 FOR 5);
-- hello PostgreSQL
```

---

## 7. Split & Array Operations

### `split_part(str, delimiter, n)`
Splits a string by delimiter and returns the nth part (1-indexed).
```sql
SELECT split_part('a,b,c,d', ',', 2);       -- b
SELECT split_part('2024-01-15', '-', 1);    -- 2024
```

### `string_to_array(str, delimiter)`
Converts a string to an array.
```sql
SELECT string_to_array('a,b,c', ',');   -- {a,b,c}
```

### `array_to_string(array, delimiter)`
Converts an array back to a string.
```sql
SELECT array_to_string(ARRAY['a','b','c'], '-');  -- a-b-c
```

### `unnest(array)`
Expands an array into rows.
```sql
SELECT unnest(string_to_array('a,b,c', ','));
-- a
-- b
-- c
```

---

## 8. Regex Functions

### `regexp_match(str, pattern)`
Returns the first match as an array.
```sql
SELECT regexp_match('foo 123 bar', '\d+');     -- {123}
SELECT regexp_match('abc', '(a)(b)');          -- {a,b}
```

### `regexp_matches(str, pattern, flags)`
Returns all matches (use with `g` flag for global).
```sql
SELECT regexp_matches('one 1 two 2 three 3', '\d+', 'g');
-- {1}
-- {2}
-- {3}
```

### `regexp_replace(str, pattern, replacement, flags)`
Replaces regex matches.
```sql
SELECT regexp_replace('hello world', 'o', '0');         -- hell0 world
SELECT regexp_replace('hello world', 'o', '0', 'g');    -- hell0 w0rld
SELECT regexp_replace('abc123', '[0-9]', '', 'g');      -- abc
```

### `regexp_split_to_table(str, pattern)` / `regexp_split_to_array(str, pattern)`
Splits a string by a regex pattern.
```sql
SELECT regexp_split_to_table('one  two   three', '\s+');
-- one
-- two
-- three

SELECT regexp_split_to_array('a1b2c3', '[0-9]');  -- {a,b,c,}
```

---

## 9. Type Casting & Formatting

### `cast(value AS type)` / `::type`
```sql
SELECT cast(42 AS TEXT);       -- '42'
SELECT 42::TEXT;               -- '42'
SELECT '42'::INTEGER;          -- 42
SELECT 3.14::TEXT;             -- '3.14'
```

### `to_char(value, format)`
Formats numbers and dates as strings.
```sql
SELECT to_char(1234567.89, 'FM9,999,999.00');   -- 1,234,567.89
SELECT to_char(NOW(), 'YYYY-MM-DD HH24:MI:SS'); -- 2024-01-15 10:30:00
SELECT to_char(42, '000');                       -- 042
```

---

## 10. Encoding & Escaping

### `encode(bytea, format)` / `decode(str, format)`
Encodes/decodes binary data (formats: `base64`, `hex`, `escape`).
```sql
SELECT encode('hello'::bytea, 'base64');         -- aGVsbG8=
SELECT decode('aGVsbG8=', 'base64')::text;       -- hello
SELECT encode('hello'::bytea, 'hex');            -- 68656c6c6f
```

### `quote_literal(str)` / `quote_ident(str)`
Safely escapes strings for SQL usage.
```sql
SELECT quote_literal('it''s a test');   -- 'it''s a test'
SELECT quote_ident('my table');         -- "my table"
```

### `format(formatstr, args...)`
`printf`-style string formatting.
```sql
SELECT format('Hello, %s! You are %s years old.', 'Alice', 30);
-- Hello, Alice! You are 30 years old.

SELECT format('SELECT * FROM %I WHERE id = %L', 'users', 42);
-- SELECT * FROM users WHERE id = '42'
-- %I = identifier (quoted), %L = literal (quoted), %s = string
```

---

## 11. Aggregation on Strings

### `string_agg(str, delimiter)`
Concatenates values from multiple rows into a single string.
```sql
SELECT string_agg(name, ', ' ORDER BY name)
FROM users;
-- Alice, Bob, Charlie

SELECT department, string_agg(name, ' | ' ORDER BY name)
FROM employees
GROUP BY department;
```

---

## 12. Miscellaneous Useful Functions

### `reverse(str)`
Reverses a string.
```sql
SELECT reverse('hello');   -- olleh
```

### `repeat(str, n)`
Repeats a string N times.
```sql
SELECT repeat('ab', 3);   -- ababab
```

### `md5(str)`
Returns the MD5 hash of a string.
```sql
SELECT md5('hello');   -- 5d41402abc4b2a76b9719d911017c592
```

### `ascii(char)` / `chr(n)`
Gets ASCII value of a character or converts code to character.
```sql
SELECT ascii('A');    -- 65
SELECT chr(65);       -- A
```

### `octet_length(str)`
Returns the number of bytes (not characters) in a string.
```sql
SELECT octet_length('hello');    -- 5
SELECT octet_length('नमस्ते');   -- 18 (UTF-8 multibyte)
```

---

## 13. Full Text Search (Basic)

### `to_tsvector` / `to_tsquery`
Converts text to a searchable vector and a query.
```sql
SELECT to_tsvector('english', 'The quick brown fox jumps');
-- 'brown':3 'fox':4 'jump':5 'quick':2

SELECT to_tsquery('english', 'quick & fox');
-- 'quick' & 'fox'

SELECT to_tsvector('english', 'The quick brown fox')
    @@ to_tsquery('english', 'quick & fox');  -- true
```

---

## Quick Reference Table

| Function | Purpose | Example |
|---|---|---|
| `length(s)` | String length | `length('hi')` → 2 |
| `upper(s)` / `lower(s)` | Case change | `upper('hi')` → HI |
| `trim(s)` | Remove spaces | `trim(' hi ')` → hi |
| `lpad(s,n,c)` / `rpad(s,n,c)` | Pad string | `lpad('5',3,'0')` → 005 |
| `concat(...)` | Join strings | `concat('a','b')` → ab |
| `concat_ws(sep,...)` | Join with separator | `concat_ws(',','a','b')` → a,b |
| `substr(s,start,len)` | Extract substring | `substr('hello',2,3)` → ell |
| `left(s,n)` / `right(s,n)` | First/last N chars | `left('hello',3)` → hel |
| `position(sub IN s)` | Find position | `position('ll' IN 'hello')` → 3 |
| `replace(s,from,to)` | Replace substring | `replace('hi','i','ey')` → hey |
| `split_part(s,d,n)` | Split by delimiter | `split_part('a,b',',',2)` → b |
| `regexp_replace(s,p,r,f)` | Regex replace | `regexp_replace('a1','[0-9]','','g')` → a |
| `string_agg(s,d)` | Aggregate to string | `string_agg(name,',')` |
| `format(fmt,...)` | Printf formatting | `format('%s=%s','a',1)` → a=1 |
| `reverse(s)` | Reverse string | `reverse('abc')` → cba |
| `repeat(s,n)` | Repeat string | `repeat('ab',2)` → abab |
| `md5(s)` | MD5 hash | `md5('hi')` → hash |
| `to_char(v,fmt)` | Format as string | `to_char(42,'000')` → 042 |