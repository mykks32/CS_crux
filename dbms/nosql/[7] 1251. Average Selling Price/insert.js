// Insert into Prices collection
db.prices.insertMany([
  { product_id: 1, start_date: ISODate("2019-02-17"), end_date: ISODate("2019-02-28"), price: 5 },
  { product_id: 1, start_date: ISODate("2019-03-01"), end_date: ISODate("2019-03-22"), price: 20 },
  { product_id: 2, start_date: ISODate("2019-02-01"), end_date: ISODate("2019-02-20"), price: 15 },
  { product_id: 2, start_date: ISODate("2019-02-21"), end_date: ISODate("2019-03-31"), price: 30 }
]);

// Insert into UnitsSold collection
db.unitssold.insertMany([
  { product_id: 1, purchase_date: ISODate("2019-02-25"), units: 100 },
  { product_id: 1, purchase_date: ISODate("2019-03-01"), units: 15 },
  { product_id: 2, purchase_date: ISODate("2019-02-10"), units: 200 },
  { product_id: 2, purchase_date: ISODate("2019-03-22"), units: 30 }
]);