let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');

let containerPassword = document.querySelector('#container-password');

let charsert = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@";
let newPass = "";

sizePassword.innerHTML = sliderElement.value;
slider.oninput = function () {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    let pass = "";
    for (let i = 0, n = charsert.length; i < sliderElement.value; ++i) {
        pass += charsert.charAt(Math.floor(Math.random() * n))
    }
    containerPassword.classList.remove("hidden");
    password.innerHTML = pass;
    newPass = pass;
}

function copyPassowrd() {
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(newPass);
}