/**
 * M: lire la valeur dans l'input et l'envoie vers le serveur cible 
 * O: @param valueResearch;
 * I: @return NULL
 * */ 
document.getElementsByClassName('zoneAffichageSearch')[0].onsubmit = function () {
  var valueResearch = document.getElementById('valeurRecherche').value;
  // alert(valueResearch);
  return true;
};