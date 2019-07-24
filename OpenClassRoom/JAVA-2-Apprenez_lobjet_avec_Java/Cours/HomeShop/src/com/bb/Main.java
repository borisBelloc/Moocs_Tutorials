package com.bb;

import com.bb.homeshop.*;

public class Main {

    public static void main(String[] args) {

        Product cafe = new Product("Philips", "Senseo Noir", 79.99);
        Television tv = new Television("Tv Samsung", "Smart TV LED 49\"", 599, 49,"LED");
        Fridge fridge = new Fridge("BEKQ", "réfrigérateur 130L blanc", 189, 130, false);

        Customer customerOne = new Customer("Boris BELLOC", "136 rue tam, Paris");

        Bill bill = new Bill(customerOne, new RelayDelivery(27));

        bill.addProduct(cafe, 1);
        bill.addProduct(tv, 1);
        bill.addProduct(fridge, 1);

        // Creer un fichier pour facture
         bill.generate(new FileWriter("facture_client"));

        // -----------------------------------
        // affiche la facture dans console
//        bill.generate(new Writer() {
//            @Override
//            public void start() {
//            }
//
//            @Override
//            public void writeLine(String line) {
//                System.out.println(line);
//            }
//
//            @Override
//            public void stop() {
//            }
//        });


    }
}
