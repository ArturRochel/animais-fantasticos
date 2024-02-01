export default function initModal() {
   const openButton = document.querySelector('[data-modal="abrir"]')
   const closeButton = document.querySelector('[data-modal="fechar"]')
   const containerModal = document.querySelector('[data-modal="container"]')

   if(openButton && closeButton && containerModal){

        function openModal(event){
            event.preventDefault()
            containerModal.classList.add('ativo')
        }

        function closeModal(event){
            if(event.target === this){
                event.preventDefault()
                containerModal.classList.remove('ativo')
            }
        }

        openButton.addEventListener('click', openModal)
        closeButton.addEventListener('click', closeModal)
        containerModal.addEventListener('click', closeModal)
   }
}