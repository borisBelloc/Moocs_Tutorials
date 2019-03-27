// https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript/5871401-creez-vos-premiers-objets
// OBJETS


// Exercices objets : https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript/5871401-creez-vos-premiers-objets#/id/r-5873930

// -----------------------------------------------
// ex3 : Modélisation d'un compte bancaire
// solution corrigé de ex3 : https://github.com/oc-courses/intro-javascript/blob/gh-pages/chapitre6_exercice3.js

const compte = {
  titulaire : "Alex", 
  solde : 0,
  
  crediter (montant){
  this.solde = this.solde += montant
  return this.solde
  },
  // Attention : 
  // on peut simplifier crediter() en mettant simplement :
  // crediter(montant) {
  //   this.solde += montant;
  // },

  decrire(){
    console.log(compte.solde)
  }
}

compte.decrire()
console.log("Initialed............")
compte.crediter(250)
console.log("ADDED 250$............")
compte.decrire()
compte.crediter(-50)
console.log("REMOVED 50$............")
compte.decrire()





// -----------------------------------------------
// // ex2 : Modélisation d'un chien
// const chien = {
//   nom : "Crockdur",
//   race : "Mâtin de Naples",
//   taille : 75,
  
//   aboyer (){
//   return "Grrr ! Grrr !"
// },
// }
// // "Crockdur est un mâtin de Naples mesurant 75 cm"
// console.log(`${chien.nom} est un ${chien.race} mesurant ${chien.taille} cm`);

// // "Tiens, un chat ! Crockdur aboie : Grrr ! Grrr !"
// console.log(`Tiens, un chat ! ${chien.nom} aboie : ${chien.aboyer()}`);

// -----------------------------------------------
// //  ex1 : Ajout de l'expérience du personnage
// const aurora = {
//   nom: "Aurora",
//   sante: 150,
//   force: 25,
//   xp: 0,

//   // Renvoie la description du personnage
//   decrire() {
//     return `${this.nom} a ${this.sante} points de vie et ${this.force} en force et ${this.xp} points d'expérience`;
//   }
// };
// // "Aurora a 150 points de vie, 25 en force et 0 points d'expérience"
// console.log(aurora.decrire());

// console.log("Aurora apprend une nouvelle compétence");
// aurora.xp += 15;

// // "Aurora a 150 points de vie, 25 en force et 15 points d'expérience"
// console.log(aurora.decrire());







// -------------------------------------------------------
//ex0 : creation de 2 objets
// affichage d'une propriété de l'un des objet stocké dans un tableau
// var emp1 = {
//   nom: "Ochon",
//   prenom: "Paul"
// };
// var emp2 = {
//   nom: "Diossy",
//   prenom: "Daisy"
// };
// var employes = [emp1, emp2];
// console.log(employes[1].prenom);

