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
  if(!menu.classList.contains('opened')){
    menu.classList.toggle('opened');
    menu.setAttribute('aria-expanded', 
    menu.classList.contains('opened'))
  }
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  setTimeout(() => {
      menu.style.display = 'none'
      buttons.style.display = 'block'
    }, 1000);
} else{
  menu.style.display = 'none'
      buttons.style.display = 'block'
}
    
    
})

buttons.addEventListener('click',(e)=>{
      menu.style.display = 'block'
      buttons.style.display = 'none'
    
})

