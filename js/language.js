const english = document.querySelector('.english')
const projekty = document.querySelector('.aliprojekty')
const wtrakcie = document.querySelector('.aliwtrakcie')
const dos = document.querySelector('.alidoswiadczenie')
const omnie = document.querySelector('.aliomnie')
const cele = document.querySelector('.alimojecele')
const ukonczoneprojekty = document.querySelector('#projekty').children[0]
const projektywtrakcie = document.querySelector('#wtrakcie').children[0]
const doswiadczenie =document.querySelector('#doswiadczenie')
const omniee = document.querySelector('#omnie')
const dalszecele = document.querySelector('#mojecele')
document.addEventListener('DOMContentLoaded', ()=>{
    if(localStorage.getItem('language') == 'english'){
            projekty.innerHTML = '<li>Projects</li>'
            wtrakcie.innerHTML = '<li>In progress</li>'
            dos.innerHTML = '<li>Expirience</li>'
            omnie.innerHTML = '<li>About me</li>'
            cele.innerHTML = '<li>Goals</li>'
            english.textContent = 'Polski'
            ukonczoneprojekty.textContent = 'Finished projects'
            projektywtrakcie.textContent = 'Projects in progress'
            doswiadczenie.innerHTML = `<h4 style="letter-spacing: .1em;">Expirience</h4>Track my programming adventure on my github<br>
            <a href="https://github.com/opielapatryk" target="_blank">github.com</a>`
            omniee.innerHTML = `<h4 style="letter-spacing: .1em;">About me</h4>
            <p>
                Hi! <br>
                My name is Patryk. I am young person with brain full of creativity and a lot of ideas. I love solving problems and creating new things, that is why I am into programming. I was studing in IT high school. <br> I choosed more creative path of learing, (that is learing on my own hand in home) rather than going to university, because I am person who know the best where are my looses and what I have to learn to be better programmer. <br> Due to perfect discipline I am able to keep on track to reach all of my goals. <br> Schools in Poland don't teatch important things. Knowledge is outdated and leaves much to be desire. Knowledge from universities does not match the current market needs and I am sure that I will learn a lot more on my own.<br> 
            </p>`
            dalszecele.innerHTML = `<h4 style="letter-spacing: .1em;">Future goals</h4>
            <p>
                My main goal is to develop my knowledge and be better and better websites developer. After mastering react js I want to learn different frameworks by creating my own projects or working in company.
            </p>`
        } else {
            projekty.innerHTML = '<li>Projekty</li>'
            wtrakcie.innerHTML = '<li>W trakcie</li>'
            dos.innerHTML = '<li>Doświadczenie</li>'
            omnie.innerHTML = '<li>O mnie</li>'
            cele.innerHTML = '<li>Cele</li>'
            english.textContent = 'English'
            ukonczoneprojekty.textContent = 'Ukończone projekty'
            projektywtrakcie.textContent = 'Projekty w trakcie'
            doswiadczenie.innerHTML = `<h4 style="letter-spacing: .1em;">Doświadczenie</h4>
            Zaparaszam do śledzenia mojej przygody z programowaniem na mojego githuba <br>
            <a href="https://github.com/opielapatryk" target="_blank">github.com</a>`
            omniee.innerHTML = `<h4 style="letter-spacing: .1em;">O mnie</h4>
            <p>
                Hej! <br>
                Mam na imię Patryk. Jestem młodym sympatykiem programowania i absolwentem renomowanego technikum informatycznego. <br> Wybrałem bardziej kreatywną ścieżke kształcenia czyli na własną rękę ze względu na to, że sam najlepiej wiem gdzie są moje braki. <br> Dzięki świetnej dyscyplinie jestem w stanie się trzymać wyznaczonego przeze mnie planu, który jest dostosowany do moich słabych stron. <br> Obecny system kształcenia pozostawia mi i moim rówieśnikom wiele do życzenia. <br> W zakresie programowania zawiera wiele przestarzałej wiedzy, która nie trafia w potrzeby rynku.
            </p>`
            dalszecele.innerHTML = `<h4 style="letter-spacing: .1em;">Dalsze cele:</h4>
            <p>
                Moim celem jest dalszy rozwój i zdobywanie doświadczenia w zakresie web devu, po dopracowaniu reacta mam w planach poznawać inne frameworki przez tworzenie własnych projektów.
            </p>`
        }
})
english.addEventListener('click',()=>{
    if(localStorage.getItem('language') == 'english'){
        localStorage.setItem('language', 'polish')
        window.location.reload()
    } else {
        localStorage.setItem('language', 'english')
         window.location.reload()
    }
})