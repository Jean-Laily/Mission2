// verifie que l'utilisateur a bien saisi tout les input du formulaire
document.getElementById("btnAjouterClient").addEventListener("click",function () {
    if (document.getElementById("numContact").value == "") {
        document.getElementById("numContact").style.border = "1px solid red"
    } 
    if (document.getElementById("NomCt").value == "") {
        document.getElementById("NomCt").style.border = "1px solid red"
    } 
    if (document.getElementById("PrenomCt").value == "") {
        document.getElementById("PrenomCt").style.border = "1px solid red"
    } 
    if (document.getElementById("adresse").value == "") {
        document.getElementById("adresse").style.border = "1px solid red"
    } 
    if (document.getElementById("complement").value !== "") {
        document.getElementById("complement").style.border = "1px solid green"
    }
    if (document.getElementById("matricule").value == "") {
        document.getElementById("matricule").style.border = "1px solid red"
    } 
    if (document.getElementById("codePostCt").value == "") {
        document.getElementById("codePostCt").style.border = "1px solid red"
    } 
    if (document.getElementById("villeCt").value == "") {
        document.getElementById("villeCt").style.border = "1px solid red"
    } 
    if (document.getElementById("telephone").value == "") {
        document.getElementById("telephone").style.border = "1px solid red"
    } 
})
// affiche la date de création du client
document.getElementById("creationData").valueAsDate = new Date()
// verifie que le numero client est valide
document.getElementById("numClient").addEventListener("blur",function() {
    if (this.value == "") {
        this.style.border = "1px solid red"
    } else {
        this.style.border = "1px solid green"
    }
})
// verifie que le nom de societe est valide
document.getElementById("nomSociete").addEventListener("blur",function () {
    if (this.value == "") {
        this.style.border = "1px solid red"
    } else {
        this.style.border = "1px solid green"
    }
})
// verifie que le chiffre d'affaire est valide
document.getElementById("chiffreAffaire").addEventListener("blur",function () {
    var regCA = new RegExp(/[0-9]{0,20}/)
    if (regCA.test(document.getElementById("chiffreAffaire").value)) {
        this.style.border = "1px solid green"
    } else {
        this.style.border = "1px solid red"
    }
})
// verifie que l'adresse est valide
document.getElementById("adresse").addEventListener("blur",function () {
    if (this.value == "") {
        this.style.border = "1px solid red"
    } else {
        this.style.border = "1px solid green"
    }
})
// verifie que le complement est valide
document.getElementById("complement").addEventListener("blur",function () {
    if (this.value !== "") {
        this.style.border = "1px solid green"
    } else {
        this.style.border = "1px solid black"
    }
})
// verifie que le commentaire est valide
document.getElementById("commentaire").addEventListener("blur",function () {
    if (this.value !== "") {
        this.style.border = "1px solid green"
    } else {
        this.style.border = "1px solid black"
    }
})
// verifie que le nom de societe est valide
document.getElementById("raisonSociale").addEventListener("blur",function () {
    if (this.value == "") {
        this.style.border = "1px solid red"
    } else {
        this.style.border = "1px solid green"
    }
})
// verifie que le domaine d'activité est valide
document.getElementById("domaineActivite").addEventListener("blur",function () {
    if (this.value == "") {
        this.style.border = "1px solid red"
    } else {
        this.style.border = "1px solid green"
    }
})
// verifie que le telephone est valide
document.getElementById("telephone").addEventListener("blur",function () {
    var regTel = new RegExp(/[0-9]{10}/)
    if (regTel.test(document.getElementById("telephone").value)) {
        this.style.border = "1px solid green"
    } else {
        this.style.border = "1px solid red"
    }
})