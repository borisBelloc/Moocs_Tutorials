// ex2 : Gestion de l'inventaire des personnages
// solution corrigé de ex2 : https://github.com/oc-courses/intro-javascript/blob/gh-pages/chapitre9_exercice2.js

class Personnage {
  constructor(nom, sante, force, or = 10, key = 1) {
    this.nom = nom;
    this.sante = sante;
    this.force = force;
    this.xp = 0; // Toujours 0 au début

    // inventaire
    // this.or = or;
    // this.key = key;
    // Correction : il est plus judicieux de creer l'inventaire dans un dico :
    this.inventaire = {
      or: 10,
      key: 1
    };

  }
  // Attaque une cibles
  attaquer(cible) {
    if (this.sante > 0) {
      const degats = this.force;
      console.log(`${this.nom} attaque ${cible.nom} et lui inflige ${degats} points de dégâts`);
      cible.sante -= degats;
      if (cible.sante > 0) {
        console.log(`${cible.nom} a encore ${cible.sante} points de vie`);
      }
      else {
        cible.sante = 0;
        const bonusXP = 10;
        console.log(`${this.nom} a tué ${cible.nom} et gagne ${bonusXP} points d'expérience`);
        this.xp += bonusXP;
        console.log(`${this.nom} gagne le butin de ${cible.nom} soit ${cible.or}pièces et ${cible.key}clés`);
        // this.or += cible.or;
        // this.key += cible.key;
        // L'inventaire de la victime est transféré à son vainqueur
        this.inventaire.or += cible.inventaire.or;
        this.inventaire.key += cible.inventaire.key;
      }
    }
    else {
      console.log(`${this.nom} n'a plus de points de vie et ne pas pas attaquer`);
    }
  }
  // Renvoie la description du personnage
  decrire() {
    return `${this.nom} a ${this.sante} points de vie, ${this.force} en force et ${this.xp} points d'expérience.
    [${this.inventaire.or}pièces et ${this.inventaire.key}clés]`;
  }
}

//- -------------------------- Debut print
const aurora = new Personnage("Aurora", 150, 25);


console.log(aurora.decrire());  // "Aurora a 150 points de vie, 25 en force et 0 points d'expérience, 10 pièces d'or et 1 clé(s)"

const monstre = new Personnage("ZogZog", 20, 10);
const monstre2 = new Personnage("2og2og", 20, 10);
monstre.attaquer(aurora);
aurora.attaquer(monstre); // Le monstre est tué
aurora.attaquer(monstre2); // Le monstre est tué


console.log(aurora.decrire()); // "Aurora a 140 points de vie, 25 en force et 10 points d'expérience, 20 pièces d'or et 2 clé(s)"