package basicCommands;

import java.util.Scanner;

public class file0 {
	
	// While, scanner

	public static void main(String[] args) {
		BoucleWhile();
	}


		public static void BoucleWhile() {
			String prenom;
			char reponse = 'O';
			Scanner sc = new Scanner(System.in);
			while (reponse == 'O')
			{
				System.out.println("Donnez un prénom : ");
				prenom = sc.nextLine();
				System.out.println("Bonjour " +prenom+ ", comment vas-tu ?");                        
				//Sans ça, nous n'entrerions pas dans la deuxième boucle
				reponse = ' ';

				//Tant que la réponse n'est pas O ou N, on repose la question
				while(reponse != 'O' && reponse != 'N')
				{
					//On demande si la personne veut faire un autre essai
					System.out.println("Voulez-vous réessayer ? (O/N)");
					reponse = sc.nextLine().toUpperCase().charAt(0);
				}
			}
			System.out.println("Au revoir…");
			sc.close();
		}


	public static void Scan() {
		Scanner sc = new Scanner(System.in);
		System.out.println("Saisissez un entier : ");
		int i = sc.nextInt();
		System.out.println("Saisissez une chaîne : ");
		//On vide la ligne avant d'en lire une autre
		sc.nextLine();
		String str = sc.nextLine();      
		System.out.println("FIN ! ");

	}

	
	public static void debutCours() {
		System.out.println(" You have just run HelloWorld !");       

		// Caster int -> double (convertir entier en decimal)
		int var1 = 15, var2 = 5;
		double resultat = (double)(var1) + (double)(var2);
		System.out.println(resultat);
		// Caster int -> String
		int i = 12;
		String j = new String();
		j = String.valueOf(i);
		// String -> int 
		int k = Integer.valueOf(j).intValue(); // Il existe des équivalents a intValue()pour les autres types numériques :floatValue(),doubleValue()…

		//
		double nombreA = 1000000d;
		// Peut s'écrire ainsi
		double nombreB = 1__000_000d; // Le nombre d'underscore n'a pas d'importance
		System.out.println("nombreB " + nombreB);


		Scanner sc = new Scanner(System.in);
		//        input String
		System.out.println("Veuillez saisir un mot :");
		String str = sc.nextLine();
		System.out.println("Vous avez saisi : " + str);        

		//        input int
		System.out.println("Veuillez saisir un nombre :");
		int int1 = sc.nextInt();
		System.out.println("Vous avez saisi le nombre : " + int1);
		//        fonctionne avec tous les type :
		double d = sc.nextDouble();
		long l = sc.nextLong();
		byte b = sc.nextByte();


	}
}
