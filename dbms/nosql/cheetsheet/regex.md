# Regex in MongoDB

MongoDB supports regex in two contexts: **query operators** (`find`, `$match`) and **aggregation pipeline operators** (`$regexMatch`, `$regexFind`, `$regexFindAll`).

---

## Core Syntax

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
(?:abc)     non-capturing group
```

---

## 1. Regex in Queries (`find` / `$match`)

### Literal regex syntax (preferred)

```js
db.users.find({ email: /^admin/i })
db.users.find({ name: /john/i })
db.users.find({ phone: /^9[78]\d{8}$/ })
```

### `$regex` operator syntax

```js
// With a regex literal
db.users.find({ email: { $regex: /^admin/i } })

// String form — useful for dynamic patterns
db.users.find({ email: { $regex: "^admin", $options: "i" } })
```

### `$options` flags

```
i    case-insensitive
m    multiline (^ and $ match line boundaries)
x    extended (ignore whitespace in pattern)
s    dotAll (. matches \n)
```

### NOT matching

```js
// Does not match pattern
db.users.find({ email: { $not: /^admin/ } })
db.users.find({ email: { $not: { $regex: "^admin" } } })
```

### In `$match` aggregation stage

```js
db.users.aggregate([
  { $match: { email: { $regex: /@gmail\.com$/i } } }
])

// Dynamic pattern from a variable
const domain = "gmail.com";
db.users.aggregate([
  { $match: { email: { $regex: domain.replace(".", "\\.") + "$", $options: "i" } } }
])
```

---

## 2. Aggregation Operators

### `$regexMatch` → boolean

Returns `true` or `false`. Use in `$project`, `$addFields`, `$filter`, `$cond`.

```js
db.collection.aggregate([
  {
    $project: {
      isGmail: {
        $regexMatch: {
          input:   "$email",
          regex:   /@gmail\.com$/,
          options: "i"          // optional
        }
      }
    }
  }
])
// { isGmail: true }
```

### `$regexFind` → first match object

Returns `{ match, idx, captures }` for the first match, or `null` if no match.

```js
db.collection.aggregate([
  {
    $project: {
      found: {
        $regexFind: {
          input: "$text",
          regex: /\d+/
        }
      }
    }
  }
])
// { found: { match: "123", idx: 5, captures: [] } }
```

### `$regexFindAll` → array of match objects

Returns an array of `{ match, idx, captures }` for every match.

```js
db.collection.aggregate([
  {
    $project: {
      allMatches: {
        $regexFindAll: {
          input: "$body",
          regex: /#\w+/
        }
      }
    }
  }
])
// [{ match: "#mongodb", idx: 0 }, { match: "#nosql", idx: 9 }]
```

### Extract just the matched strings (flatten with `$map`)

```js
db.posts.aggregate([
  {
    $project: {
      hashtags: {
        $map: {
          input: { $regexFindAll: { input: "$body", regex: /#\w+/ } },
          as:   "m",
          in:   "$$m.match"
        }
      }
    }
  }
])
// { hashtags: ["#mongodb", "#nosql", "#database"] }
```

---

## 3. Capture Groups

Capture groups are accessed via the `captures` array in order of `(` appearance.

### Basic capture groups

```js
db.users.aggregate([
  {
    $project: {
      parsed: {
        $regexFind: {
          input: "$phone",
          regex: /^(\d{3})-(\d+)$/
        }
      }
      // { match: "977-9812345678", idx: 0, captures: ["977", "9812345678"] }
    }
  }
])
```

### Access a specific capture group

```js
db.users.aggregate([
  {
    $project: {
      countryCode: {
        $arrayElemAt: [
          {
            $getField: {
              field: "captures",
              input: {
                $regexFind: { input: "$phone", regex: /^(\d{3})-(\d+)$/ }
              }
            }
          },
          0   // index 0 = first capture group
        ]
      },
      localNumber: {
        $arrayElemAt: [
          {
            $getField: {
              field: "captures",
              input: {
                $regexFind: { input: "$phone", regex: /^(\d{3})-(\d+)$/ }
              }
            }
          },
          1   // index 1 = second capture group
        ]
      }
    }
  }
])
```

### Capture groups with `$regexFindAll`

```js
// Extract all key=value pairs from a config string
// "host=localhost port=5432 db=myapp"
db.configs.aggregate([
  {
    $project: {
      pairs: {
        $regexFindAll: {
          input: "$configStr",
          regex: /(\w+)=(\w+)/
        }
        // [
        //   { match: "host=localhost", captures: ["host", "localhost"] },
        //   { match: "port=5432",      captures: ["port", "5432"] }
        // ]
      }
    }
  }
])
```

---

## 4. Practical Patterns

### Filter array elements by regex

```js
db.users.aggregate([
  {
    $project: {
      gmailAddresses: {
        $filter: {
          input: "$emails",
          as:   "e",
          cond: { $regexMatch: { input: "$$e", regex: /@gmail\.com$/i } }
        }
      }
    }
  }
])
```

### Conditional output based on match

```js
db.users.aggregate([
  {
    $project: {
      accountType: {
        $cond: {
          if:   { $regexMatch: { input: "$email", regex: /@company\.com$/i } },
          then: "internal",
          else: "external"
        }
      }
    }
  }
])
```

### Count regex matches

```js
db.posts.aggregate([
  {
    $project: {
      hashtagCount: {
        $size: { $regexFindAll: { input: "$body", regex: /#\w+/ } }
      }
    }
  }
])
```

### Validate and label in one stage

```js
db.users.aggregate([
  {
    $addFields: {
      phoneValid:  { $regexMatch: { input: "$phone", regex: /^9[78]\d{8}$/ } },
      emailValid:  { $regexMatch: { input: "$email", regex: /^[\w.-]+@[\w.-]+\.\w{2,}$/ } }
    }
  },
  {
    $match: { phoneValid: true, emailValid: true }
  }
])
```

### Extract domain from email

```js
db.users.aggregate([
  {
    $project: {
      domain: {
        $arrayElemAt: [{ $split: ["$email", "@"] }, 1]
        // or with regex:
        // $getField: { field: "match", input: { $regexFind: { input: "$email", regex: /@(.+)$/ } } }
      }
    }
  }
])
```

---

## 5. Performance Notes

- Regex queries on unindexed fields do a **full collection scan** — always index fields you query with regex.
- Anchored patterns (`^abc`) can use an index range scan — much faster than unanchored (`/abc/`).
- Case-insensitive queries (`i` flag) **cannot use a standard index** — use a case-insensitive collation index instead:

```js
db.users.createIndex(
  { name: 1 },
  { collation: { locale: "en", strength: 2 } }  // strength 2 = case-insensitive
)

db.users.find({ name: "john" }).collation({ locale: "en", strength: 2 })
```

---

## 6. Common Patterns

```js
// Email
{ $regexMatch: { input: "$email", regex: /^[\w.-]+@[\w.-]+\.\w{2,}$/ } }

// Nepali phone
{ $regexMatch: { input: "$phone", regex: /^9[78]\d{8}$/ } }

// URL
{ $regexMatch: { input: "$url", regex: /^https?:\/\/[\w.-]+(\/[\w./?=%&-]*)?$/ } }

// Slug
{ $regexMatch: { input: "$slug", regex: /^[a-z0-9]+(-[a-z0-9]+)*$/ } }

// Date YYYY-MM-DD
{ $regexMatch: { input: "$date", regex: /^\d{4}-\d{2}-\d{2}$/ } }

// Only digits
{ $regexMatch: { input: "$value", regex: /^\d+$/ } }

// Starts with https
{ $regexMatch: { input: "$url", regex: /^https:\/\// } }

// File extension (image)
{ $regexMatch: { input: "$filename", regex: /\.(jpg|jpeg|png|gif|webp)$/i } }

// IPv4
{ $regexMatch: { input: "$ip", regex: /^\d{1,3}(\.\d{1,3}){3}$/ } }
```

---

## Quick Reference

| Operator         | Context     | Returns              | Use case                        |
|------------------|-------------|----------------------|---------------------------------|
| `/pattern/`      | Query       | filtered documents   | simple match in find / $match   |
| `$regex`         | Query       | filtered documents   | dynamic pattern, string form    |
| `$regexMatch`    | Aggregation | boolean              | validate, filter, conditionals  |
| `$regexFind`     | Aggregation | first match object   | extract first match + captures  |
| `$regexFindAll`  | Aggregation | array of match objs  | extract all matches             |