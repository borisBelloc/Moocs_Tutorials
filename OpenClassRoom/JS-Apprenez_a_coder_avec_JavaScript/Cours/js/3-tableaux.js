// https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript/5871661-stockez-vos-donnees-dans-des-tableaux
// Tableaux


// Exercices tableaux : https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript/5871661-stockez-vos-donnees-dans-des-tableaux#/id/r-5877512

// -----------------------------------------------
// ex3 : Maximum des valeurs
// solution corrigé de ex3 : https://github.com/oc-courses/intro-javascript/blob/gh-pages/chapitre7_exercice3.js

const valeurs = [3, 11, 7, 2, 9, 10];

// CORRECTION : On initialise la maximum avec le 1er élément du tableau !! et non pas a 0
let comp = valeurs[0]

// CORECTION : On commence la recherche au second élément car on a init sur l'elem 0 !!
for (let i = 1; i < valeurs.length; i++){
  if (valeurs[i] > comp){
    comp = valeurs[i]
  }
}

console.log(comp)



// -----------------------------------------------
// ex2 : Somme des valeurs
// solution corrigé de ex2 : https://github.com/oc-courses/intro-javascript/blob/gh-pages/chapitre7_exercice2.js

// ATTENTION : si la variable a modifier : "total" est définie via CONST, alors on aura une erreur lors de la tentative de modification !
// const nombres = [11, 3, 7, 2, 9, 10];
// let total = 0
// for (let indi of nombres) {
//   total += indi
// }
// console.log(total)



// -----------------------------------------------
// ex1 : Mousquetaires
// solution corrigé de ex1 : https://github.com/oc-courses/intro-javascript/blob/gh-pages/chapitre7_exercice1.js

// const mousquetaires = ["Athos", "Porthos", "Aramis"]

// console.log("--------- Boucle For")
// for (let i = 0; i < mousquetaires.length; i++) {
//   console.log(mousquetaires[i])
// }

// mousquetaires.push("d'Artagnan")

// console.log("--------- ForEach")
// mousquetaires.forEach(mousquetaire => {
//   console.log(mousquetaire)
// });

// mousquetaires.splice(2, 1);

// console.log("--------- For-of")
// for (const i of mousquetaires) {
//   console.log(i)
//   }