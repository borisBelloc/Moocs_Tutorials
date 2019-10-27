package cours_poo;

public class Capitale extends Ville {
	private String monument;

	public Capitale() {
		super();
		this.monument = "aucun";
	}

	// super(xxx) indique les paramettre a prendre sur le parent 
	public Capitale(String nom, int hab, String pays, String monument){
	    super(nom, hab, pays);
	    this.monument = monument;
	  }

	@Override
	public String toString() {
		return super.toString() + "\n \t ==>> " + this.monument + " en est un monument";
	}

	public String getMonument() {
		return monument;
	}

	public void setMonument(String monument) {
		this.monument = monument;
	}

}

