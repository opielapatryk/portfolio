const img_url = ['../images/1.png', '../images/2.png']
const img = document.querySelectorAll('.slider')
function chngimg() {       
    img.forEach(e=>{
        e.classList.toggle('hidden')
    })
}
setInterval(chngimg,3000)