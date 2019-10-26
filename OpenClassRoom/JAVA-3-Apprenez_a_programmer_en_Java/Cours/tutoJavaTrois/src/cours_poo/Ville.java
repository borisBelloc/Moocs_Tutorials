package cours_poo;

public class Ville {
	private String nomVille;
	private String nomPays;
	private int nbreHabitants;
	private char categorie;

	public static int nbreInstances = 0;
	private static int nbreInstancesBis = 0;

	public Ville() {
		super();
		System.out.println("Creation d'une ville !");
		this.nomVille = "Inconnu";
		this.nomPays = "Inconnu";
		this.nbreHabitants = 0;
		nbreInstances++;
		nbreInstancesBis++;
	}

	public Ville(String pNom, int pNbre, String pPays) {
		System.out.println("Création d'une ville avec des paramètres !");
		nomVille = pNom;
		nomPays = pPays;
		nbreHabitants = pNbre;

		nbreInstances++;
		nbreInstancesBis++;

		setCategorie();

	}

	public static int getNbreInstancesBis() {
		return nbreInstancesBis;
	}

	public static void setNbreInstancesBis(int nbreInstancesBis) {
		Ville.nbreInstancesBis = nbreInstancesBis;
	}

	@Override
	public String toString() {
		return "Ville [nomVille=" + nomVille + ", nomPays=" + nomPays + ", nbreHabitants=" + nbreHabitants
				+ ", categorie=" + categorie + "]";
	}

	public String getNomVille() {
		return nomVille;
	}

	public void setNomVille(String nomVille) {
		this.nomVille = nomVille;
	}

	public String getNomPays() {
		return nomPays;
	}

	public void setNomPays(String nomPays) {
		this.nomPays = nomPays;
	}

	public int getNbreHabitants() {
		return nbreHabitants;
	}

	public void setNbreHabitants(int nbreHabitants) {
		this.nbreHabitants = nbreHabitants;
	}

	// Définit la catégorie de la ville
	private void setCategorie() {

		int bornesSuperieures[] = { 0, 1000, 10000, 100000, 500000, 1000000, 5000000, 10000000 };
		char categories[] = { '?', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' };

		int i = 0;
		while (i < bornesSuperieures.length && this.nbreHabitants > bornesSuperieures[i])
			i++;

		this.categorie = categories[i];
	}

	// Retourne une chaîne de caractères selon le résultat de la comparaison
	public String comparer(Ville v1) {
		String str = new String();

		if (v1.getNbreHabitants() > this.nbreHabitants)
			str = v1.getNomVille() + " est une ville plus peuplée que " + this.nomVille;

		else
			str = this.nomVille + " est une ville plus peuplée que " + v1.getNomVille();

		return str;
	}

}
