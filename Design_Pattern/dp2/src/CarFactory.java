import Interfaces.Car;
import enums.Type;

class Sedan implements Car {
    @Override
    public String drive() {
        return "You are driving a sedan";
    }
}

class SUV implements Car {
    @Override
    public String drive() {
        return "You are driving a SUV";
    }
}

class CarFactory {
    public static Car getCar(Type carType) {
        return switch (carType) {
            case Type.SEDAN -> new Sedan();
            case Type.SUV -> new SUV();
        };
    }
}
