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
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

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
function animationScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowTarget = window.innerHeight * 0.5;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowTarget < 0;
        if (isSectionVisible) {
          section.classList.add("active");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}

animationScroll();
