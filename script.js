// Navegação Imagens Animais
function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  if (tabMenu.length && tabContent.length) {
    activeTab(0);

    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove("active");
      });
      tabContent[index].classList.add("active");
    }

    tabMenu.forEach((imgMenu, index) => {
      imgMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

initTabNav();

// Accordeon List
function initAccordionList() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  if (accordionList.length) {
    accordionList[0].classList.add("active");
    accordionList[0].nextElementSibling.classList.add("active");

    function accordionAnswer() {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("active");
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", accordionAnswer);
    });
  }
}
initAccordionList();

// Scroll Suave Links Internos
function initScrollSmooth() {
  const linksInternos = document.querySelectorAll('a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSmooth();
// Animação ao Scroll
function initAnimationScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  const halfWindow = window.innerHeight * 0.5;
  if (sections.length) {
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - halfWindow < 0;
        if (isSectionVisible) {
          section.classList.add("active");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
initAnimationScroll();

// Retorne um número aleatório
// entre 1050 e 2000

const random = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050
console.log(random)
// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const newNumbers = numeros.split(', ')
const testeNumbers = Number.parseFloat(newNumbers)
console.log(testeNumbers)
// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

                     
listaPrecos.forEach((preco) => {
  const clean = preco.toLowerCase().replace('r$ ', '').trim()
  const toNumber = Number.parseFloat(clean)
  console.log(toNumber)
})