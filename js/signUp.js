const signUp = document.querySelector(".sign-up-btn");
const crossBtn = document.querySelector("#cross_mark");
const btnCreateAcc = document.querySelector(".account");
// console.log(btnCreateAcc)
// console.log(crossBtn)
// console.log(signUp)

signUp.addEventListener("click", (e) => {
    document.querySelector(".container-form").style.display = "flex";
})

crossBtn.addEventListener("click", (e) => {
    document.querySelector(".container-form").style.display = "none";
})

btnCreateAcc.addEventListener("click", (e) => {
    alert("Sign Up is sucessfully done");
    document.querySelector(".container-form").style.display = "none";
})