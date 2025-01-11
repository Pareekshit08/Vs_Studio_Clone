const s = document.body;
const a = s.style.background;
s.style.background = s.style.background;
var bg = document.getElementById("th");
function ChangeBackground(){
const v = document.body;
if(v.style.background == a){
    v.style.background = "#fbfcfc"    ;
    v.style.color = "black";
    bg.innerText="Dark";
    let b = document.getElementsByClassName("cardrow")[0];
    let k = document.getElementsByClassName("container4")[0];
    let f = document.getElementsByTagName("footer")[0];
    let c = document.getElementsByClassName("container2")[0];
    c.style.color="white";
    f.style.color="white";
    b.style.color = "white";
    k.style.color = "white";
}else{
    bg.innerText="Light";
    v.style.background = a;
    v.style.color = "white";
    let b = document.getElementsByClassName("cardrow")[0];
    b.style.color = "white";
}
}