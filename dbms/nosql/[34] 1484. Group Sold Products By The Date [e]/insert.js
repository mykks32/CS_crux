// Insert into Activities
    db.Activities.insertMany([
        { sell_date: new Date("2020-05-30"), product: "Headphone" },
        { sell_date: new Date("2020-06-01"), product: "Pencil" },
        { sell_date: new Date("2020-06-02"), product: "Mask" },
        { sell_date: new Date("2020-05-30"), product: "Basketball" },
        { sell_date: new Date("2020-06-01"), product: "Bible" },
        { sell_date: new Date("2020-06-02"), product: "Mask" },
        { sell_date: new Date("2020-05-30"), product: "T-Shirt" }
        ]);