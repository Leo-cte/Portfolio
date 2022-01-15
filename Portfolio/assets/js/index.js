let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

let bonjour = document.querySelector(".bjr")
let iAm = document.querySelector(".iAm")
let myName = document.querySelector(".appr")
let fromFrance = document.querySelector(".from")
let contactMe = document.getElementById("contactMe")


let container = document.querySelector('.container')
let arrow = document.querySelector('.arrow')

contactMe.addEventListener('click', (e) =>{
  console.log('Bonjour hidden')
  bonjour.classList.add('show')
  iAm.classList.add('show')
  myName.classList.add('show')
  fromFrance.classList.add('show')
  contactMe.classList.add('show')

  bonjour.classList.remove('show-on')
  iAm.classList.remove('show-on')
  myName.classList.remove('show-on')
  fromFrance.classList.remove('show-on')
  contactMe.classList.remove('show-on')

  container.classList.add('show-on')
})

arrow.addEventListener('click', (e)=>{
  console.log('contact hidden') 
  container.classList.remove('show-on')
  container.classList.add('show')

  bonjour.classList.add('show-on')
  iAm.classList.add('show-on')
  myName.classList.add('show-on')
  fromFrance.classList.add('show-on')
  contactMe.classList.add('show-on')

  bonjour.classList.remove('show')
  iAm.classList.remove('show')
  myName.classList.remove('show')
  fromFrance.classList.remove('show')
  contactMe.classList.remove('show')
})

cv.addEventListener('mouseover', (e) =>{
  console.log('CV overred')
  cv.classList.add('filtering')
})