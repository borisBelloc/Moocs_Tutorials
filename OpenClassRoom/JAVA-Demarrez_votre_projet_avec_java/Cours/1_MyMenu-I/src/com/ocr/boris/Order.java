package com.ocr.boris;

import java.util.Scanner;

public class Order {
    Scanner sc = new Scanner(System.in);
    String orderSummary = "";

    /**
     * Display all available menus in the restaurant.
     */
    public void displayAvailableMenu() {
        System.out.println("Choix menu");
        System.out.println("1 - poulet");
        System.out.println("2 - boeuf");
        System.out.println("3 - végétarien");
        System.out.println("Que souhaitez-vous comme menu ?");
    }

    /**
     * Display a selected menu.
     *
     * @param nbMenu The selected menu.
     */
    public void displaySelectedMenu(int nbMenu) {
        if (nbMenu == 1) {
            System.out.println("Vous avez choisi comme menu : poulet");
        } else if (nbMenu == 2) {
            System.out.println("Vous avez choisi comme menu : boeuf");
        } else if (nbMenu == 3) {
            System.out.println("Vous avez choisi comme menu : végétarien");
        } else {
            System.out.println("Vous n'avez pas choisi de menu parmi les choix proposés");
        }
    }

    /**
     * Run asking process for a menu.
     */
    public void runMenu() {
        int nbMenu = askMenu();
        switch (nbMenu) {
            case 1:
                askSide(true);
                askDrink();
                break;
            case 2:
                askSide(true);
                break;
            case 3:
                askSide(false);
                askDrink();
                break;
        }
    }

    /**
     * Run asking process for several menus
     */
    public void runMenus() {
        System.out.println("Combien souhaitez vous commander de menu ?");
        orderSummary = "Résumé de votre commande :%n";
        int menuQuantity = sc.nextInt();
        for (int i = 0; i < menuQuantity; i++) {
            orderSummary += "Menu " + (i + 1) + ":%n";
            this.runMenu();
        }
        System.out.println("");
        System.out.println(String.format(orderSummary));
    }

    /**
     * Display a selected side depending on all sides enable or not.
     * All sides = vegetables, frites and rice
     * No all sides = rice or not
     *
     * @param nbSide         The selected Side
     * @param allSidesEnable enable display for all side or not
     */
    public void displaySelectedSide(int nbSide, boolean allSidesEnable) {
        if (allSidesEnable) {
            switch (nbSide) {
                case 1:
                    System.out.println("Vous avez choisi comme accompagnement : légumes frais");
                    break;
                case 2:
                    System.out.println("Vous avez choisi comme accompagnement : frites");
                    break;
                case 3:
                    System.out.println("Vous avez choisi comme accompagnement : riz");
                    break;
                default:
                    System.out.println("Vous n'avez pas choisi d'accompagnement parmi les choix proposés");
                    break;
            }
        } else {
            switch (nbSide) {
                case 1:
                    System.out.println("Vous avez choisi comme accompagnement : riz");
                    break;
                case 2:
                    System.out.println("Vous avez choisi comme accompagnement : pas de riz");
                    break;
                default:
                    System.out.println("Vous n'avez pas choisi d'accompagnement parmi les choix proposés");
                    break;
            }
        }
    }

    /**
     * Display a selected drink.
     *
     * @param nbDrink The selected drink.
     */
    public void displaySelectedDrink(int nbDrink) {
        switch (nbDrink) {
            case 1:
                System.out.println("Vous avez choisi comme boisson : eau plate");
                break;
            case 2:
                System.out.println("Vous avez choisi comme boisson : eau gazeuse");
                break;
            case 3:
                System.out.println("Vous avez choisi comme boisson : soda");
                break;
            default:
                System.out.println("Vous n'avez pas choisi de boisson parmi les choix proposés");
                break;
        }
    }

    /**
     * Display all available sides depending on all sides enable or not.
     * All sides = vegetables, frites and rice
     * No all sides = rice or not
     *
     * @param allSideEnable enable display for all side or not
     */
    public void displayAvailableSide(boolean allSideEnable) {
        System.out.println("Choix accompagnement");
        if (allSideEnable) {
            System.out.println("1 - légumes frais");
            System.out.println("2 - frites");
            System.out.println("3 - riz");
        } else {
            System.out.println("1 - riz");
            System.out.println("2 - pas de riz");
        }
        System.out.println("Que souhaitez-vous comme accompagnement ?");
    }

    /**
     * Display all available drinks in the restaurant
     */
    public void displayAvailableDrink() {
        System.out.println("Choix boisson");
        System.out.println("1 - eau plate");
        System.out.println("2 - eau gazeuse");
        System.out.println("3 - soda");
        System.out.println("Que souhaitez-vous comme boisson ?");
    }

    /**
     * Display a question about a category in the standard input, get response and display it
     *
     * @param category  the category of the question
     * @param responses available responses
     * @return category number selected
     */
    public int askSomething(String category, String[] responses) {
        System.out.println("Choix " + category);
        for (int i = 1; i <= responses.length; i++) {
            System.out.println(i + " - " + responses[i - 1]);
        }
        System.out.println("Que souhaitez-vous comme " + category + "?");
        int nbResponse;
        boolean responseIsGood;
        do {
            nbResponse = sc.nextInt();
            responseIsGood = (nbResponse >= 1 && nbResponse <= responses.length);
            if (responseIsGood) {
                String choice = "Vous avez choisi comme " + category + " : " + responses[nbResponse - 1];
                System.out.println(choice);
                orderSummary += choice + "%n";
            } else {
                boolean isVowel = "aeiouy".contains(Character.toString(category.charAt(0)));
                if (isVowel) {
                    System.out.println("Vous n'avez pas choisi d'" + category + " parmi les choix proposés");
                } else {
                    System.out.println("Vous n'avez pas choisi de " + category + " parmi les choix proposés");
                }
            }
        } while (!responseIsGood);
        return nbResponse;
    }

    /**
     * Display a question about menus in the standard input, get response and display it
     *
     * @return menu number selected
     */
    public int askMenu() {
        String[] menus = {"poulet", "boeuf", "végétarien"};
        return askSomething("menu", menus);
    }

    /**
     * Display a question about menus in the standard input, get response and display it
     *
     * @param allSidesEnabled all Sides enabled or not
     */
    public void askSide(boolean allSidesEnabled) {
        if (allSidesEnabled) {
            String[] reponsesAllSide = {"légumes frais", "frites", "riz"};
            askSomething("accompagnement", reponsesAllSide);
        } else {
            String[] responsesOnlyRice = {"riz", "pas de riz"};
            askSomething("accompagnement", responsesOnlyRice);
        }
    }

    /**
     * Display a question about menus in the standard input, get response and display it
     */
    public void askDrink() {
        String[] drinks = {"eau plate", "eau gazeuse", "soda"};
        askSomething("boisson", drinks);
    }
}

