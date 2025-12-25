interface PaymentStrategy {
    void pay(double amount);
}

class CardPayment implements PaymentStrategy {
    public void pay(double amount) {
        IO.println("Paid " + amount + " by Card");
    }
}

class UpiPayment implements PaymentStrategy {
    public void pay(double amount) {
        IO.println("Paid " + amount + " by UPI");
    }
}

class PaymentContext {
    private final PaymentStrategy strategy;

    PaymentContext(PaymentStrategy strategy) {
        this.strategy = strategy;
    }

    void pay(double amount) { strategy.pay(amount); }
}


