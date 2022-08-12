let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0";
    // document.querySelector('ul').classList.remove('hoverul')
  } else {
    document.querySelector("nav").style.top = "-90px";
    // document.querySelector('ul').classList.add('hoverul')

  }
  prevScrollpos = currentScrollPos;
}