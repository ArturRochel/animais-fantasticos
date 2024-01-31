export default function initModal() {
    console.log('Teste init modal')
}

console.log('teste init modal')
const openButton = document.querySelector('[data-modal="abrir"]')
const closeButton = document.querySelector('[data-modal="fechar"]')
const containerModal = document.querySelector('[data-moda="container"]')

if(openButton && closeButton && containerModal){
    function openModal(event) {
        event.preventDefault()
        containerModal.classList.add('ativo')
        console.log(event)
    }
    
    function closeModal(event) {
        event.preventDefault()
         containerModal.classList.remove('ativo')
    }
    
    function overModal(event) {
        if(event.target === this){
            closeModal(event)
        }
    }
    
    openButton.addEventListener('click', openModal)
    closeButton.addEventListener('click', closeModal)
    containerModal.addEventListener('click', overModal) 
}

console.log(openButton, closeButton, containerModal)