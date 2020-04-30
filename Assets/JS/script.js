//on déclare la fonction du calcul quand on l'appelle
function clickFunction(){
  //on déclare la variable du nombre 1 et on lui attribue une valeur, valeur de l'élément dont l'id est numberOne
  var numberOne = document.getElementById('numberOne').value;
  //on déclare la variable du nombres 2 et on lui attribue une valeur, valeur de l'élément dont l'id est numberTwo
  var numberTwo = document.getElementById('numberTwo').value;
  // on va vérifier grâce à une condition si notre variable nombre 2 est égal à zéro, alors on affichera un message d'erreur ; sinon on fait le calcul et on affiche de résultat du calcul
  if (numberTwo == 0) {
    alert('calcul impossible, on ne divise pas par zéro');
  } else {
    var result = numberOne % numberTwo;
    alert('Nombre 1 :' + numberOne + '\nNombre 2 :' +  numberTwo + '\nRésultat :' + result);
  }
}
