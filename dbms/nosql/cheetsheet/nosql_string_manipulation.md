# String Manipulation in MongoDB

MongoDB provides string operators in two main contexts:
- **Aggregation Pipeline** — `$project`, `$addFields`, `$group`, etc.
- **Query operators** — `$regex`, `$where`, etc.

---

## 1. Case Conversion

### `$toLower` / `$toUpper`
```js
db.users.aggregate([
  { $project: { name: { $toLower: "$name" } } }
])

db.users.aggregate([
  { $project: { name: { $toUpper: "$name" } } }
])
```

---

## 2. String Length

### `$strLenCP` — character length (Unicode code points)
### `$strLenBytes` — byte length (UTF-8)
```js
db.collection.aggregate([
  {
    $project: {
      charLen:  { $strLenCP: "$title" },
      byteLen:  { $strLenBytes: "$title" }
    }
  }
])
// "नमस्ते" → charLen: 6, byteLen: 18
```

---

## 3. Concatenation

### `$concat`
Concatenates an array of strings. Returns `null` if any argument is `null`.
```js
db.users.aggregate([
  {
    $project: {
      fullName: { $concat: ["$firstName", " ", "$lastName"] }
    }
  }
])

// With a literal + field
db.products.aggregate([
  {
    $project: {
      slug: { $concat: ["/products/", { $toLower: "$name" }] }
    }
  }
])
```

---

## 4. Substring Extraction

### `$substr` (deprecated alias) / `$substrCP` / `$substrBytes`
- `$substrCP` — works on Unicode code points (recommended)
- `$substrBytes` — works on raw bytes

Syntax: `{ $substrCP: [ <string>, <start>, <length> ] }` (0-indexed)
```js
db.collection.aggregate([
  {
    $project: {
      first3: { $substrCP: ["$name", 0, 3] },
      // Extract year from a date string "2024-01-15"
      year:   { $substrCP: ["$dateStr", 0, 4] }
    }
  }
])
```

---

## 5. Search & Index

### `$indexOfCP` / `$indexOfBytes`
Returns the index of the first occurrence of a substring (-1 if not found). 0-indexed.

Syntax: `{ $indexOfCP: [ <string>, <substring>, <start>, <end> ] }`
```js
db.collection.aggregate([
  {
    $project: {
      pos: { $indexOfCP: ["$email", "@"] },
      // Search within a range
      pos2: { $indexOfCP: ["$text", "world", 5, 20] }
    }
  }
])

// Check if string contains a substring
db.collection.aggregate([
  {
    $project: {
      hasAt: { $gte: [{ $indexOfCP: ["$email", "@"] }, 0] }
    }
  }
])
```

---

## 6. String Split & Join

### `$split`
Splits a string into an array by a delimiter.
```js
db.collection.aggregate([
  {
    $project: {
      parts: { $split: ["$fullName", " "] }
      // "John Doe Smith" → ["John", "Doe", "Smith"]
    }
  }
])

// Get first part after split
db.collection.aggregate([
  {
    $project: {
      firstName: { $arrayElemAt: [{ $split: ["$fullName", " "] }, 0] },
      lastName:  { $arrayElemAt: [{ $split: ["$fullName", " "] }, -1] }
    }
  }
])
```

### `$concat` with `$reduce` — Join array into string
MongoDB has no direct `$join` for arrays of strings, so use `$reduce`:
```js
db.collection.aggregate([
  {
    $project: {
      joined: {
        $reduce: {
          input: "$tags",
          initialValue: "",
          in: {
            $concat: [
              "$$value",
              { $cond: [{ $eq: ["$$value", ""] }, "", ", "] },
              "$$this"
            ]
          }
        }
      }
      // ["a", "b", "c"] → "a, b, c"
    }
  }
])
```

---

## 7. Trim

### `$trim` / `$ltrim` / `$rtrim`
Removes whitespace or specified characters from both/left/right sides.

```js
db.collection.aggregate([
  {
    $project: {
      cleaned:      { $trim:  { input: "$name" } },
      leftCleaned:  { $ltrim: { input: "$name" } },
      rightCleaned: { $rtrim: { input: "$name" } },

      // Remove specific characters
      noX: { $trim: { input: "$code", chars: "x" } }
    }
  }
])
```

---

## 8. String Replace

### `$replaceOne`
Replaces the first occurrence of a substring.
```js
db.collection.aggregate([
  {
    $project: {
      updated: {
        $replaceOne: {
          input:       "$description",
          find:        "foo",
          replacement: "bar"
        }
      }
    }
  }
])
```

### `$replaceAll`
Replaces all occurrences.
```js
db.collection.aggregate([
  {
    $project: {
      updated: {
        $replaceAll: {
          input:       "$text",
          find:        " ",
          replacement: "_"
        }
      }
    }
  }
])
```

---

## 9. Regex in Queries

### `$regex` operator
Used in `find()` and `$match` stage to filter documents.
```js
// Basic regex
db.users.find({ name: { $regex: /^John/ } })

// Case-insensitive
db.users.find({ name: { $regex: /john/i } })

// String form with options
db.users.find({ email: { $regex: "^admin", $options: "i" } })

// Contains substring
db.products.find({ description: { $regex: "wireless" } })

// In aggregation $match
db.users.aggregate([
  { $match: { email: { $regex: /@gmail\.com$/ } } }
])
```

Regex options:
```
| Option | Meaning          |
|--------|------------------|
| i  | Case-insensitive |
| m  | Multiline (`^`/`$` match line boundaries) |
| x  | Extended (ignore whitespace) |
| s  | Dot matches newline |
```

---

## 10. Regex in Aggregation

### `$regexMatch`
Returns `true` or `false` if the string matches a pattern.
```js
db.collection.aggregate([
  {
    $project: {
      isGmail: {
        $regexMatch: {
          input:   "$email",
          regex:   /@gmail\.com$/,
          options: "i"
        }
      }
    }
  }
])
```

### `$regexFind`
Returns the first match details (match string, index, captures).
```js
db.collection.aggregate([
  {
    $project: {
      match: {
        $regexFind: {
          input: "$text",
          regex: /\d+/
        }
      }
      // { match: "123", idx: 5, captures: [] }
    }
  }
])
```

### `$regexFindAll`
Returns all matches as an array.
```js
db.collection.aggregate([
  {
    $project: {
      allNumbers: {
        $regexFindAll: {
          input: "$text",
          regex: /\d+/
        }
      }
      // [{ match: "12", idx: 3 }, { match: "45", idx: 9 }]
    }
  }
])

// Extract all matches as a plain array of strings
db.collection.aggregate([
  {
    $project: {
      numbers: {
        $map: {
          input: { $regexFindAll: { input: "$text", regex: /\d+/ } },
          as:    "m",
          in:    "$$m.match"
        }
      }
    }
  }
])
```

---

## 11. Type Conversion

### `$toString`
Converts any value to a string.
```js
db.collection.aggregate([
  {
    $project: {
      idStr:    { $toString: "$_id" },
      priceStr: { $toString: "$price" },
      dateStr:  { $toString: "$createdAt" }
    }
  }
])
```

### `$toInt`, `$toLong`, `$toDouble`, `$toDecimal`
Converts string to number.
```js
db.collection.aggregate([
  {
    $project: {
      price: { $toDouble: "$priceStr" },
      count: { $toInt: "$countStr" }
    }
  }
])
```

### `$convert`
General-purpose type conversion with `onError` and `onNull` fallbacks.
```js
db.collection.aggregate([
  {
    $project: {
      num: {
        $convert: {
          input:   "$valueStr",
          to:      "int",
          onError: 0,
          onNull:  -1
        }
      }
    }
  }
])
```

---

## 12. Date ↔ String

### `$dateToString`
Formats a date as a string.
```js
db.orders.aggregate([
  {
    $project: {
      date: {
        $dateToString: {
          format:   "%Y-%m-%d",
          date:     "$createdAt",
          timezone: "Asia/Kathmandu"  // optional
        }
      }
    }
  }
])
// Common format tokens:
// %Y = year, %m = month, %d = day
// %H = hour, %M = minute, %S = second
// %L = milliseconds
```

### `$dateFromString`
Parses a string into a date.
```js
db.collection.aggregate([
  {
    $project: {
      date: {
        $dateFromString: {
          dateString: "$dateStr",
          format:     "%Y-%m-%d",
          onError:    null,
          onNull:     null
        }
      }
    }
  }
])
```

---

## 13. String Comparison

### `$strcasecmp`
Case-insensitive string comparison. Returns `0` if equal, `1` if first > second, `-1` if first < second.
```js
db.collection.aggregate([
  {
    $project: {
      cmp: { $strcasecmp: ["$name", "alice"] }
      // 0 = equal, 1 = greater, -1 = less
    }
  }
])

// Filter where strings match case-insensitively
db.collection.aggregate([
  {
    $match: {
      $expr: { $eq: [{ $strcasecmp: ["$role", "admin"] }, 0] }
    }
  }
])
```

---

## 14. Conditional String Logic

### `$cond` with string operators
```js
db.collection.aggregate([
  {
    $project: {
      label: {
        $cond: {
          if:   { $gte: [{ $strLenCP: "$name" }, 10] },
          then: { $substrCP: ["$name", 0, 10] },
          else: "$name"
        }
      }
    }
  }
])
```

### `$switch` for multi-branch string output
```js
db.orders.aggregate([
  {
    $project: {
      statusLabel: {
        $switch: {
          branches: [
            { case: { $eq: ["$status", 1] }, then: "Pending" },
            { case: { $eq: ["$status", 2] }, then: "Shipped" },
            { case: { $eq: ["$status", 3] }, then: "Delivered" }
          ],
          default: "Unknown"
        }
      }
    }
  }
])
```

---

## 15. Full Text Search

### Create a text index
```js
db.articles.createIndex({ title: "text", body: "text" })
```

### `$text` query operator
```js
// Basic search
db.articles.find({ $text: { $search: "mongodb aggregation" } })

// Exact phrase
db.articles.find({ $text: { $search: "\"full text\"" } })

// Exclude term
db.articles.find({ $text: { $search: "mongodb -aggregation" } })

// With relevance score
db.articles.find(
  { $text: { $search: "mongodb" } },
  { score: { $meta: "textScore" } }
).sort({ score: { $meta: "textScore" } })
```

---

## 16. Practical Patterns

### Extract domain from email
```js
db.users.aggregate([
  {
    $project: {
      domain: {
        $arrayElemAt: [{ $split: ["$email", "@"] }, 1]
      }
    }
  }
])
```

### Slugify a title (lowercase + replace spaces)
```js
db.posts.aggregate([
  {
    $project: {
      slug: {
        $replaceAll: {
          input:       { $toLower: "$title" },
          find:        " ",
          replacement: "-"
        }
      }
    }
  }
])
```

### Truncate long strings with ellipsis
```js
db.posts.aggregate([
  {
    $project: {
      preview: {
        $cond: {
          if:   { $gt: [{ $strLenCP: "$body" }, 100] },
          then: { $concat: [{ $substrCP: ["$body", 0, 100] }, "..."] },
          else: "$body"
        }
      }
    }
  }
])
```

### Mask sensitive data (show last 4 digits)
```js
db.cards.aggregate([
  {
    $project: {
      masked: {
        $concat: [
          "****-****-****-",
          { $substrCP: ["$cardNumber", 12, 4] }
        ]
      }
    }
  }
])
```

### Check if field starts with a prefix
```js
db.collection.aggregate([
  {
    $project: {
      startsWithHTTPS: {
        $eq: [{ $substrCP: ["$url", 0, 8] }, "https://"]
      }
    }
  }
])
```

---

## Quick Reference Table

| Operator | Purpose | Stage |
|---|---|---|
| `$toLower` / `$toUpper` | Case conversion | Aggregation |
| `$strLenCP` / `$strLenBytes` | String length | Aggregation |
| `$concat` | Concatenate strings | Aggregation |
| `$substrCP` / `$substrBytes` | Extract substring | Aggregation |
| `$indexOfCP` / `$indexOfBytes` | Find substring index | Aggregation |
| `$split` | Split into array | Aggregation |
| `$trim` / `$ltrim` / `$rtrim` | Trim whitespace/chars | Aggregation |
| `$replaceOne` / `$replaceAll` | Replace substring | Aggregation |
| `$regexMatch` | Test regex match → bool | Aggregation |
| `$regexFind` | First regex match details | Aggregation |
| `$regexFindAll` | All regex matches | Aggregation |
| `$strcasecmp` | Case-insensitive compare | Aggregation |
| `$toString` | Convert to string | Aggregation |
| `$dateToString` | Format date as string | Aggregation |
| `$dateFromString` | Parse string to date | Aggregation |
| `$regex` | Pattern match in query | Query / `$match` |
| `$text` | Full text search | Query |