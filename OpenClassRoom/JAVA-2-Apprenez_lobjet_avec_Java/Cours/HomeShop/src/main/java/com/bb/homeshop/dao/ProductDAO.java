package com.bb.homeshop.dao;

import com.bb.homeshop.Product;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ProductDAO {

    // DAO = data access object

    private String url = "jdbc:mysql://localhost/homeshop";
    private String user = "root";
    private String pwd = "dky1234";

    /**
     * Get all products on database
     * @return product list
     */
    public List<Product> getAll() {
        // liste permetant de retourner les produits
        List<Product> products = new ArrayList<>();
        try {
            Connection connection = DriverManager.getConnection(url, user, pwd);
            //recuperation des données
            Statement statement = connection.createStatement();
            ResultSet rs = statement.executeQuery( "select * from product");
            while (rs.next()) {
                String name = rs.getString("name");
                String description = rs.getString( "description");
                Double price = rs.getDouble( "price");
                products.add(new Product(name, description, price));
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return products;
    }
}
