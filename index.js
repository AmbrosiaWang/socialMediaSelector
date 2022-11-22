const menuEl = document.querySelector(".menu");
const menuTextEl = document.querySelector(".menu p");
const socialListsEl = document.querySelector(".social-lists");
const liEls = document.querySelectorAll(".social-lists li");


menuEl.addEventListener("click",function(){
    socialListsEl.classList.toggle("hide");
    menuEl.classList.toggle("rotate");
});

liEls.forEach(function(liEl){
    liEl.addEventListener("click",function(){
        menuTextEl.innerHTML = liEl.innerHTML;
        socialListsEl.classList.add("hide");
        menuEl.classList.toggle("rotate");
    });
});