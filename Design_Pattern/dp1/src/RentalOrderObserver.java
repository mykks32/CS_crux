import java.util.ArrayList;
import java.util.List;

interface Observer {
    void update(String status);
}

class Customer implements Observer {
    private final String name;

    Customer(String name) {
        this.name = name;
    }

    public void update(String status) {
        IO.println("Customer " + name + " notified: " + status);
    }
}

class RentalOrderObserver {
	private final List<Observer> observers = new ArrayList<>();
    private String status;

    void addObserver(Observer o) {
		observers.add(o);
	}

	void setStatus(String status) {
        this.status = status;
        for(Observer o: observers) o.update(status);
	}
}

	
