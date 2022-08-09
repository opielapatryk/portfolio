const btnLeft = document.querySelector(".btn-left")
const btnRight = document.querySelector(".btn-right")
const section = document.querySelector("#slider")
const img_url = ['1.png', '2.png']
const pagination =  document.querySelector('.pagination')
const animation =  document.querySelector('.animation')

let counter = 0
btnRight.addEventListener('click',()=>{
    counter >= 2 ? counter = 0 : counter += 1
    section.style.backgroundImage=`url(./${img_url[counter]})`
})
btnLeft.addEventListener('click',()=>{
    counter <= 0 ? counter = 2 : counter -= 1
    section.style.backgroundImage=`url(./${img_url[counter]})`
})
pagination.firstElementChild.addEventListener('click', ()=>{
    section.style.backgroundImage=`url(./${img_url[0]})`
    counter = 0
})
pagination.firstElementChild.nextSibling.nextSibling.addEventListener('click', ()=>{
    section.style.backgroundImage=`url(./${img_url[1]})`
    counter = 1
})
pagination.firstElementChild.nextSibling.nextSibling.nextSibling.nextSibling.addEventListener('click', ()=>{
    section.style.backgroundImage=`url(./${img_url[2]})`
    counter = 2
})
const changeBackground = ()=>{
    counter >= 2 ? counter = 0 : counter += 1
    section.style.backgroundImage=`url(./${img_url[counter]})`
}
// const start = () => intervalID = 
setInterval(changeBackground,2000)
const stop = () => clearInterval(intervalID)

animation.firstElementChild.addEventListener('click', start)
animation.firstElementChild.nextSibling.nextSibling.addEventListener('click',stop)

