interface Feature {
    double cost();
    String description();
}

class BasicRental implements Feature {
    public double cost() {
        return 5000;
    }

    public String description() {
        return "Basic Rental";
    }
}

abstract class FeatureDecorator implements Feature {
    protected Feature feature;
    FeatureDecorator(Feature f) {
        this.feature = f;
    }
}

class Insurance extends FeatureDecorator {
    Insurance(Feature f) {
        super(f);
    }
    public double cost() { return feature.cost() + 1000; }
    public String description() { return feature.description() + ", Insurance"; }
}

class GPS extends FeatureDecorator {
    GPS(Feature f) {
        super(f);
    }
    public double cost() { return feature.cost() + 500; }
    public String description() { return feature.description() + ", GPS"; }
}