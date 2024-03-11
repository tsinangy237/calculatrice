//const info = document.querySelector(".infos");
const allBtns = document.querySelectorAll('input[type="button"]');
function val(resultat) {
  form.fenetre.value = form.fenetre.value + resultat;
}

function calcule() {
  if (form.fenetre.value == "") {//verifie si la valeur dans la fenetre form est une chaine de caractere c
   info.innerText = "veuillez ecrire un chiffre";
    //ajouter le gestionnaire d'evenement clicks à chaque bouton
    allBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        info.innerText = "";
      });
    });
    
  } //else {
    form.fenetre.value = eval(form.fenetre.value);// si la valeur a l'interieur de la fenetre n'est pas une chaine vide alors on execute le code
  }


function supprimer() {
  form.fenetre.value = "";
}
