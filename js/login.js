
const logIn = document.querySelector(".log-in-btn");
const loginCrossBtn = document.querySelector("#login_Cross");
const sendOnePassword = document.querySelector(".btn");
// console.log(sendOnePassword)
// console.log(loginCrossBtn);
// console.log(logIn)

sendOnePassword.addEventListener("click",(e) => {
    alert("Login is sucessfully done.");
    document.querySelector(".login-container").style.display = "none";
})

logIn.addEventListener("click",(e) => {
    document.querySelector(".login-container").style.display = "flex";
})

loginCrossBtn.addEventListener("click",(e) => {
    document.querySelector(".login-container").style.display = "none";
})
