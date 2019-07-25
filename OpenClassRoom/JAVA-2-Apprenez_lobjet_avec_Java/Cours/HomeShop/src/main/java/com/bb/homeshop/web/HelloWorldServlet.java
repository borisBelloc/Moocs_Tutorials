package com.bb.homeshop.web;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class HelloWorldServlet extends HttpServlet {
    @Override
    // @param :
    // ** HttpServletRequest req  : la requête HTTP reçue par votre serveur
    // (par exemple le message GET de la première partie).
    // ** HttpServletResponse resp  : un objet permettant d'envoyer la réponse.
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.getWriter().println("Hello msg");
    }
}
