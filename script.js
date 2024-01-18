// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");
const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);
// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector(".faq");
const firstDt = faq.querySelector("dt");

console.log(firstDt.innerText);
// Selecione o DD referente ao primeiro DT
const firstDd = firstDt.nextElementSibling;
console.log(firstDd.innerText);
// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector(".animais");

faq.innerHTML = animais.innerHTML;

// Crie um novo titulo e adicione após o primeiro titulo de animais
const newTittle = document.createElement("h1");

newTittle.innerText = "Esse será o seu ano!";
newTittle.classList.add("titulo");

animais.appendChild(newTittle);
