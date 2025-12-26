import enums.Engine;
import enums.Suspension;
import enums.Transmission;
import enums.Type;

public class CarBuilder {

    private final Type carType;
    private final Engine engine;
    private final Transmission transmission;
    private final Suspension suspension;

    private CarBuilder(Builder builder) {
        this.carType = builder.carType;
        this.engine = builder.engine;
        this.transmission = builder.transmission;
        this.suspension = builder.suspension;
    }

    public static class Builder {
        private Type carType;
        private Engine engine;
        private Transmission transmission;
        private Suspension suspension;

        public Builder setCarType(Type carType) {
            this.carType = carType;
            return this;
        }

        public Builder setEngine(Engine engine) {
            this.engine = engine;
            return this;
        }

        public Builder setTransmission(Transmission transmission) {
            this.transmission = transmission;
            return this;
        }

        public Builder setSuspension(Suspension suspension) {
            this.suspension = suspension;
            return this;
        }

        public CarBuilder build() {
            if (carType == null || engine == null || transmission == null || suspension == null) {
                throw new IllegalStateException("Car type, engine, transmission and suspension  are required");
            }
            return new CarBuilder(this);
        }
    }

    public String showDetails() {
        return "Car{" +
                "type=" + carType +
                ", engine=" + engine +
                ", transmission=" + transmission +
                ", suspension=" + suspension +
                '}';
    }
}