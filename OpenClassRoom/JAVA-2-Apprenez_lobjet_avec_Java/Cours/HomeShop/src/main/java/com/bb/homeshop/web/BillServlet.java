package com.bb.homeshop.web;

import com.bb.homeshop.Fridge;
import com.bb.homeshop.Product;
import com.bb.homeshop.Television;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class BillServlet extends HttpServlet {
    // on initie les produits dans la méthode init
    List<Product> products = new ArrayList<Product>();
    @Override
    public void init() throws ServletException {
        // creation des produits
        Product cafe = new Product("Philips", "Senseo Noir", 79.99);
        Television tv = new Television("Tv Samsung", "Smart TV LED 49\"", 599, 49,"LED");
        Fridge fridge = new Fridge("BEKQ", "réfrigérateur 130L blanc", 189, 130, false);
        // ajout dans la liste
        products.add(cafe);
        products.add(tv);
        products.add(fridge);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // on indique que le contenu renvoyé sera du html
        resp.setContentType("text/html");
        // req.getQueryString() : https://docs.oracle.com/javaee/7/api/javax/servlet/http/HttpServletRequest.html#getQueryString--
        // Cette méthode retourne une chaîne de caractères contenant l'ensemble des paramètres.
        // S'il n'y a pas de paramètre, la méthode retourne  null.
        if (req.getQueryString() == null)
            displayForm(resp);
        else
            displayBill();
    }

    private void displayBill() {
    }

    private void displayForm(HttpServletResponse resp) throws IOException {
        for (int i = 0 ; i < products.size() ; i++) {
            Product product = products.get(i);
            resp.getWriter().println("<b>" + i + " - " + product.getName() + "</b> : " + product.getPrice() +
                    "<br/>" + product.getDescription() + "<br/><br/>");
        }
        String form = "<form action=\"bill\">" +
                "<b>nom complet :</b> <input name=\"fullname\"/><br/>" +
                "<b>adresse :</b> <input name=\"address\"/><br/><br/>" +
                "<b>livraison :</b> <br/>" +
                "à domicile : <input type=\"radio\" name=\"deliveryMode\" value=\"direct\"/><br/>" +
                "express : <input type=\"radio\" name=\"deliveryMode\" value=\"express\"/><br/>" +
                "point relais : <input type=\"radio\" name=\"deliveryMode\" value=\"relay\"/><br/>" +
                "à retirer : <input type=\"radio\" name=\"deliveryMode\" value=\"takeAway\"/><br/>" +
                "<b>Informations livraison</b> (relay et express) : <input name=\"deliveryInfo\"/><br/><br/>" +
                "<b>liste produits </b> (produit:quantité, un produit par ligne) : <br/>" +
                "<textarea name=\"products\"></textarea><br/>" +
                "<input type=\"submit\"/>" +
                "</form>";
        resp.getWriter().println(form);
    }
}
