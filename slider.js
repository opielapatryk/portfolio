const section = document.querySelector("#slider")
const img_url = ['1.png', '2.png']

let counter = 0

const changeBackground = ()=>{
    counter >= 1 ? counter = 0 : counter += 1
    section.style.backgroundImage=`url(./${img_url[counter]})`
}
setInterval(changeBackground,2000)