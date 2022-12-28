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