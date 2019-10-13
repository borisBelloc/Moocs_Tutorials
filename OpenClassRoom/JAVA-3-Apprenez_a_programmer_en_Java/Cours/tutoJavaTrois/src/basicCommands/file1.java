package basicCommands;

import java.util.Scanner;

public class file1 {

	public static void main(String[] args) {
//		simpleTab();
		multiTab();


	}
	
	public static void multiTab() {
		// TABLEAU MULTI
		
		int premiersNombres[][] = { { 0, 2, 4, 6, 8 }, { 1, 3, 5, 7, 9 } };
		int i = 0, j = 0;

		// AVEC WHILE
		while (i < 2) {
			j = 0;
			while (j < 5) {
				System.out.print(premiersNombres[i][j]);
				j++;
			}
			System.out.println("");
			i++;
		}
		
		// AVEC FOR
		 
		for(int k = 0; k < 2; k++)
		{    
		  for(int l = 0; l < 5; l++)
		  {
		    System.out.print(premiersNombres[k][l]);       
		  }
		  System.out.println("");     
		}
		
		
		//DOUBLE FOR EACH
		String tab[][]={{"toto", "titi", "tutu", "tete", "tata"}, {"1", "2", "3", "4"}};
		int m = 0, n = 0;
		 
		// on récupére un tableau au cours de la première boucle
		for(String sousTab[] : tab)
		{
		  m = 0;
		  // on parcours ce même tableau afin de récupérer les valeurs de celui-ci dans la deuxième
		  for(String str : sousTab)
		  {     
		    System.out.println("La valeur de la nouvelle boucle est  : " + str);
		    System.out.println("La valeur du tableau à l'indice ["+n+"]["+m+"] est : " + tab[n][m]);
		    m++;
		  }
		  n++;
		}
	}

	public static void simpleTab() {
		// TABLEAU SIMPLE

		char tableauCaractere[] = { 'a', 'b', 'c', 'd', 'e', 'f', 'g' };
		int i = 0;
		char reponse = ' ', carac = ' ';
		Scanner sc = new Scanner(System.in);

		do {// Boucle principale
			do {// On répète cette boucle tant que l'utilisateur n'a pas rentré une lettre
				// figurant dans le tableau
				i = 0;
				System.out.println("Rentrez une lettre, SVP ");

				carac = sc.nextLine().toLowerCase().charAt(0);
				// Boucle de recherche dans le tableau
				while (i < tableauCaractere.length && carac != tableauCaractere[i])
					i++;

				// Si i < 7 c'est que la boucle n'a pas dépassé le nombre de cases du tableau
				if (i < tableauCaractere.length)
					System.out.println(" La lettre " + carac + " se trouve bien dans le tableau !");
				else // Sinon
					System.out.println(" La lettre " + carac + " ne se trouve pas dans le tableau !");

			} while (i >= tableauCaractere.length);

			// Tant que la lettre de l'utilisateur ne correspond pas à une lettre du tableau
			do {
				System.out.println("Voulez-vous essayer à nouveau ? (O/N)");
				reponse = sc.nextLine().toUpperCase().charAt(0);
			} while (reponse != 'N' && reponse != 'O');
		} while (reponse == 'O');

		System.out.println("Au revoir !");
	}

}
