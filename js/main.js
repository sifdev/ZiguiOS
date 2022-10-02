const yellow_btn = document.getElementById("yellow_btn")
const red_btn = document.getElementById("red_btn")
const green_btn = document.getElementById("green_btn")
const body = document.getElementById("body")
const default_btn = document.getElementById("default")
const start_btn = document.getElementById("win_start")
const home = document.getElementById("home")
home.style.visibility="hidden";
green_btn.onclick = function(){
 body.style.backgroundColor="Green";
};
red_btn.onclick = function(){
    body.style.backgroundColor="Red";
};
default_btn.onclick = function(){
    body.style.backgroundColor="Aqua";
}


yellow_btn.onclick = function(){
    body.style.backgroundColor="Yellow";
};
start_btn.onclick = function(){

home.style.visibility="visible";

}
