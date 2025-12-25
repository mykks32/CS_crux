public class CarSingleton {
    private final int noOfWheels;
    private static CarSingleton instance;

    private CarSingleton(int noOfWheels) {
        this.noOfWheels = noOfWheels;
    }

    private CarSingleton() {
        this(4);
    }

    public static CarSingleton getInstance() {
        if (instance == null) return instance = new CarSingleton();
        return instance;
    }

    public int getNoOfWheels() {
        return noOfWheels;
    }
}
