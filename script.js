// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll(".menu ul li");

itensMenu.forEach((item) => item.classList.add("ativo"));
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
  item === itensMenu[0]
    ? console.log("É o primeiro")
    : item.classList.remove("ativo");
});
// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll("img");

imagens.forEach((img) => {
  img.hasAttribute("alt") ? console.log("Possui") : console.log("Não possui");
});
// Modifique o href do link externo no menu
const firstLink = document.querySelector("a");

firstLink.setAttribute("href", "https://github.com/ArturRochel");
