import Interfaces.Car;
import Interfaces.CarFeature;
import enums.Engine;
import enums.Suspension;
import enums.Transmission;
import enums.Type;

void main() {
    // BUILDER
    IO.println("\n------- BUILDER PATTERN -------");
    CarBuilder carBuilder = new CarBuilder
            .Builder()
            .setCarType(Type.SEDAN)
            .setEngine(Engine.DIESEL)
            .setSuspension(Suspension.HIGH)
            .setTransmission(Transmission.MANUAL)
            .build();
    IO.println(carBuilder.showDetails());

    // FACTORY
    IO.println("\n------- FACTORY PATTERN -------");
    Car car = CarFactory.getCar(Type.SUV);
    IO.println(car.drive());

    // DECORATOR
    IO.println("\n------- DECORATOR PATTERN -------");
    CarFeature carFeature = new GPS(new Insurance(new BasicCarFeatureDecorator()));
    IO.println(carFeature.getDescription() + " & " + "Cost: " + carFeature.Cost());
//
//     SINGLETON
    IO.println("\n------- SINGLETON PATTERN -------");
    PaymentSingleton.getInstance().ProcessPayment(carFeature.Cost());

//     OBSERVER
//    IO.println("\n------- OBSERVER PATTERN -------");
//    RentalOrderObserver order = new RentalOrderObserver();
//    order.addObserver(new Customer("Alice"));
//    order.addObserver(new Customer("Bob"));
//    order.setStatus("Car Reserved");
//    order.setStatus("Car Picked Up");
//
//    // STRATEGY
//    IO.println("\n------- STRATEGY PATTERN -------");
//    PaymentContext payment = new PaymentContext(new CardPayment());
//    payment.pay(feature.cost());
}