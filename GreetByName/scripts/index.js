"use strict";

window.onload = init;

function init() {
    const greetBtn = document.getElementById ('greetBtn')
    greetBtn.onclick = onHelloBtnClicked;
    
    }
   

    function onHelloBtnClicked() {
     /*( Alejandro = document.getElementById (`Alejandro`))*/
    alert(`Hello ${namefield.value}!`)
    }

