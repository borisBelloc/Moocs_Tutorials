/* 
MOOC : Apprenez à coder avec JavaScript
https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript
Activité 1/2 : jeu de devinette - 2019/01
BELLOC Boris
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO
console.log("Bienvenue dans ce jeu de devinette !");
console.log("Le but est de trouver le nombre mystère entre 1 et 100.");
console.log("Vous avez 6 tentatives");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
// console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
for (let life = 5; life >= 0; life--) { // Le joueur possede 6 tentatives

    let choix = prompt("Quel est votre choix ? ");

    if (choix != solution) {
        if (choix > solution) {
            console.log("Plus petit !");
        }
        else if (choix < solution) {
            console.log("Plus grand !");
        }
        else {
            console.log("erreur, on n'est pas cencé passer ici; avez-vous bien entré un nombre ? En tous cas, vous perdez une tentative ! ");
        }
    }
    else {
        console.log("Bravo vous avez gagné; il vous restait " + life + " tentative(s)");
        break // on arrette le jeu en cas de victoire !
    }
    if (life === 0) {
        console.log("Dommage, vous avez perdu: le nombre mystère est : " + solution);
    }
}

