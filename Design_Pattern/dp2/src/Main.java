import Interfaces.Car;
import Interfaces.CarFeature;
import enums.Engine;
import enums.Suspension;
import enums.Transmission;
import enums.Type;

public class Main {
    public static void main(String[] args) {
    // FACTORY
    System.out.println("------- FACTORY PATTERN -------");
    Car car = CarFactory.getCar(Type.SUV);
    System.out.println(car.drive());

    // BUILDER
    System.out.println("\n------- BUILDER PATTERN -------");
    CarBuilder carBuilder = new CarBuilder
            .Builder()
            .setCarType(Type.SEDAN)
            .setEngine(Engine.DIESEL)
            .setSuspension(Suspension.HIGH)
            .setTransmission(Transmission.MANUAL)
            .build();
    System.out.println(carBuilder.showDetails());

    // DECORATOR
    System.out.println("\n------- DECORATOR PATTERN -------");
    CarFeature carFeature = new GPS(new Insurance(new BasicCarFeatureDecorator()));
    System.out.println(carFeature.getDescription() + " & " + "Cost: " + carFeature.Cost());
//
//    // SINGLETON
//    IO.println("\n------- SINGLETON PATTERN -------");
//    PaymentServiceSingleton.getInstance().processPayment(feature.cost());
//
//    // OBSERVER
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
}