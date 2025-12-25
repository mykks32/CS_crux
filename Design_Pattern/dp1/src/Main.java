void main() {
    // FACTORY
    IO.println("------- FACTORY PATTERN -------");
    Car car = CarFactory.getCar("suv");
    car.specs();

    // BUILDER
    IO.println("\n------- BUILDER PATTERN -------");
    RentalCarBuilder rental = new RentalCarBuilder.Builder()
            .setCar(car)
            .setGps(true)
            .setChildSeat(true)
            .build();
    rental.showDetails();

    // DECORATOR
    IO.println("\n------- DECORATOR PATTERN -------");
    Feature feature = new GPS(new Insurance(new BasicRental()));
    IO.println(feature.description() + " & " + "Cost: " + feature.cost());

    // SINGLETON
    IO.println("\n------- SINGLETON PATTERN -------");
    PaymentServiceSingleton.getInstance().processPayment(feature.cost());

    // OBSERVER
    IO.println("\n------- OBSERVER PATTERN -------");
    RentalOrderObserver order = new RentalOrderObserver();
    order.addObserver(new Customer("Alice"));
    order.addObserver(new Customer("Bob"));
    order.setStatus("Car Reserved");
    order.setStatus("Car Picked Up");

    // STRATEGY
    IO.println("\n------- STRATEGY PATTERN -------");
    PaymentContext payment = new PaymentContext(new CardPayment());
    payment.pay(feature.cost());

    IO.println("\n------- STRATEGY PATTERN -------");
}