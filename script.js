const hamburger = document.getElementById('hamburger');
const navContent = document.getElementById('navContent');
const body = document.querySelector("body");
const form = document.querySelector(".form-data");
const cards = document.querySelectorAll(".cls-ro");
var bt1 = document.querySelector("#fo-bt1");
var bt2 = document.querySelector("#fo-bt2");
var mForm = document.querySelector(".main-form")

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active'); // triggers animation
  navContent.classList.toggle('active'); // toggles menu visibility
});

cards.forEach((card) => {
  card.addEventListener("click", function() {
    form.style.display = "block"
    body.style.overflow = "hidden"
  })
})

bt1.addEventListener("click",function(){
  form.style.display = "none";
   body.style.overflow = "auto";
})
bt2.addEventListener("click",function(){
  form.style.display = "none";
   body.style.overflow = "auto";
})
