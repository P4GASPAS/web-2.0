let btn1 = document.querySelector("#btnradio1");
let btn2 = document.querySelector("#btnradio2");
let btn3 = document.querySelector("#btnradio3");
let btn4 = document.querySelector("#btnradio4");
let btn5 = document.querySelector("#btnradio5");
let btn6 = document.querySelector("#btnradio6");

let home = document.querySelector("#home");
let app = document.querySelector("#app");
let logs = document.querySelector("#logs");
let feed = document.querySelector("#feed");
let cont = document.querySelector("#cont");
let prof = document.querySelector("#prof");

const btngrp = document.querySelector(".btn-group");

btngrp.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === "INPUT";
    if(!isButton) {
        return;
    }
    
    switch(event.target.id) {

        case "btnradio1":

            home.classList.remove("d-none");
            home.classList.add("d-block");

            app.classList.remove("d-block");
            app.classList.add("d-none");

            logs.classList.remove("d-block");
            logs.classList.add("d-none");

            feed.classList.remove("d-block");
            feed.classList.add("d-none");

            cont.classList.remove("d-block");
            cont.classList.add("d-none");

            prof.classList.remove("d-block");
            prof.classList.add("d-none");

            break;

        case "btnradio2":

            home.classList.remove("d-block");
            home.classList.add("d-none");
            
            app.classList.remove("d-none");
            app.classList.add("d-block");

            logs.classList.remove("d-block");
            logs.classList.add("d-none");

            feed.classList.remove("d-block");
            feed.classList.add("d-none");

            cont.classList.remove("d-block");
            cont.classList.add("d-none");

            prof.classList.remove("d-block");
            prof.classList.add("d-none");

            break;

        case "btnradio3":
            
            home.classList.remove("d-block");
            home.classList.add("d-none");
            
            app.classList.remove("d-block");
            app.classList.add("d-none");
            
            logs.classList.remove("d-none");
            logs.classList.add("d-block");

            feed.classList.remove("d-block");
            feed.classList.add("d-none");

            cont.classList.remove("d-block");
            cont.classList.add("d-none");

            prof.classList.remove("d-block");
            prof.classList.add("d-none");

            break;
        
        case "btnradio4":
            
            home.classList.remove("d-block");
            home.classList.add("d-none");
            
            app.classList.remove("d-block");
            app.classList.add("d-none");
            
            logs.classList.remove("d-block");
            logs.classList.add("d-none");
            
            feed.classList.remove("d-none");
            feed.classList.add("d-block");

            cont.classList.remove("d-block");
            cont.classList.add("d-none");

            prof.classList.remove("d-block");
            prof.classList.add("d-none");

            break;
        
        case "btnradio5":
            
            home.classList.remove("d-block");
            home.classList.add("d-none");
            
            app.classList.remove("d-block");
            app.classList.add("d-none");
            
            logs.classList.remove("d-block");
            logs.classList.add("d-none");
            
            feed.classList.remove("d-block");
            feed.classList.add("d-none");
            
            cont.classList.remove("d-none");
            cont.classList.add("d-block");

            prof.classList.remove("d-block");
            prof.classList.add("d-none");

            break;

        case "btnradio6":
            
            home.classList.remove("d-block");
            home.classList.add("d-none");
            
            app.classList.remove("d-block");
            app.classList.add("d-none");
            
            logs.classList.remove("d-block");
            logs.classList.add("d-none");
            
            feed.classList.remove("d-block");
            feed.classList.add("d-none");
            
            cont.classList.remove("d-block");
            cont.classList.add("d-none");
            
            prof.classList.remove("d-none");
            prof.classList.add("d-block");

            break;

    }
})