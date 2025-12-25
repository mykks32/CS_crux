interface Car {
    void specs();
}

class Sedan implements Car {
    public void specs() {
        IO.println("Sedan: Comfortable, 4 seats");
    }
}

class Suv implements Car {
    public void specs() {
        IO.println("SUV: Spacious, 7 seats");
    }
}

class CarFactory {
    public static Car getCar(String type) {
        return switch(type.toLowerCase()){
            case "sedan" -> new Sedan();
            case "suv" -> new Suv();
            default -> throw new IllegalArgumentException("Unknown car type" + type);
        };
    }
}
