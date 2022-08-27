const botaoMenu = document.querySelector('.menu-hamburg')
const menu = document.querySelector('.navegacao')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('navegacao--ativo')
})