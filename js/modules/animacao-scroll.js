export default function initAnimationScroll() {
    const sections = document.querySelectorAll("[data-anime='scroll']");
    const halfWindow = window.innerHeight * 0.5;
    if (sections.length) {
      function animaScroll() {
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const isSectionVisible = sectionTop - halfWindow < 0;
          if (isSectionVisible) {
            section.classList.add("active");
          }
          else if(section.classList.contains("active")){
            section.classList.remove('active')
          }
        });
      }
  
      animaScroll();
  
      window.addEventListener("scroll", animaScroll);
    }
  }