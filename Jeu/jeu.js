let nb1 = document.querySelector(".nb1");
/*.querySelector = sélectionne un élément dans un document mais ne s'arrêtera qu'au 1er trouvé. Pour tous les avoir -> "Document.querySelectorAll"*/
let nb2 = document.querySelector(".nb2")
let score = document.querySelector(".score")
let message = document.querySelector(".message")
let link = document.querySelector(".link")
let op = document.querySelector(".op")
let section=document.querySelector("section")
let compteur = 0;

//timer
const departMinutes = 1
let temps = departMinutes * 60

const timerElement = document.getElementById("timer")

setInterval(() => {
  let minutes = parseInt(temps / 60, 10)
  let secondes = parseInt(temps % 60, 10)

  minutes = minutes < 10 ? "0" + minutes : minutes
  secondes = secondes < 10 ? "0" + secondes : secondes

  timerElement.innerText = `${minutes}:${secondes}`
  temps = temps <= 0 ? 0 : temps - 1
}, 1000)


//obtenir un nombre aléatoire dans un intervalle : tjrs mettre le "random1=" 

random1 = Math.random()*11 << 0; /*générer 1 nb au pif entre 0 et 50*/
random2 = Math.random()*11 << 0;
console.log(random1) /*afficher le nombre dans la console*/
console.log(random2)
//Insérer les nb aléatoirement ds les variables nb1 et nb2 
nb1.innerHTML = random1;
nb2.innerHTML = random2;




//fonction de vérification
function verifier(){
  //récupérer le résultat entré par l'utilisateur :
  let rep = document.querySelector (".rep").value ;
  if(random1 + random2 == rep){
    message.style.background="green"
    message.innerHTML = "RRRAAYEEE"
    //autres nb aléatoires
        random1 = Math.random()*11 << 0; 
        random2 = Math.random()*11 << 0;
        console.log(random1) 
        console.log(random2)
        nb1.innerHTML = random1;
        nb2.innerHTML = random2;
        compteur = compteur + 1
}
 
  else{
    message.style.background="red"
    message.innerHTML = "Eh non "
    section.innerHTML=" ";
    score.innerHTML = `score : </br><span>${compteur}</span>`
  }
}
