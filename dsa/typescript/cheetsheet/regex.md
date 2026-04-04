# Regex in TypeScript

TypeScript uses JavaScript's built-in `RegExp` engine (V8), which supports **PCRE-like** syntax with named capture groups, lookaheads, lookbehinds, and the `d` (indices) flag.

---

## Core Syntax

```
.           any character except newline
\d          digit [0-9]
\D          non-digit
\w          word character [a-zA-Z0-9_]
\W          non-word character
\s          whitespace [ \t\n\r\f]
\S          non-whitespace
^           start of string (or line with m flag)
$           end of string (or line with m flag)
\b          word boundary
\B          non-word boundary
*           0 or more (greedy)
+           1 or more (greedy)
?           0 or 1 (greedy)
*?          0 or more (lazy)
+?          1 or more (lazy)
{n}         exactly n
{n,}        n or more
{n,m}       between n and m
[abc]       a, b, or c
[^abc]      anything except a, b, c
(a|b)       a or b
(abc)       capturing group
(?:abc)     non-capturing group
(?<name>)   named capturing group
(?=...)     positive lookahead
(?!...)     negative lookahead
(?<=...)    positive lookbehind
(?<!...)    negative lookbehind
```

---

## 1. Creating a Regex

```ts
// Literal syntax (preferred — no double-escaping)
const r1 = /^\d{4}-\d{2}-\d{2}$/;

// Constructor — use when pattern is dynamic
const r2 = new RegExp('^\\d{4}-\\d{2}-\\d{2}$');  // backslashes must be doubled

// Dynamic pattern from a variable
const prefix = "admin";
const r3 = new RegExp(`^${prefix}\\w+`, 'i');

// With flags
const r4 = /hello/gi;
const r5 = new RegExp('hello', 'gi');
```

### Flags

```
i    case-insensitive
g    global (find all matches)
m    multiline (^ and $ match line boundaries)
s    dotAll (. matches \n too)
u    unicode (enables \u{...} escapes, full Unicode support)
d    indices (adds .indices to match results — TS 4.5+)
```

---

## 2. `RegExp` Methods

### `regex.test(str)` → `boolean`

Fastest way to check if a pattern matches. Use when you only need a yes/no.

```ts
const isEmail = /^[\w.-]+@[\w.-]+\.\w{2,}$/.test("john@gmail.com"); // true
const isPhone = /^9[78]\d{8}$/.test("9812345678");                   // true
const isSlug  = /^[a-z0-9]+(-[a-z0-9]+)*$/.test("my-post-title");   // true
```

> **Note:** With the `g` flag, `test()` is stateful — it advances `lastIndex` on each call. Reset with `regex.lastIndex = 0` or avoid `g` with `test()`.

```ts
const re = /\d+/g;
re.test("abc123"); // true  — lastIndex = 6
re.test("abc123"); // false — starts from index 6, finds nothing
```

### `regex.exec(str)` → `RegExpExecArray | null`

Returns match details including capture groups and index.

```ts
const re = /(\d{4})-(\d{2})-(\d{2})/;
const m = re.exec("Date: 2024-01-15");

if (m) {
  m[0];     // "2024-01-15"  full match
  m[1];     // "2024"        group 1
  m[2];     // "01"          group 2
  m[3];     // "15"          group 3
  m.index;  // 6             position in string
}
```

With `g` flag — call repeatedly to iterate all matches:

```ts
const re = /\d+/g;
const str = "cat1 dog2 bird3";
let m: RegExpExecArray | null;

while ((m = re.exec(str)) !== null) {
  console.log(m[0], "at index", m.index);
}
// "1" at index 3
// "2" at index 8
// "3" at index 13
```

---

## 3. `String` Methods

### `str.match(regex)` → `RegExpMatchArray | null`

```ts
// Without g flag — returns first match + capture groups + index
const m = "Price: $29.99".match(/\$(\d+\.\d{2})/);
if (m) {
  m[0];     // "$29.99"
  m[1];     // "29.99"
  m.index;  // 7
}

// With g flag — returns all full matches only (no captures, no index)
const tags = "#hello #world".match(/#\w+/g);
// ["#hello", "#world"]

// No match
const result = "abc".match(/\d+/);
// null
```

### `str.matchAll(regex)` → `IterableIterator<RegExpMatchArray>`

Requires the `g` flag. Returns all matches with capture groups and indices.

```ts
const str = "cat:1 dog:2 bird:3";
const re = /(\w+):(\d+)/g;
const matches = [...str.matchAll(re)];

for (const m of matches) {
  m[0];     // "cat:1"
  m[1];     // "cat"
  m[2];     // "1"
  m.index;  // position
}

// Type-safe iteration
const results = [...str.matchAll(/(\w+):(\d+)/g)].map(m => ({
  key:   m[1],
  value: m[2]
}));
// [{ key: "cat", value: "1" }, ...]
```

### `str.replace(regex, replacement)` → `string`

```ts
// Replace first occurrence (no g flag)
"hello world".replace(/o/, "0");         // "hell0 world"

// Replace all occurrences (g flag)
"hello world".replace(/o/g, "0");        // "hell0 w0rld"

// Capture group back-references ($1, $2 ...)
"2024-01-15".replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1");
// "15/01/2024"

// Replace with a function — full control
"hello world".replace(/\b\w/g, c => c.toUpperCase());
// "Hello World"

// Function with capture groups
"john_doe".replace(/(\w+)_(\w+)/, (_, a, b) => `${b} ${a}`);
// "doe john"
```

### `str.replaceAll(str | regex, replacement)` → `string`

```ts
// String form — replaces all without needing g flag
"a.b.c".replaceAll(".", "-");   // "a-b-c"

// Regex form — requires g flag
"a.b.c".replaceAll(/\./g, "-"); // "a-b-c"
```

### `str.search(regex)` → `number`

Returns the index of the first match, or `-1`.

```ts
"hello world".search(/world/);   // 6
"hello world".search(/\d+/);     // -1
```

### `str.split(regex)` → `string[]`

```ts
// Split on any whitespace sequence
"one  two\tthree".split(/\s+/);
// ["one", "two", "three"]

// Split on comma with optional surrounding spaces
"a, b,c ,d".split(/\s*,\s*/);
// ["a", "b", "c", "d"]

// Split with a capturing group — includes delimiter in result
"one1two2three".split(/(\d)/);
// ["one", "1", "two", "2", "three"]
```

---

## 4. Named Capture Groups

Syntax: `(?<name>...)` — access via `match.groups`.

```ts
const re = /^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})$/;
const m = "2024-01-15".match(re);

m?.groups?.year;    // "2024"
m?.groups?.month;   // "01"
m?.groups?.day;     // "15"
```

### Named groups in `replace`

```ts
"2024-01-15".replace(
  /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/,
  "$<day>/$<month>/$<year>"
);
// "15/01/2024"
```

### Typed named groups

```ts
interface DateGroups {
  year:  string;
  month: string;
  day:   string;
}

function parseDate(str: string): DateGroups | null {
  const m = str.match(/^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})$/);
  return m ? (m.groups as DateGroups) : null;
}
```

---

## 5. Lookahead & Lookbehind

Match a position without consuming characters.

```ts
// Positive lookahead — match digits followed by "px"
"24px 10em".match(/\d+(?=px)/g);
// ["24"]

// Negative lookahead — match digits NOT followed by "px"
"24px 10em".match(/\d+(?!px)\b/g);
// ["10"]

// Positive lookbehind — match digits preceded by "$"
"$100 €200".match(/(?<=\$)\d+/g);
// ["100"]

// Negative lookbehind — match digits NOT preceded by "$"
"$100 200".match(/(?<!\$)\d+/g);
// ["200"]
```

---

## 6. Greedy vs Lazy

```ts
const html = "<b>bold</b> and <i>italic</i>";

// Greedy — matches as much as possible
html.match(/<.+>/)?.[0];
// "<b>bold</b> and <i>italic</i>"  (entire thing)

// Lazy — matches as little as possible
html.match(/<.+?>/)?.[0];
// "<b>"
```

---

## 7. Utility Functions

### Escape a string for use in a dynamic regex

```ts
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const userInput = "hello.world";
const re = new RegExp(escapeRegex(userInput));
re.test("hello.world"); // true  (dot is literal)
re.test("helloXworld"); // false
```

### Test and extract in one step

```ts
function extract(str: string, pattern: RegExp): string | null {
  const m = str.match(pattern);
  return m ? m[1] ?? m[0] : null;
}

extract("john@gmail.com", /^[\w.-]+@([\w.-]+)$/);
// "gmail.com"
```

### Validate a field

```ts
const validators = {
  email:  /^[\w.-]+@[\w.-]+\.\w{2,}$/,
  phone:  /^9[78]\d{8}$/,
  slug:   /^[a-z0-9]+(-[a-z0-9]+)*$/,
  date:   /^\d{4}-\d{2}-\d{2}$/,
  url:    /^https?:\/\/[\w.-]+(\/[\w./?=%&-]*)?$/,
} as const;

function validate(field: keyof typeof validators, value: string): boolean {
  return validators[field].test(value);
}

validate("email", "john@gmail.com"); // true
validate("phone", "9812345678");     // true
```

---

## 8. Common Patterns

```ts
// Email
/^[\w.-]+@[\w.-]+\.\w{2,}$/

// Nepali phone (98xxxxxxxx or 97xxxxxxxx)
/^9[78]\d{8}$/

// URL (http or https)
/^https?:\/\/[\w.-]+(\/[\w./?=%&-]*)?$/

// Slug (lowercase letters, digits, hyphens)
/^[a-z0-9]+(-[a-z0-9]+)*$/

// Date YYYY-MM-DD
/^\d{4}-\d{2}-\d{2}$/

// Time HH:MM or HH:MM:SS
/^\d{2}:\d{2}(:\d{2})?$/

// Only digits
/^\d+$/

// Only letters
/^[a-zA-Z]+$/

// Alphanumeric
/^[a-zA-Z0-9]+$/

// Strong password (min 8 chars, uppercase, lowercase, digit, special)
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/

// IPv4
/^\d{1,3}(\.\d{1,3}){3}$/

// Hex color
/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/

// JWT token
/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/

// File extension (image)
/\.(jpg|jpeg|png|gif|webp)$/i

// MongoDB ObjectId
/^[a-f\d]{24}$/i
```

---

## Quick Reference

| Method              | Returns                   | Use case                               |
|---------------------|---------------------------|----------------------------------------|
| `regex.test(str)`   | `boolean`                 | simple match check                     |
| `regex.exec(str)`   | match array or null       | single match with index, iterating `g` |
| `str.match(regex)`  | match array or null       | first match or all full matches (`g`)  |
| `str.matchAll(re)`  | iterator of match arrays  | all matches with captures              |
| `str.replace(re)`   | string                    | replace first or all (`g`)             |
| `str.replaceAll()`  | string                    | replace all (simpler than `g`)         |
| `str.search(re)`    | index or -1               | find position of first match           |
| `str.split(re)`     | string array              | split by pattern                       |