var http = require('http');

/**
 *
 * @param {*} req : requette du visiteur ( cet objet contient toutes les informations sur ce que le visiteur a demandé. On y trouve le nom de la page appelée, les paramètres, les éventuels champs de formulaires remplis)
 * @param {*} res : réponse que vous devez renvoyer ( cet objet qu'il faut remplir pour donner un retour au visiteur. Au final, res contiendra en général le code HTML de la page à renvoyer au visiteur.)
 */
var instructionsNouveauVisiteur = function (req, res) {
  // renvoie le code 200 dans l'en-tête de la réponse
  res.writeHead(200);
  //  termine la réponse avec end()
  res.end('Salut tout le monde !');
};

var server = http.createServer(instructionsNouveauVisiteur);
// serveur est lancé et "écoute" sur le port 8080
server.listen(8080);
