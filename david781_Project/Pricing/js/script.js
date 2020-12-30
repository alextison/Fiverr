/*Fonction qui affiche le prix par mois initialement 
Et qui affiche le prix à l'année quand on clique
Une fois sur le bouton bleu central*/

/*Function that displays the price per month initially
And which displays the price per year when you click
Once on the central blue button*/

function price() {
    let boxOne = document.getElementById("myCheckOne");
    let boxTwo = document.getElementById("myCheckTwo");
    if (boxOne.checked == true){
        startVf.innerHTML = ("71.88");
        premiumVf.innerHTML = ("119.88");
    }
    else {
        startVf.innerHTML = ("5.99");
        premiumVf.innerHTML = ("9.99");
    }
    if (boxTwo.checked == true){
        startVo.innerHTML = ("71.88");
        premiumVo.innerHTML = ("119.88");
    }
    else{
        startVo.innerHTML = ("5.99");
        premiumVo.innerHTML = ("9.99");
    }
}



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
    if (userLang == "fr" || userLang == "fr-FR"){
        vfPlacement.style.display = "block";
        voPlacement.style.display = "none";
	document.title = 'ChefProg - Prix';
    }
        else {
            vfPlacement.style.display = "none";
            voPlacement.style.display = "block";
	    document.title = 'ChefProg - Pricing';
        }
});