package com.bb.homeshop;

import java.util.HashMap;
import java.util.Map;

public class Bill {
    private Customer customer;
    // par défault, une map (ou tout type objet) est null, il faut ajouter une valeur a l'interieur pour qu'il ne soit plus nul, soit ; 'new HashMap<>'
    private Map<Product, Integer> products = new HashMap<Product, Integer>();

    // Constructeur de l'objet ; la methode porte le nom de la class
    // pas de type de retour
    public Bill(Customer customer) {
        this.customer = customer;
    }

    /**
     * Add a product with a quantity in the bill
     * @param product  product to add
     * @param quantity quantity of the product
     */
    public void addProduct(Product product, Integer quantity) {
        this.products.put(product, quantity);
    }

    public Customer getCustomer() {
        return customer;
    }

    public Map<Product, Integer> getProducts() {
        return products;
    }
}
