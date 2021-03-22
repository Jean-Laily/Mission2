// verifie que l'utilisateur a bien saisi tout les input du formulaire
document.getElementById("btnAjouterContact").addEventListener("click",function () {
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
// affiche la date de création du contact
document.getElementById("creerLe").valueAsDate = new Date()


// verifie que le code Postal saisi est valide
document.getElementById("codePostCt").addEventListener("blur",function() {
    var regCP = new RegExp(/[0-9]{5}/);
    if (regCP.test(document.getElementById("codePostCt").value)) {
        document.getElementById("codePostCt").style.border = "1px solid green"
    } else {
        document.getElementById("codePostCt").style.border = "1px solid red"
    }
})

// verifie que numContact est valide
document.getElementById("numContact").addEventListener("blur",function () {
    if (this.value == "") {
        this.style.border = "1px solid red"
    } else {
        this.style.border = "1px solid green"
    }
})

// verifie que NomCt est valide
document.getElementById("NomCt").addEventListener("blur",function () {
    if (this.value == "") {
        this.style.border = "1px solid red"
    } else {
        this.style.border = "1px solid green"
    }
})

// verifie que PrenomCt est valide
document.getElementById("PrenomCt").addEventListener("blur",function () {
    if (this.value == "") {
        this.style.border = "1px solid red"
    } else {
        this.style.border = "1px solid green"
    }
})

// verifie que adresse est valide
document.getElementById("adresse").addEventListener("blur",function () {
    if (this.value == "") {
        this.style.border = "1px solid red"
    } else {
        this.style.border = "1px solid green"
    }
})

// verifie que complement est valide
document.getElementById("complement").addEventListener("blur",function () {
    if (this.value !== "") {
        this.style.border = "1px solid green"
    } else {
        this.style.border = "1px solid black"
    }
})

// verifie que le matricule est valide
document.getElementById("matricule").addEventListener("blur",function () {
    if (this.value == "") {
        this.style.border = "1px solid red"
    } else {
        this.style.border = "1px solid green"
    }
})

// verifie que la ville est valide
document.getElementById("villeCt").addEventListener("blur",function () {
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
