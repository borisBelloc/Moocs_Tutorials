// https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript/3196346-trop-classe-la-poo#/id/r-5843977

// ex3 : Liste de comptes bancaires
// solution corrigé de ex3 : https://github.com/oc-courses/intro-javascript/blob/gh-pages/chapitre9_exercice3.js

class Compte {
  constructor(nom_titulaire) {
    this.nom_titulaire = nom_titulaire;
    this.solde = 0
  }

  crediter(montant){
    this.solde += montant; // dans la correction pas de return ici; car on ne veux pas d'affichage ?
  }

  decrire(){
    return `Le compte de ${this.nom_titulaire} a un solde de ${this.solde}€`
  }
}

// const alexC = new Compte("Alex")
// const clovisC = new Compte("CLovis")
// const marcoC = new Compte("Marco")
// console.log (liste_compte)
// console.log (alexC.decrire())
// alexC.crediter(1000)
// console.log (alexC.decrire())

// Version avec les comptes dans un tableau
liste_compte = []

liste_compte.push(new Compte("Alex"))
liste_compte.push(new Compte("CLovis"))
liste_compte.push(new Compte("Marco"))

liste_compte.forEach( c => { 
  c.crediter(1000); 
  console.log(c.decrire());
  });




// ex1 : Chien
// solution corrigé de ex1 : https://github.com/oc-courses/intro-javascript/blob/gh-pages/chapitre9_exercice1.js

// Les chiens mesurant plus de 50 cm aboient en faisant "Grrr ! Grrr !", les autres font "Wouaf ! Wouaf !"

//  doc : https://www.w3schools.com/js/js_object_constructors.asp

// class Chien {
//   constructor(nom, race, taille) {
//   this.nom = nom;
//   this.race = race;
//   this.taille = taille;
//   } 

//   decrire() {
//     return `${this.nom} est de race ${this.race} mesurant ${this.taille}cm`
//   }

//   aboyer() {
//     if (this.taille > 50) {
//         return "Grrr ! Grrr !"
//       }
//     else {
//       return "Wouaf ! Wouaf !"
//       }
//     }
//   }

// const crockdur = new Chien("Crockdur", "mâtin de Naples", 75);

// console.log(crockdur.decrire()); // "Crockdur est un mâtin de Naples mesurant 75 cm"

// console.log(`Tiens, un chat ! ${crockdur.nom} aboie : ${crockdur.aboyer()}`); // "Tiens, un chat ! Crockdur aboie : Grrr ! Grrr !

// const milou = new Chien("Milou", "fox-terrier", 26);

// console.log(milou.decrire()); // "Milou est un fox-terrier mesurant 26 cm"

// console.log(`Tiens, un chat ! ${milou.nom} aboie : ${milou.aboyer()}`); // "Tiens, un chat ! Milou aboie : Wouaf ! Wouaf !"
