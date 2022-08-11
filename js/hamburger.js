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

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "pink";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
