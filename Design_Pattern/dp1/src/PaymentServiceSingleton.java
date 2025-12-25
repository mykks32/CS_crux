public class PaymentServiceSingleton {
    private static PaymentServiceSingleton instance;

    private PaymentServiceSingleton() {}

    public static PaymentServiceSingleton getInstance() {
        if (instance == null) instance = new PaymentServiceSingleton();
        return instance;
    }

    public void processPayment(double amount) {
        IO.println("Processing payment: " + amount);
    }
}
