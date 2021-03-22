// simulation table Contact
import {tableContact} from './table.js'

/**
 * M : Inserer dans un tableau html , un tableau JS
 * O : /
 * I : @param {*} contact le tableau JS
 */
function afficherliste(contact) {
  // Récupération de l'élement
  const elApp = document.getElementsByClassName("tablecontact")[0];
  elApp.innerHTML = "";

  let data = "";
  // Récupération des données
  contact.forEach(c => {
    data += `<tr>
      <td>${c.getNumContact()}</td>
      <td>${c.getNom()}</td>
      <td>${c.getPrenom()}</td>
      <td>${c.getAdresse()}</td>
      <td><a href="DetailsContact.html"><button value="${c.getNumContact()}" class="boutonDetail"><i class="fa fa-search" aria-hidden="true"></i></button> </a></td>
    </tr>`;
  });

  if (data.length > 0) {
      // Affichage des données dans le tableau
      elApp.innerHTML += data;
    } else {
      // Aucune donnée
      elApp.innerHTML += "<p>Aucune ligne trouvée</p>";
    }
}

afficherliste(tableContact);
// rechercher par nom
document.querySelectorAll("input[type=search]")[0].addEventListener("input", function() {
  const filteredData = tableContact.filter(contact => contact.getNom().toLowerCase().includes(this.value.toLowerCase()));
  afficherliste(filteredData);
});
