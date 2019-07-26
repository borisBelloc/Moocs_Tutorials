package com.bb;

import com.bb.homeshop.*;

public class Main {

    public static void main(String[] args) {

        Product cafe = new Product("Philips", "Senseo Noir", 79.99);
        Television tv = new Television("Tv Samsung", "Smart TV LED 49\"", 599, 49,"LED");
        Fridge fridge = new Fridge("BEKQ", "réfrigérateur 130L blanc", 189, 130, false);

        Customer customerOne = new Customer("Boris BELLOC", "136 rue tam, Paris");

        Bill bill = new Bill(customerOne, new RelayDelivery(27));

        // Les produits a mettre dans la facture
        bill.addProduct(cafe, 1);
        bill.addProduct(tv, 1);
//        bill.addProduct(fridge, 1);

        try {
            // Creer un fichier pour facture
            bill.generate(new FileWriter("facture_client"));

            // -----------------------------------
            // affiche la facture dans console
            bill.generate(new Writer() {
                @Override
                public void start() {
                }

                @Override
                public void writeLine(String line) {
                    System.out.println(line);
                }

                @Override
                public void stop() {
                }
            });
        } catch (NoProductInBillException e) {
            System.err.println("Pas de produit dans la facture");
        }


    }
}
