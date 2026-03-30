// Insert in queue collection
    db.queue.insertMany([
        { person_id: 5, person_name: "Alice", weight: 250, turn: 1 },
        { person_id: 4, person_name: "Bob", weight: 175, turn: 5 },
        { person_id: 3, person_name: "Alex", weight: 350, turn: 2 },
        { person_id: 6, person_name: "John Cena", weight: 400, turn: 3 },
        { person_id: 1, person_name: "Winston", weight: 500, turn: 6 },
        { person_id: 2, person_name: "Marie", weight: 200, turn: 4 }
        ])