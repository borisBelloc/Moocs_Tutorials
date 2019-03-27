// https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript/3195501-manipulez-les-chaines-de-caracteres
// Strings
// Exercices strings : https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript/3195501-manipulez-les-chaines-de-caracteres#/id/r-3202731

// -----------------------------------------------
// ex3 : Palindrome
// https://fr.wikipedia.org/wiki/Palindrome
// solution corrigé de ex3 : https://github.com/oc-courses/intro-javascript/blob/gh-pages/chapitre8_exercice3.js


const estPalindrome = (mot) => {
  let mot_generik = mot.toLowerCase();
  reverse_tab = []

  for (let lettre of mot_generik) {
    reverse_tab.unshift(lettre) // met les lettres dans un tableau
  }
  reverse_word_brut = reverse_tab.toString() // transforme le tableau en string
  reverse_word = reverse_word_brut.split(',').join("") // Coupe le mot sur les virgule et le re-lie avec "rien"

  return reverse_word === mot_generik
}


console.log(estPalindrome("RadAr")); // true
console.log(estPalindrome("KAYAk")); // true
console.log(estPalindrome("Bora-Bora")); // false


// -----------------------------------------------
// CORRECTION EXERCICE 3 ::::: ma version est trop compliqué sachant qu'on été pas obligé de passer par un tableau

// Renvoie l'inverse du mot passé en paramètre
const inverser = mot => {
  let motInverse = "";

  // Solution 1 : ajouter chaque lettre au début du mot inversé
  for (const lettre of mot) {
    motInverse = lettre + motInverse;
  }

  // Solution 2 : parcourir le mot de la fin vers le début
  /* for (let i = mot.length - 1; i >= 0; i--) {
    motInverse = motInverse + mot[i].toLowerCase();
  } */
  return motInverse;
};

// Renvoie vrai si le mot est un palindrome, faux sinon
const estPalindrome = mot => {
  // On compare les chaînes en minuscules
  return inverser(mot).toLowerCase() === mot.toLowerCase();
};



// -----------------------------------------------
// ex2 : Leet Speak
// solution corrigé de ex2 : https://github.com/oc-courses/intro-javascript/blob/gh-pages/chapitre8_exercice2.js

// const convertirLettreLeet = (lettre) => {
//   switch (lettre) {
//     case "a":
//       lettre = "4"
//       break;
//     case "b":
//       lettre = "8"
//       break;
//     case "e":
//       lettre = "3"
//       break;
//     case "l":
//       lettre = "1"
//       break;
//     case "o":
//       lettre = "0"
//       break;
//     case "s":
//       lettre = "5"
//       break;
//     default:
//       lettre = lettre
//       break;
//     }
//   return lettre
// }


// const convertirMotLeet = (mot) => {
//   let result = "";
//   let mot_generik = mot.toLowerCase();

//   for (let i = 0; i < mot_generik.length; i++) {
//     result += convertirLettreLeet(mot_generik[i])
//   }
//   return result
// }

// console.log(convertirMotLeet("Hello World!")); // "H3110 W0r1d!"
// console.log(convertirMotLeet("Noob")); // "N008"
// console.log(convertirMotLeet("Hacker")); // "H4ck3r"









// // -----------------------------------------------
// // ex1 : Nombre de voyelles
// // solution corrigé de ex1 : https://github.com/oc-courses/intro-javascript/blob/gh-pages/chapitre8_exercice1.js

// // Complétez le programme en y ajoutant une fonction compterVoyelles() qui prend un mot en paramètre et renvoie son nombre de voyelles.


// // j'utilise une fonction annonyme arrow
// const compterVoyelles = (mot)  => {
//   let mot_generik = mot.toLowerCase();
//   const voyelles = ["a", "e", "i", "o", "u", "y"];
//   let compteur = 0;


//   for (let i = 0; i < mot_generik.length; i++ ){
//   // on peut également utiliser for-of :
//   //  for (const lettre of mot) {

//     if (voyelles.includes(mot_generik[i])){
//       compteur ++
//     }
//   }

// return compteur
// }

// console.log(compterVoyelles("RadAr")); // 2
// console.log(compterVoyelles("Tic et Tac")); // 3
// console.log(compterVoyelles("Oasis Oasis Oh")); // 7