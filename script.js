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

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let valueTax = 0
let valueReci = 0

transacoes.forEach((item) => {
  const clearNumber = +item.valor.replace('R$ ', '')
  if(item.descricao.slice(0, 4) === 'Taxa'){
    valueTax += clearNumber
  } else if(item.descricao.slice(0, 4) === 'Rece'){
    valueReci += clearNumber
  }
})

console.log(`Esse é o valor total de taxa: R$ ${valueTax}`)
console.log(`Esse é o valor total de recebimentos: R$ ${valueReci}`)
// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const transportesArray = transportes.split(';')
console.log(transportesArray)
// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
const htmlAs = html.split('span')
const htmlNovo = htmlAs.join('section')
// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
const oUltimo = frase[frase.length - 1]
console.log(oUltimo)
// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totalTaxas = 0
let outrasTaxas = 0
transacoes2.forEach((item) => {
  const fraseLimpa = item.toLowerCase()
  if(fraseLimpa.includes('taxa')){
    totalTaxas += 1
  } else {
    outrasTaxas += 1
  }
})

console.log(totalTaxas)
console.log(outrasTaxas)