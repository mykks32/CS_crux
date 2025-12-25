import enums.Engine;
import enums.Suspension;
import enums.Transmission;
import enums.Type;

public class CarBuilder {
    private Type carType;
    private Engine engine;
    private Transmission transmission;
    private Suspension suspension;

    static class Builder {
        private Type carType;
        private Engine engine;
        private Transmission transmission;
        private Suspension suspension;

        Builder setCarType(Type carType) {
            this.carType = carType;
            return this;
        }

        Builder setEngine(Engine engine) {
            this.engine = engine;
            return this;
        }

        Builder setTransmission(Transmission transmission) {
            this.transmission = transmission;
            return this;
        }

        Builder setSuspension(Suspension suspension) {
            this.suspension = suspension;
            return this;
        }

        CarBuilder build() {
            CarBuilder car = new CarBuilder();
            car.carType = this.carType;
            car.engine = this.engine;
            car.transmission = this.transmission;
            car.suspension = this.suspension;
            return car;
        }
    }

    public String showDetails() {
        return "Car Details {" +
                "type=" + carType +
                ", engine=" + engine +
                ", transmission=" + transmission +
                ", suspension=" + suspension +
                "}";
    }
}
