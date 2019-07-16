package com.bb;

import com.bb.homeshop.*;

public class Main {

    public static void main(String[] args) {

        Product cafe = new Product("Philips", "Senseo Noir", 79.99);
        Television tv = new Television("Tv Samsung", "Smart TV LED 49\"", 599, 49,"LED");
        Fridge fridge = new Fridge("BEKQ", "réfrigérateur 130L blanc", 189, 130, false);

        Customer customerOne = new Customer("Boris BELLOC", "136 rue tam, Paris");

        Bill bill = new Bill(customerOne);
        bill.addProduct(cafe, 1);
        bill.addProduct(tv, 1);
        bill.addProduct(fridge, 1);



    }
}
