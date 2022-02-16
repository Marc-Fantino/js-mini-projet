let header1 = document.getElementById("header1");
let ecris1 = document.getElementsByClassName("ecris1");



header1.style.backgroundColor = "black";
header1.style.justifyContent ="center";
header1.style.display ="flex";
header1.style.width ="60%";
header1.style.marginLeft = "300px";
header1.style.paddingTop = "40px";

for(bloc of ecris1){
    bloc.style.color = "blue";
    bloc.style.fontSize = "60px";
}