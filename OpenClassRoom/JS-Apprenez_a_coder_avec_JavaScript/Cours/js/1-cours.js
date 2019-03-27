// Cours OCR : Apprenez à coder avec JavaScript
// https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript/3079821-modularisez-votre-code-grace-aux-fonctions

// Imprimer une variable dans un string
// Soit on divise le string, soit on indique la variable avec ${}

function direBonjour(prenom) {
  // Attention, premier cas ne fonctionne qu'avec ces guillement ! ``
  const message = `Bonjour, ${prenom} !`;

  // const message = 'Bonjour ' + prenom + ' !';
  return message;
}

console.log(direBonjour("Baptiste"));
console.log(direBonjour("Sophie")); 
// -------------------------------
// ---------------------------------



// ex1 ----> CONDITION classique 
// let choix = prompt("Choisissez un nombre : ")
// if (choix == 0) {
//   console.log("votre choix, " + choix + " vaut 0");
// }
// else if (0 < choix && choix < 5) {
//   console.log("votre choix est compris entre 0 et 5");
// }
// else {
//   console.log("votre choix est supérieur a 4");
// }

// ex2 ----> SWITCH structure
// https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript/3043921-ajoutez-des-conditions#/id/r-3060757
// Lorsqu'un programme consiste à déclencher un bloc d'opérations parmi plusieurs selon la valeur d'une expression,
// on peut l'écrire en utilisant l'instruction JavaScript switch.

// Il n'y a pas de limite au nombre de cas possibles.
// Le mot-clé default, à placer en fin deswitch, est optionnel.
// Il sert souvent à gérer les cas d'erreurs, comme dans l'exemple ci-dessous.

// let meteo = prompt("Quel temps fait-il dehors ?");
// switch (meteo) {
//   case "soleil":
//     console.log("Sortez en t-shirt.");
//     break;
//   case "vent":
//     console.log("Sortez en pull.");
//     break;
//   case "pluie":
//     console.log("Sortez en blouson.");
//     break;
//   case "neige":
//     console.log("Restez au chaud à la maison.");
//     break;
//   default:
//     console.log("Je n'ai pas compris !");
// }

// ex3 ----> exercice SWITCH
// https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript/3043921-ajoutez-des-conditions#/id/r-3262892
// Jour suivant

// let jour = prompt("quel jour sommes-nous ?");
// switch (jour) {
//   case "lundi":
//     console.log("Demain nous serons mardi");
//     break;
//   case "mardi":
//     console.log("Demain nous serons mercredi");
//     break;
//   case "mercredi":
//     console.log("Demain nous serons jeudi");
//     break;
//   case "jeudi":
//     console.log("Demain nous serons vendredi");
//     break;
//   case "vendredi":
//     console.log("Demain nous serons samedi");
//     break;
//   case "samedi":
//     console.log("Demain nous serons dimanche");
//     break;
//   case "dimanche":
//     console.log("Demain nous serons lundi");
//     break;
//   default:
//     console.log("Il semblerait que vous ayez indiqué un jour qui n'existe pas");
//     break;
// }