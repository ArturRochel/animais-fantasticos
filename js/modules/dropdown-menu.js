import initOutsideClick from './outsideclick.js'

export default  function initDropDown() {
    const  dropDownMenus = document.querySelectorAll('[data-dropdown]')

function handleClick(event){
    event.preventDefault()
    this.classList.add('ativo')
    outsideClick(this, ['touchstart', 'click'], () => {
        this.classList.remove('ativo')
    })
}

dropDownMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach((userEvent) => {
        menu.addEventListener(userEvent, handleClick)
    })
})
}

