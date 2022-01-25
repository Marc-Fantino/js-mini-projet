/* exercice 1
let taille = 30;
let majeur = true;
let description = "Une feuille s'envole";
let outil = null;
let ticket;

console.log (taille + " " + majeur +" " +  description +" " + outil + " " + ticket)

let tailleBase = 10;
let taille = 5 + tailleBase;
taille *= 2;
console.log(tailleBase + taille)
// resultat = 40

let prenom1 = "Jean";
let prenom2 = "Paul";
let age1 = 30;
let age2 = 20;
let resultat = `${prenom1} a ${age1 - age2} ans de différence avec ${prenom2}`;

console.log (resultat)
*/
function FindNumber() {

    //generer un chiffre entre 0 et 9 et l'arrondire
    let randNumber = Math.round(Math.random()* 10);

    // declancher la fenetre modal avec une imput pour que le user entre son chiffre 
    let reponse = prompt("Entrer votre chiffre entre 1 et 10");
    // trasnforme input type String en entier Integer = Number
    // 1 er param =chain caractere + base mathématique=10
    reponse = parseInt(reponse, 10);
    let essais = 1;

    // si la réponse de l'utilisateur est différente de la bonne réponse que el nombre d'essais est > 0
    while(reponse != randNumber && essais > 0){
    // on décrémente l'essai
    essais--;
    //les conditions de réponse 
    // si la réponse de l'utilisateur est sup à randNumber = plus bas
    if(reponse > randNumber){
        alert("plus bas");
    }else{
        alert("plus haut");
    }
    if(essais > 0){
        reponse = prompt("Reesayer ? Nombre d'essais " + essais);
    }
    console.log(randNumber);
    }

    if (reponse == randNumber){
        alert("Bravo, la reponse était " + randNumber)
    }
    else{
        alert('tu es trop nul la réponse était'+" " + randNumber); 
    }
}