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

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array
const first = comidas.shift()
const last = comidas.pop()

console.log(first)
console.log(last)

comidas.push('Arroz')
comidas.unshift('Peixe', 'Batata')
console.log(comidas)

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
estudantes.sort()
estudantes.reverse()
console.log(estudantes)

if(estudantes.includes('Joana')){
  console.log('Joana é uma das estudantes')
}
if(estudantes.includes('Juliana')){
  console.log('Juliana é uma das estudantes')
} else {
  console.log('Juliana não é uma das estudantes')
}

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
const sectionToUl = html.split('section').join('ul')
const newHtml = sectionToUl.split('div').join('li')

console.log(newHtml)

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carrosOriginais = carros.slice()
carros.pop()
console.log(carros)
console.log(carrosOriginais)