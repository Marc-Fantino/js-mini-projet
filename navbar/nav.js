//recupérer L'id de la nav bar
const menuParent = document.getElementById("myTopnav");

//rajouter du contenu dans la div avec la concatenation ES6 et des backQuote AltGr+7

menuParent.innerHTML = 
    `
    <a href="#" class="liens">Accueil</a>
    <a href="#" class="liens">Casse Brique</a>
    <a href="#" class="liens">Jeux du chiffre</a>
    <a href="#" class="liens">Labyrinthe</a>
    <a href="#" class="liens">Contact</a>
    <a href="#" class="icon" onclick="showHideMenu()">
        <i class="fa fa-bars fa-3x"></i>
    </a>
    `
   
    
//Le click du menu burger
function showHideMenu(){
    let open = document.getElementById("myTopnav");
    if(open.className === "topnav"){
        open.className += " responsive";
    }else{
        open.className = "topnav";
    }
}