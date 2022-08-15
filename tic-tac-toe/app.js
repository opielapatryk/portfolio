const hash = document.querySelectorAll(".hash");
let counter = 0
hash.forEach(e => {
    e.addEventListener("click", () => {
        if (counter%2 == 0){
            e.innerHTML = "X"
        } else {
            e.innerHTML = "O"
        }
        counter++
        if (counter == 10){
            hash.forEach(e => {
                e.innerHTML = ""
            })
        }
    })
})


