public class PaymentSingleton {
    private static PaymentSingleton instance;

    private PaymentSingleton() {}

    public static PaymentSingleton getInstance() {
        if (instance == null) return instance = new PaymentSingleton();
        return instance;
    }

    public void ProcessPayment(int cost) {
        System.out.println("Total Payment: " + cost);
    }
}
