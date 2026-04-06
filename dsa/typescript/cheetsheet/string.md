# TypeScript String Cheatsheet

---

## 1. Declaration & Types

```ts
let a: string = "hello";
let b: string = 'world';
let c: string = `template`;

const literal: "admin" | "user" = "admin";  // string literal type
```

---

## 2. Template Literals

```ts
const name = "Shree";
const age = 25;

const msg = `Hello, ${name}! You are ${age} years old.`;
const expr = `Result: ${2 + 3}`;
const nested = `${name.toUpperCase()} says hi`;
```

### Tagged Templates
```ts
function tag(strings: TemplateStringsArray, ...values: any[]): string {
  return strings.raw.join("") + values.join(",");
}
const result = tag`Hello ${name} you are ${age}`;
```

---

## 3. Common String Methods

### Case
```ts
"hello".toUpperCase()       // "HELLO"
"HELLO".toLowerCase()       // "hello"
```

### Search & Check
```ts
"hello world".includes("world")       // true
"hello".startsWith("hel")            // true
"hello".endsWith("lo")               // true
"hello world".indexOf("world")       // 6
"hello world".lastIndexOf("o")       // 7
"hello".search(/ell/)                // 1
```

### Slice & Substring
```ts
"hello world".slice(0, 5)            // "hello"
"hello world".slice(-5)              // "world"
"hello world".substring(6, 11)       // "world"
```

### Replace
```ts
"foo bar foo".replace("foo", "baz")          // "baz bar foo"
"foo bar foo".replaceAll("foo", "baz")       // "baz bar baz"
"hello".replace(/[aeiou]/g, "*")             // "h*ll*"
```

### Split & Join
```ts
"a,b,c".split(",")                   // ["a", "b", "c"]
"hello".split("")                    // ["h","e","l","l","o"]
["a", "b", "c"].join("-")            // "a-b-c"
```

### Trim
```ts
"  hello  ".trim()                   // "hello"
"  hello  ".trimStart()              // "hello  "
"  hello  ".trimEnd()                // "  hello"
```

### Pad
```ts
"5".padStart(3, "0")                 // "005"
"5".padEnd(3, "0")                   // "500"
```

### Repeat & At
```ts
"ab".repeat(3)                       // "ababab"
"hello".at(0)                        // "h"
"hello".at(-1)                       // "o"
```

### Char Access
```ts
"hello"[0]                           // "h"
"hello".charAt(1)                    // "e"
"hello".charCodeAt(0)                // 104
String.fromCharCode(104)             // "h"
```

### Length
```ts
"hello".length                       // 5
```

---

## 4. String Concatenation

```ts
const s1 = "Hello" + " " + "World";
const s2 = "Hello".concat(" ", "World");
const s3 = `${"Hello"} World`;
```

---

## 5. Type Conversions

```ts
// to string
String(42)                           // "42"
(42).toString()                      // "42"
(255).toString(16)                   // "ff"  (hex)
(8).toString(2)                      // "1000" (binary)
`${42}`                              // "42"

// from string
parseInt("42px")                     // 42
parseFloat("3.14abc")                // 3.14
Number("42")                         // 42
Number("abc")                        // NaN
+"42"                                // 42
```

---

## 6. Regex with Strings

```ts
const str = "foo123bar";

str.match(/\d+/)                     // ["123"]
str.match(/\d+/g)                    // ["123"]   (global)
str.matchAll(/\d+/g)                 // iterator of matches
/\d+/.test(str)                      // true
str.replace(/\d+/, "NUM")            // "fooNUMbar"
str.split(/\d+/)                     // ["foo", "bar"]
```

---

## 7. Template Literal Types (TypeScript-specific)

```ts
type Greeting = `Hello, ${string}`;
type EventName = "click" | "focus";
type Handler = `on${Capitalize<EventName>}`;   // "onClick" | "onFocus"

// Utility types for strings
Uppercase<"hello">                   // "HELLO"
Lowercase<"HELLO">                   // "hello"
Capitalize<"hello">                  // "Hello"
Uncapitalize<"Hello">                // "hello"
```

---

## 8. Useful Patterns

### Null-safe access
```ts
const val: string | null = getValue();
const upper = val?.toUpperCase() ?? "default";
```

### Check empty
```ts
const isEmpty = (s: string) => s.trim().length === 0;
```

### Truncate
```ts
const truncate = (s: string, n: number) =>
  s.length > n ? s.slice(0, n) + "..." : s;
```

### Interpolate object values
```ts
const template = (tpl: string, data: Record<string, string>) =>
  tpl.replace(/\{\{(\w+)\}\}/g, (_, key) => data[key] ?? "");

template("Hello {{name}}!", { name: "Shree" });  // "Hello Shree!"
```

### Count occurrences
```ts
const count = (str: string, sub: string) =>
  str.split(sub).length - 1;
```

### Reverse a string
```ts
const reverse = (s: string) => s.split("").reverse().join("");
```

---

## 9. Quick Reference Table

| Method | Returns | Description |
|---|---|---|
| `includes(s)` | `boolean` | checks if substring exists |
| `startsWith(s)` | `boolean` | checks prefix |
| `endsWith(s)` | `boolean` | checks suffix |
| `indexOf(s)` | `number` | first index or -1 |
| `slice(s, e)` | `string` | extract portion |
| `replace(x, y)` | `string` | replace first match |
| `replaceAll(x, y)` | `string` | replace all matches |
| `split(s)` | `string[]` | split into array |
| `trim()` | `string` | remove whitespace |
| `padStart(n, s)` | `string` | pad left |
| `padEnd(n, s)` | `string` | pad right |
| `repeat(n)` | `string` | repeat string |
| `toUpperCase()` | `string` | uppercase |
| `toLowerCase()` | `string` | lowercase |
| `at(i)` | `string \| undefined` | char at index (supports negative) |
| `match(rx)` | `RegExpMatchArray \| null` | regex match |
| `matchAll(rx)` | `IterableIterator` | all regex matches |
| `search(rx)` | `number` | index of regex match |
| `charCodeAt(i)` | `number` | UTF-16 code |
| `String.fromCharCode(n)` | `string` | char from code |