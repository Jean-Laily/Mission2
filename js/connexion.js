import {setCookie} from './cookie.js'
// Gestion des parametres de connexion avec un 2 role possible [1] Admin; [2]Userlambda 

// collection d'objet Array
var userlist = new Array;
userlist[0] = new Array("Romain","afpar",1)
userlist[1] = new Array("Iris","afpar",1)
userlist[2] = new Array("Laily","afpar",1)
userlist[3] = new Array("Afpar", "afpar", 2)

// verification des input lors de la connexion
document.getElementById("formConnexion").onsubmit = function() {
  const id = document.getElementById("id").value;
  const mdp = document.getElementById("mdp").value;
  var connexionOk = false
  for (let i = 0; i < userlist.length; i++) {
    if (id == userlist[i][0] && mdp == userlist[i][1]) {
      setCookie("username",userlist[i][0],2)
      setCookie("role",userlist[i][2],2)
      document.getElementById("id").style.border = "2px solid green"
      document.getElementById("mdp").style.border = "2px solid green"
      connexionOk = true;
    }
  }
  if (connexionOk == false) {
    alert("Identifiant ou mot de passe invalide")
    document.getElementById("id").style.border = "2px solid red"
    document.getElementById("mdp").style.border = "2px solid red"
  }
  return connexionOk;
}