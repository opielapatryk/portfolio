const darkmode = document.querySelector('.dark-mode')
const body = document.querySelector('body')
const nav = document.querySelector('nav')
const ul = document.querySelector('ul')
document.addEventListener('DOMContentLoaded', ()=>{
    if(localStorage.getItem('mode') == 'light'){
            nav.style.boxShadow = '#b9d0ff 0 0 20px 5px'
            nav.style.background = 'linear-gradient(to right, rgb(0, 115, 255), green)'
            body.style.background = '#fff'
            darkmode.innerHTML = 'Dark Mode'
        } else {
            nav.style.boxShadow = '#06193e 0 0 100px 5px'
            nav.style.background = 'linear-gradient(to right, rgb(0, 43, 95), rgb(0, 71, 0))'
            body.style.background = '#eaedf2'
            darkmode.innerHTML = 'Light Mode'
        }
})

darkmode.addEventListener('click',()=>{
    if(localStorage.getItem('mode') == 'light'){
        localStorage.setItem('mode', 'dark')
        window.location.reload()
    } else {
        localStorage.setItem('mode', 'light')
         window.location.reload()
    }
})