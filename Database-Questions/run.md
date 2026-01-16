# Run Guide: Average Time of Process per Machine

## 📁 Your File Structure
```
Question Folder
    ├── Question.md
    ├── nosql
    │   ├── insert.json
    │   └── solution.json
    └── sql
    ├── create.sql
    ├── insert.sql
    └── solution.sql
```

---

## 🐘 PostgreSQL Solution

### ▶️ Run PostgreSQL from Your Directory
```bash
# From your project root directory
psql -f sql/create.sql && \
psql -d factory -f sql/insert.sql && \
psql -d factory -f sql/solution.sql
```

**Alternative - Run from psql shell:**
```sql
\i sql/create.sql
\c factory
\i sql/insert.sql
\i sql/solution.sql
```

---

## 🍃 MongoDB Solution

### ▶️ Run MongoDB from Your Directory
```bash
# From your project root directory
mongoimport --db factory --collection activity --file nosql/insert.json --jsonArray && \
mongosh factory --eval "db.activity.aggregate($(cat nosql/solution.json))"
```

**Alternative - Step by Step:**
```bash
# 1. Import data
mongoimport \
  --db factory \
  --collection activity \
  --file nosql/insert.json \
  --jsonArray

# 2. Run aggregation in mongosh
mongosh

# Inside mongosh:
use factory
db.activity.aggregate(require("./nosql/solution.json"))
```

---

## 🚀 One-Liner Commands for Quick Testing

### PostgreSQL Quick Test
```bash
# Drop existing database and run complete solution
psql -c "DROP DATABASE IF EXISTS factory" postgres && \
psql -f sql/create.sql && \
psql -d factory -f sql/insert.sql && \
psql -d factory -f sql/solution.sql
```

### MongoDB Quick Test
```bash
# Clear existing data and run complete solution
mongosh factory --eval "db.activity.drop()" && \
mongoimport --db factory --collection activity --file nosql/insert.json --jsonArray && \
mongosh factory --eval "db.activity.aggregate($(cat nosql/solution.json))"
```

---