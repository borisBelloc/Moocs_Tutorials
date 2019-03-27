/* 
MOOC : Apprenez à coder avec JavaScript
https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript
Activité 2/2 : gestion des contacts - 2019/03/14
BELLOC Boris
*/


class Contact {
  constructor(nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
  }

  affichage() {
    return `Nom : ${this.nom}, prénom : ${this.prenom}`;
  }
}

let list_contacts = [];
// ajouts initiaux requis dans l'énoncé
list_contacts.push(new Contact("Lévisse", "Carole"));
list_contacts.push(new Contact("Nelsonne", "Mélodie"));

console.log("Bienvenue dans le gestionnaire des contacts !");


let choix;
while (choix != "0") {
  console.log("\n 1: Lister les contacts \n 2: Ajouter un contact \n 0: Quitter");
  choix = prompt("Choisissez une option :");

  switch (choix) {
    case "1":
      console.log("\nVoici la liste de tous vos contacts :");
      list_contacts.forEach(contact => {
        console.log(contact.affichage());
      });
      break;

    case "2":
      nom = prompt("Entrez le nom du nouveau contact :");
      prenom = prompt("Entrez le prénom du nouveau contact :");
      list_contacts.push(new Contact(nom, prenom));
      console.log("\nLe nouveau contact a été ajouté");
      break;

    default:
      if (choix != "0") {
        console.log("\nChoix invalide, essayez à nouveau");
      }
      break;
  }
}

if (choix == "0") {
  console.log("\nAu revoir !");
}
