const signUp = document.querySelector(".sign-up-btn");
const crossBtn = document.querySelector("#cross_mark");
// console.log(crossBtn)
// console.log(signUp)

signUp.addEventListener("click", (e) => {
    document.querySelector(".container-form").style.display = "flex";
})

crossBtn.addEventListener("click", (e) => {
    document.querySelector(".container-form").style.display = "none";
})
=======
import {city} from "./javascript/city.js";

let local_containerEl = document.querySelector(".local-container");

 let htmlLocalgrid = city.map((el)=>{
    return `
        <div class="locals-grid">
            <div class="local-box">
                <p>${el.name} <br> <span>${el.places ? el.places + "places" : ""}</span> </p>
                <i class="fa fa-chevron-right"></i>
            </div>
        </div>
        `
}).join("")
// console.log(htmlLocalgrid)
local_containerEl.innerHTML= htmlLocalgrid;
 main
