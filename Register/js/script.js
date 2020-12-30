/*Fonction qui récupére le langage du navigateur et qui
Affiche une page en Français si le langage du navigateur est FR
Sinon affiche la page originale (en Anglais)*/

/*Function which retrieves the browser language and which
Displays a page in French if the browser language is FR
Otherwise display the original page (in English)*/

document.addEventListener("DOMContentLoaded", function(event) { 
    let userLang = navigator.language;
    let vfPlacement = document.getElementById("frenchVersion");
    let voPlacement = document.getElementById("originalVersion");
    if (userLang == "fr"){
        vfPlacement.style.display = "block";
        voPlacement.style.display = "none";
        document.title = 'ChefProg - Accueil';
    }
        else {
            vfPlacement.style.display = "none";
            voPlacement.style.display = "block";
            document.title = 'ChefProg - Home';
        }
});