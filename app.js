const email =document.querySelector(".email");
const btn =document.querySelector(".footer-button");
const error = document.querySelector(".error-text");
let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

btn.addEventListener("click",check);

function check(){
    if (email.value.match(regExp)){
      alert("email submitted");
    }
    else if(email.value == ""){
        alert("Error");
     

    }

    else{
        alert("wrong email");
    }
    
}

const hamburger = document.querySelector('.hamburger');
const navUL = document.querySelector('.nav-links');
const line1 = document.querySelector('.line-1');
const line2 =document.querySelector('.line-2');
const line3 =document.querySelector('.line-3');

hamburger.addEventListener('click',()=>{
    navUL.classList.toggle('show');
    line1.classList.toggle('tr-line-1');
    line2.classList.toggle('tr-line-2');
    line3.classList.toggle('tr-line-3');

    if(navUL.style.display ==="block"){
        navUL.style.display = "none" ;
    }
    else{
        navUL.style.display = "block";
    }
})