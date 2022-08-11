const menu = document.querySelector('.menu')
const buttons = document.querySelector('.buttons')

menu.addEventListener('mouseenter',(e)=>{
    menu.classList.toggle('opened');
    menu.setAttribute('aria-expanded', 
    menu.classList.contains('opened'))
})
menu.addEventListener('mouseleave',(e)=>{
    menu.classList.toggle('opened');
    menu.setAttribute('aria-expanded', 
    menu.classList.contains('opened'))
})

menu.addEventListener('click',(e)=>{
    menu.style.display = 'none'
    buttons.style.display = 'block'
})

buttons.addEventListener('click',(e)=>{
    menu.style.display = 'block'
    buttons.style.display = 'none'
})
