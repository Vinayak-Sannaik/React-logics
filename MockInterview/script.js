const nameElement = document.querySelector("#name");
const ageElement = document.querySelector("#age");
const emailElement = document.querySelector("#email");
const passwordElement = document.querySelector("#password");

const btnEl = document.querySelector(".btn");

const userInputsEl = document.querySelector(".user-inputs");

btnEl.addEventListener("click", (event)=>{
    event.preventDefault();

    const name = nameElement.value;
    const h2 = document.createElement("h1");
    console.log(h2)
    h2.innerText = name;
    userInputsEl.appendChild(h2);

});