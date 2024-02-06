export default function initModal() {
    const openButton = document.querySelector('[data-modal="abrir"]')
    const closeButton = document.querySelector('[data-modal="fechar"]')
    const modalContainer = document.querySelector('[data-modal="container"]')

    if(openButton && closeButton && modalContainer){
    

        function openModal(event){
            event.preventDefault()
            modalContainer.classList.add('ativo')
        }
        
        function closeModal(event){
            event.preventDefault()
            modalContainer.classList.remove('ativo')
        }
        
        function overModal(event){
            if(event.target === this){
                closeModal(event)
            }
        }
        
        function closeEsc(event){
            if(event.key === 'Escape'){
                closeModal(event)
            }
        }
        
        openButton.addEventListener('click', openModal)
        closeButton.addEventListener('click', closeModal)
        modalContainer.addEventListener('click', overModal)
        document.addEventListener('keydown',closeEsc)
        }
}