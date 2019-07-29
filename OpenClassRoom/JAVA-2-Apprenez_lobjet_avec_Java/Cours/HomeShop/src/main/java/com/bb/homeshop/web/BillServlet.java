package com.bb.homeshop.web;

import com.bb.homeshop.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class BillServlet extends HttpServlet {
    // on initie les produits dans la méthode init
    List<Product> products = new ArrayList<Product>();

    @Override
    public void init() throws ServletException {
        // creation des produits
        Product cafe = new Product("Philips", "Senseo Noir", 79.99);
        Television tv = new Television("Tv Samsung", "Smart TV LED 49\"", 599, 49, "LED");
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
            displayBill(req, resp);
    }

    private void displayBill(HttpServletRequest req, HttpServletResponse resp) {
        // recuperation parametres
        // DOC : The method getQueryString() returns a string of data, filled by the user in FORM fields
        // (of text boxes, check boxes etc.), and sent to server.
        // https://way2java.com/servlets/request-getquerystring-method-example-servlets/
        Map<String, String> params = splitParameters(req.getQueryString());
        // creation variable type customer et delivery
        Customer customer = new Customer(params.get("fullname"), params.get("address"));
        Delivery delivery = null;
        // "deliveryInfo" nom champs html
        switch (params.get("deliveryMode")) {
            case "direct" :
                delivery = new DirectDelivery();
                break;
            case "express" :
                delivery = new ExpressDelivery(params.get("deliveryInfo"));
                break;
            case "relay" :
                delivery = new RelayDelivery(Integer.parseInt(params.get("deliveryInfo")));
                break;
            case "takeAway" :
                delivery = new TakeAwayDelivery();
                break;
        }
        // %0D%0A -> retour a la ligne en http
        // %3A -> :
        Bill bill = new Bill(customer, delivery);
        String[] productsParams = params.get("products").split("%0D%0A");
        for (String productLine : productsParams) {
            String[] productAndQuantity = productLine.split("%3A");
            // recup du produit et de la quantité puis ajotu a la facture
            Product product = products.get(Integer.parseInt(productAndQuantity[0]));
            Integer quantity = Integer.parseInt(productAndQuantity[1]);
            bill.addProduct(product, quantity);
        }
        // utilisation de l'interface Writer
        bill.generate(new Writer() {
            @Override
            public void start() {

            }

            @Override
            public void writeLine(String line) {
                try {
                    resp.getWriter().println("<br/>" + line);
                } catch (IOException e) {
                    e.printStackTrace();
                }

            }

            @Override
            public void stop() {

            }
        });

    }

    private void displayForm(HttpServletResponse resp) throws IOException {
        for (int i = 0; i < products.size(); i++) {
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


//    Pour pouvoir utiliser cette méthode dans plusieurs  Servlet , il faut la déplacer dans une classe ServletUtils
//    et mettre celle-ci en  static .
    // infos : https://openclassrooms.com/fr/courses/4989236-apprenez-l-objet-avec-java/5040011-utilisez-votre-formulaire#/id/r-5040034
    public Map<String, String> splitParameters(String queryString) {
        // découpage de la chaine de charactere
        String[] brutParams = queryString.split("&");
        // creation de la map qui va etre retourné
        Map<String, String> params = new HashMap<>();
        for (String brutParam : brutParams) {
            String[] keyAndValue = brutParam.split("=");
            if (keyAndValue.length == 2)
                params.put(keyAndValue[0], keyAndValue[1]);
        }
        return params;
    }
}
