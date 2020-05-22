var http = require('http');

// Permet de récupérer la page demandée par le visiteur
var url = require('url');

// Permet de récupérer les parametre dans l'url
var querystring = require('querystring');

/**
 *
 * @param {*} req : requette du visiteur ( cet objet contient toutes les informations sur ce que le visiteur a demandé. On y trouve le nom de la page appelée, les paramètres, les éventuels champs de formulaires remplis)
 * @param {*} res : réponse que vous devez renvoyer ( cet objet qu'il faut remplir pour donner un retour au visiteur. Au final, res contiendra en général le code HTML de la page à renvoyer au visiteur.)
 */
var instructionsNouveauVisiteur = function (req, res) {
  // * Creer un tableau de paramètres
  // http://localhost:8080/page?prenom=Robert
  // pour recup : params['prenom']
  var params = querystring.parse(url.parse(req.url).query);

  var page = url.parse(req.url).pathname;
  console.log(page);

  // renvoie le code 200 dans l'en-tête de la réponse ainsi que le type MIME de la réponse
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // * EXO 1 : Simple routage
  if (page == '/') {
    res.write("Vous êtes à l'accueil, que puis-je pour vous ?");
  } else if (page == '/sous-sol') {
    res.write('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
  } else if (page == '/etage/1/chambre') {
    res.write("Hé ho, c'est privé ici !");
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('Page 404');
  }

  // * EXO 2 : Recuperation parametre
  // http://localhost:8080?prenom=Robert&nom=Dupont
  if ('prenom' in params && 'nom' in params) {
    res.write('<br>Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
  } else {
    res.write('<br> Vous devez bien avoir un prénom et un nom, non ?');
  }





  //  termine la réponse avec end()
  res.end();
};

var server = http.createServer(instructionsNouveauVisiteur);
// serveur est lancé et "écoute" sur le port 8080
server.listen(8080);
