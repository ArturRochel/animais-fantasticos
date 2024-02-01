export default function initScrollSmooth() {
    const linksInternos = document.querySelectorAll('a[href^="#"]');
  
    function scrollToSection(event) {
      event.preventDefault();
      const href = this.getAttribute("href");
      const section = document.querySelector(href);
      
      if(section !== null){
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  
    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }