# HashMap in TypeScript

> A key-value data structure available as `Map` (built-in class) or `Record` (plain object).

---

## Two Approaches

| Approach | Key Types | Order | Best For |
|---|---|---|---|
| `Map<K, V>` | Any type | Insertion order | Dynamic keys, non-string keys |
| `Record<K, V>` | `string \| number \| symbol` | Not guaranteed | Config objects, static shapes |

---

## Map — Declaration

```ts
// Empty map
const scores: Map<string, number> = new Map();

// With initial entries
const colors = new Map<string, string>([
  ["red",   "#ff0000"],
  ["green", "#00ff00"],
  ["blue",  "#0000ff"],
]);
```

---

## CRUD Operations

```ts
const map = new Map<string, number>();

// Create / Update
map.set("alice", 42);
map.set("bob", 17);

// Read
map.get("alice");      // 42 (or undefined if missing)
map.has("bob");        // true

// Delete
map.delete("bob");     // true if key existed
map.clear();           // removes all entries

// Size
map.size;              // number of entries
```

---

## Iteration

```ts
const m = new Map([["a", 1], ["b", 2], ["c", 3]]);

// for...of (preferred)
for (const [key, val] of m) {
  console.log(key, val);
}

// Keys, values, entries
m.keys();     // MapIterator ["a", "b", "c"]
m.values();   // MapIterator [1, 2, 3]
m.entries();  // MapIterator [["a",1], ["b",2], ["c",3]]

// forEach
m.forEach((val, key) => console.log(key, val));
```

---

## Safe Access & Default Values

```ts
// Nullish coalescing for defaults
const val = map.get("missing") ?? 0;

// Frequency counter pattern
const freq = new Map<string, number>();
for (const ch of "hello") {
  freq.set(ch, (freq.get(ch) ?? 0) + 1);
}
// Map { 'h'=>1, 'e'=>1, 'l'=>2, 'o'=>1 }
```

---

## Non-String Keys (Map only)

```ts
const cache = new Map<object, string>();
const key = { id: 1 };

cache.set(key, "user data");
cache.get(key);         // "user data"  (same reference)
cache.get({ id: 1 });   // undefined    (different reference!)
```

> Object keys use **reference equality**, not deep equality.

---

## Record / Plain Object

```ts
// Record<KeyType, ValueType>
const config: Record<string, boolean> = {
  darkMode:   true,
  animations: false,
};

config["darkMode"];          // true
config["newKey"] = true;     // add key
delete config["animations"]; // remove key

// Iterate
Object.entries(config).forEach(([k, v]) => console.log(k, v));
Object.keys(config);         // string[]
Object.values(config);       // boolean[]
```

---

## Map ↔ Object Conversion

```ts
// Map → Object
const obj = Object.fromEntries(map);

// Object → Map
const m2 = new Map(Object.entries(obj));
```

---

## Map vs Record — When to Use Which

| Feature | `Map` | `Record`                  |
|---|---|---------------------------|
| Key type | Any | `string \| number \| symbol` |
| Key order |  Insertion order | Not guaranteed            |
| Size | `map.size` | `Object.keys(o).length`   |
| Iteration | `for...of` | `Object.entries()`        |
| JSON serializable |  (needs conversion) | x                         |
| Performance (large data) |  Better | Slower                    |
| Prototype pollution risk |  None | Possible                  |

---

## Common Patterns

### Grouping (Map of arrays)

```ts
const grouped = new Map<string, string[]>();

function addToGroup(key: string, val: string) {
  if (!grouped.has(key)) grouped.set(key, []);
  grouped.get(key)!.push(val);
}

addToGroup("fruit", "apple");
addToGroup("fruit", "banana");
addToGroup("veg",   "carrot");
// Map { 'fruit' => ['apple','banana'], 'veg' => ['carrot'] }
```

### Memoization / Cache

```ts
const memo = new Map<number, number>();

function fib(n: number): number {
  if (n <= 1) return n;
  if (memo.has(n)) return memo.get(n)!;
  const result = fib(n - 1) + fib(n - 2);
  memo.set(n, result);
  return result;
}
```

### Typed enum-like map

```ts
type Role = "admin" | "editor" | "viewer";

const permissions: Record<Role, string[]> = {
  admin:  ["read", "write", "delete"],
  editor: ["read", "write"],
  viewer: ["read"],
};
```

---

## Time Complexity

| Operation | `Map` | Plain Object |
|---|---|---|
| `set` / assign | O(1) avg | O(1) |
| `get` / access | O(1) avg | O(1) |
| `has` / `in` | O(1) avg | O(1) |
| `delete` | O(1) avg | O(1) |
| Iterate all | O(n) | O(n) |

---

> **Rule of thumb:** Use `Map` when keys are dynamic, non-string, or order matters. Use `Record` for fixed-shape config objects or when you need JSON serialization.
