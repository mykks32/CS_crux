public class RentalCarBuilder {
    private Car car;
    private boolean gps;
    private boolean childSeat;

    static class Builder {
        private Car car;
        private boolean gps;
        private boolean childSeat;

        Builder setCar(Car car) {
            this.car = car;
            return this;
        }

        Builder setGps(boolean gps) {
            this.gps = gps;
            return this;
        }

        Builder setChildSeat(boolean childSeat) {
            this.childSeat = childSeat;
            return this;
        }

        RentalCarBuilder build() {
            RentalCarBuilder r = new RentalCarBuilder();
            r.car = this.car;
            r.gps = this.gps;
            r.childSeat = this.childSeat;
            return r;
        }
    }

    public void showDetails() {
        car.specs();
        IO.println("GPS: " + gps + ", Child Seat: " + childSeat);
    }
}
