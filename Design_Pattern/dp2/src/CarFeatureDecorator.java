import Interfaces.CarFeature;

import java.beans.FeatureDescriptor;

abstract public class CarFeatureDecorator implements CarFeature {
    protected CarFeature carFeature;
    CarFeatureDecorator(CarFeature carFeature) {
        this.carFeature = carFeature;
    }
}

class BasicCarFeatureDecorator implements CarFeature {
    public int Cost() {
        return 500000;
    }

    public String getDescription() {
        return "Basic Car Cost";
    }
}

class Insurance extends CarFeatureDecorator {
    Insurance(CarFeature carCost) {
        super(carCost);
    }

    @Override
    public int Cost() {
        return carFeature.Cost() + 5000;
    }

    @Override
    public String getDescription() {
        return carFeature.getDescription() + ", Insurance";
    }
}

class GPS extends CarFeatureDecorator {
    GPS(CarFeature carCost) {
        super(carCost);
    }

    @Override
    public int Cost() {
        return carFeature.Cost() + 5000;
    }

    @Override
    public String getDescription() {
        return carFeature.getDescription() + ", GPS";
    }
}