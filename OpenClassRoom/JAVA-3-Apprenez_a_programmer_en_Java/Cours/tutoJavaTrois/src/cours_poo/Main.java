package cours_poo;

public class Main {

	public static void main(String[] args) {

		
//		Ville v = new Ville();
//		Ville v1 = new Ville("Marseille", 123456, "France");       
//		Ville v2 = new Ville("Rio", 321654, "Brésil");
//
//		System.out.println("\n v = "+v.getNomVille()+" ville de  "+v.getNbreHabitants()+ " habitants se situant en "+v.getNomPays());
//		System.out.println(" v1 = "+v1.getNomVille()+" ville de  "+v1.getNbreHabitants()+ " habitants se situant en "+v1.getNomPays());
//		System.out.println(" v2 = "+v2.getNomVille()+" ville de  "+v2.getNbreHabitants()+ " habitants se situant en "+v2.getNomPays()+"\n\n");
		        
		/*
		  Nous allons interchanger les Villes v1 et v2
		  tout ça par l'intermédiaire d'un autre objet Ville.        
		*/       
//		Ville temp = new Ville();
//		temp = v1;
//		v1 = v2;
//		v2 = temp;
//		       
//		System.out.println(" v1 = "+v1.getNomVille()+" ville de  "+v1.getNbreHabitants()+ " habitants se situant en "+v1.getNomPays());
//		System.out.println(" v2 = "+v2.getNomVille()+" ville de  "+v2.getNbreHabitants()+ " habitants se situant en "+v2.getNomPays()+"\n\n");

		/*       
		  Nous allons maintenant interchanger leurs noms
		  cette fois par le biais de leurs mutateurs.
		*/   
//		v1.setNomVille("Hong Kong");
//		v2.setNomVille("Djibouti");
//		      
//		System.out.println(" v1 = "+v1.getNomVille()+" ville de  "+v1.getNbreHabitants()+ " habitants se situant en "+v1.getNomPays());
//		System.out.println(" v2 = "+v2.getNomVille()+" ville de  "+v2.getNbreHabitants()+ " habitants se situant en "+v2.getNomPays()+"\n\n");
	
		/////
//		Ville v = new Ville();                
//		System.out.println("Le nombre d'instances de la classe Ville est : " + Ville.nbreInstances);
//		System.out.println("Le nombre d'instances de la classe Ville est : " + Ville.getNbreInstancesBis());
//			                        
//		Ville v1 = new Ville("Marseille", 1236, "France");        
//		System.out.println("Le nombre d'instances de la classe Ville est : " + Ville.nbreInstances);
//		System.out.println("Le nombre d'instances de la classe Ville est : " + Ville.getNbreInstancesBis());
//		                
//		Ville v2 = new Ville("Rio", 321654, "Brésil");        
//		System.out.println("Le nombre d'instances de la classe Ville est : " + Ville.nbreInstances);
//		System.out.println("Le nombre d'instances de la classe Ville est : " + Ville.getNbreInstancesBis());
		
		// Heritage
	
//		Capîtal cap = new Capîtal();
//		System.out.println(cap.toString());
		
		// Polymorphisme
		
		//Définition d'un tableau de villes null
		Ville[] tableau = new Ville[6];
		        
		//Définition d'un tableau de noms de villes et un autre de nombres d'habitants
		String[] tab = {"Marseille", "lille", "caen", "lyon", "paris", "nantes"};
		int[] tab2 = {123456, 78456, 654987, 75832165, 1594, 213};
		         
		//Les trois premiers éléments du tableau seront des villes,
		//et le reste, des capitales
		for(int i = 0; i < 6; i++){
		  if (i <3){
		    Ville V = new Ville(tab[i], tab2[i], "france");
		    tableau[i] = V;
		  }
		  else{
		    Capitale C = new Capitale(tab[i], tab2[i], "france", "la tour Eiffel");
		    tableau[i] = C;
		  }
		}
		                 
		//Il ne nous reste plus qu'à décrire tout notre tableau !
		for(Ville V : tableau){
			// pas besoin de préciser .toString()
		  System.out.println(V);
		}
		
		
		
		
	}

}
