export class Contact {
    constructor(numContact, nom, prenom, matricule, adresse, complement, codepostal, ville, telephone) {
        var numContact = numContact;
        var nom = nom;
        var prenom = prenom;
        var matricule = matricule;
        var adresse = adresse;
        var complement = complement;
        var codepostal = codepostal;
        var ville = ville;
        var telephone = telephone;

        this.getNumContact = function () {
            return numContact
        }
        this.getNom = function () {
            return nom
        }
        this.getPrenom = function () {
            return prenom
        }
        this.getMatricule = function () {
            return matricule
        }
        this.getAdresse = function () {
            return adresse
        }
        this.getComplement = function () {
            return complement;
        }
        this.getCodePostal = function () {
            return codepostal
        }
        this.getVille = function () {
            return ville
        }
        this.getTelephone = function () {
            return telephone
        }
    }

}