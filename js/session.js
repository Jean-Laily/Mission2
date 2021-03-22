import {getCookie, eraseCookie} from './cookie.js'
// recuperer nom d'utilisateur de l'utilisateur connecté
document.getElementById("username").innerHTML = getCookie("username");

// Modification du contenu en fonction du rôle de l'utilisateur connecté
var role = getCookie("role");
var username = getCookie("username")
if (role == "2") {
  if (!(document.getElementById("modifierclient") == null)) {
    document.getElementById("modifierclient").style.display = "none";
  }
  if (!(document.getElementById("modifiercontact") == null)) {
    document.getElementById("modifiercontact").style.display = "none";
  }
  if (!(document.getElementById("ajoutcontact") == null)) {
    document.getElementById("ajoutcontact").style.display = "none";
  }
  if (!(document.getElementById("ajoutclient") == null)) {
    document.getElementById("ajoutclient").style.display = "none";
  }
  if(!(document.getElementById("addingCl") == null)){
    document.getElementById("addingCl").style.display = "none";
  }
  if(!(document.getElementById("addingCo") == null)){
    document.getElementById("addingCo").style.display = "none";
  }
  if(!(document.getElementById("addingCl2") == null)){
    document.getElementById("addingCl2").style.display = "none";
  }
  if(!(document.getElementById("addingCo2") == null)){
    document.getElementById("addingCo2").style.display = "none";
  }
  if(!(document.getElementById("addingCo3") == null)){
    document.getElementById("addingCo3").style.display = "none";
  }
  if(!(document.getElementById("addingCl3") == null)){
    document.getElementById("addingCl3").style.display = "none";
  }
  
  if(!(document.getElementById("detailsCli") == null)){
    document.getElementById("detailsCli").style.display = "none";
  }
  if(!(document.getElementById("detailsCo") == null)){
    document.getElementById("detailsCo").style.display = "none";
  }

// redirection automatique si aucune donnée trouvée
} else if (role == "" && username == "") {
  window.location.href = "./index.html";
} 

// effacer les cookie en cliquant sur deconnexion
document.getElementById("deconnexion").addEventListener("click", function() {
  eraseCookie("username");
  eraseCookie("role");
});
