package com.bb.homeshop.dao;

import com.bb.homeshop.Product;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ProductDAO {

    // DAO = data access object

    // Probleme time zone : https://www.developpez.net/forums/d1876029/java/general-java/server-time-zone-non-reconnu/
    // ajouter :: ?zeroDateTimeBehavior=CONVERT_TO_NULL&serverTimezone=UTC
    private String url = "jdbc:mysql://localhost:3306/homeshop?zeroDateTimeBehavior=CONVERT_TO_NULL&serverTimezone=UTC";
    private String user = "root";
    private String pwd = "dky1234";

    /**
     * Get all products on database
     * @return product list
     */
    public List<Product> getAll() {
        List<Product> products = new ArrayList<>();
        try {
            Connection connection = DriverManager.getConnection(url, user, pwd);
            Statement statement = connection.createStatement();
            ResultSet rs = statement.executeQuery("select * from product");
            while (rs.next()) {
                String name = rs.getString("name");
                String description = rs.getString("description");
                Double price = rs.getDouble("price");
                products.add(new Product(name, description, price));
            }
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return products;
    }
}
