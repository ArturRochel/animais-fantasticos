export default function initTabNav() {
    const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
    const tabContent = document.querySelectorAll("[data-tab='content'] section");
    if (tabMenu.length && tabContent.length) {
      activeTab(0);
  
      function activeTab(index) {
        tabContent.forEach((content) => {
          content.classList.remove("active");
        }); 
        const direcao = tabContent[index].dataset.anime
        tabContent[index].classList.add("active", direcao);
      }
  
      tabMenu.forEach((imgMenu, index) => {
        imgMenu.addEventListener("click", () => {
          activeTab(index);
        });
      });
    }
  }
  
