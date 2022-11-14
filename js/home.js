"use strict"
const loginButton = document.querySelector(".btn-login");
const registerButton = document.querySelector(".btn-register");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const redirectionBtn=document.querySelectorAll(".card-link");
// function//

for(let i=0;i<redirectionBtn.length;i++)
{
    redirectionBtn[i].addEventListener('click',function()
    {
        alert(`These are bummy products.Still under construction until i master Database.
So we are redirecting you to mini-server page where all these operations work.
Have a nice day !!!!`);
//  this.window.location.href="lstorage.html";
    });
}

loginButton.addEventListener('click', function () {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    // login button
    loginButton.style.backgroundColor = "orange";
    loginButton.style.color = "white";
    // register button
    registerButton.style.backgroundColor = "white";
    registerButton.style.color = "black";
});
registerButton.addEventListener('click', function () {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    // register button
    registerButton.style.backgroundColor = "orange";
    registerButton.style.color = "white";
    // login button
    loginButton.style.backgroundColor = "white";
    loginButton.style.color = "black";
});
// second form controls//
const loginButton2 = document.querySelector(".btn-login-2");
const registerButton2 = document.querySelector(".btn-register-2");
const loginForm2 = document.getElementById("loginForm-2");
const registerForm2 = document.getElementById("registerForm-2");
//function
loginButton2.addEventListener('click', function () {
    loginForm2.style.display = "block";
    registerForm2.style.display = "none";
    // login button
    loginButton2.style.backgroundColor = "orange";
    loginButton2.style.color = "white";
    // register button
    registerButton2.style.backgroundColor = "white";
    registerButton2.style.color = "black";
});
registerButton2.addEventListener('click', function () {
    loginForm2.style.display = "none";
    registerForm2.style.display = "block";
    // register button
    registerButton2.style.backgroundColor = "orange";
    registerButton2.style.color = "white";
    // login button
    loginButton2.style.backgroundColor = "white";
    loginButton2.style.color = "black";
});
// mini-controls//
const btnMiniLogin = document.querySelector(".mini-login");
const btnMiniRegister = document.querySelector(".mini-register");
const overlay = document.querySelector(".overlay");
const fullForm = document.querySelector(".main-form-2");
// function//
btnMiniLogin.addEventListener('click', function () {
    fullForm.style.display = "block";
    overlay.style.display = "block";
});
btnMiniRegister.addEventListener('click', function () {
    fullForm.style.display = "block";
    overlay.style.display = "block";
});
overlay.addEventListener('click', function () {
    fullForm.style.display = "none";
    overlay.style.display = "none";
});
console.log(innerWidth);
// slider buttons//
const slider = document.querySelector(".slider-inner");
const progressBar = document.querySelector(".prog-bar-inner");
console.log(slider);
let sliderGrabbed = false;

slider.parentElement.addEventListener('scroll', function () {
    // console.log(getScrollPercentage());
    progressBar.style.width = `${getScrollPercentage()}%`
});
//one function

function getScrollPercentage() {
    return ((slider.parentElement.scrollLeft / (slider.parentElement.scrollWidth - slider.parentElement.clientWidth)) * 100);
}
// my func//
const next = document.querySelector(".btn-next");
const pre = document.querySelector(".btn-pre");
const scrollSlider = document.querySelector(".slider");
let scrolled = 0;
next.addEventListener('click', function () {

    if (getScrollPercentage() >= 0 && getScrollPercentage() <= 100) {
        scrolled = scrolled + 300;
        scrollSlider.scrollLeft = scrolled;
        console.log(scrolled);
        pre.style.display = "block"

    }
    if (getScrollPercentage() >= 99) {
        next.style.display = "none"
    }


});
pre.addEventListener('click', function () {

    if (getScrollPercentage() >= 0 && getScrollPercentage() <= 100) {
        scrolled = scrolled - 300;
        scrollSlider.scrollLeft = scrolled;
        console.log(scrolled);
        next.style.display = "block"

    }
    if (getScrollPercentage() <= 0) {
        pre.style.display = "none"
    }


});
// second slider//
const next1 = document.querySelector(".btn-next1");
const pre1 = document.querySelector(".btn-pre1");
const scrollSlider1 = document.querySelector(".slider1");
const progressBar1 = document.querySelector(".prog-bar-inner1");
const slider1 = document.querySelector(".slider-inner1");
//two function
function getScrollPercentage1() {
    return ((slider1.parentElement.scrollLeft / (slider1.parentElement.scrollWidth - slider1.parentElement.clientWidth)) * 100);
}
//func
slider1.parentElement.addEventListener('scroll', function () {
    // console.log(getScrollPercentage());
    progressBar1.style.width = `${getScrollPercentage1()}%`
});
let scrolled1 = 0;
next1.addEventListener('click', function () {

    if (getScrollPercentage1() >= 0 && getScrollPercentage1() <= 100) {
        scrolled1 = scrolled1 + 300;
        scrollSlider1.scrollLeft = scrolled1;
        console.log(scrolled1);
        pre1.style.display = "block"

    }
    if (getScrollPercentage1() >= 99) {
        next1.style.display = "none"
    }


});
pre1.addEventListener('click', function () {

    if (getScrollPercentage1() >= 0 && getScrollPercentage1() <= 100) {
        scrolled1 = scrolled1 - 300;
        scrollSlider1.scrollLeft = scrolled1;
        console.log(scrolled1);
        next1.style.display = "block"

    }
    if (getScrollPercentage1() <= 0) {
        pre1.style.display = "none"
    }


});

// third slider//
const next2 = document.querySelector(".btn-next2");
const pre2 = document.querySelector(".btn-pre2");
const scrollSlider2 = document.querySelector(".slider2");
const progressBar2 = document.querySelector(".prog-bar-inner2");
const slider2 = document.querySelector(".slider-inner2");
//third function
function getScrollPercentage2() {
    return ((slider2.parentElement.scrollLeft / (slider2.parentElement.scrollWidth - slider2.parentElement.clientWidth)) * 100);
}
//func
slider2.parentElement.addEventListener('scroll', function () {
    // console.log(getScrollPercentage());
    progressBar2.style.width = `${getScrollPercentage2()}%`
});
let scrolled2 = 0;
next2.addEventListener('click', function () {

    if (getScrollPercentage2() >= 0 && getScrollPercentage2() <= 100) {
        scrolled2 = scrolled2 + 300;
        scrollSlider2.scrollLeft = scrolled2;
        console.log(scrolled2);
        pre2.style.display = "block"

    }
    if (getScrollPercentage2() >= 99) {
        next2.style.display = "none"
    }


});
pre2.addEventListener('click', function () {

    if (getScrollPercentage2() >= 0 && getScrollPercentage2() <= 100) {
        scrolled2 = scrolled2 - 300;
        scrollSlider2.scrollLeft = scrolled2;
        console.log(scrolled2);
        next2.style.display = "block"

    }
    if (getScrollPercentage2() <= 0) {
        pre2.style.display = "none"
    }


});
// third slider//
const next3 = document.querySelector(".btn-next3");
const pre3 = document.querySelector(".btn-pre3");
const scrollSlider3 = document.querySelector(".slider3");
const progressBar3 = document.querySelector(".prog-bar-inner3");
const slider3 = document.querySelector(".slider-inner3");
//third function
function getScrollPercentage3() {
    return ((slider3.parentElement.scrollLeft / (slider3.parentElement.scrollWidth - slider3.parentElement.clientWidth)) * 100);
}
//func
slider3.parentElement.addEventListener('scroll', function () {
    // console.log(getScrollPercentage());
    progressBar3.style.width = `${getScrollPercentage3()}%`
});
let scrolled3 = 0;
next3.addEventListener('click', function () {

    if (getScrollPercentage3() >= 0 && getScrollPercentage3() <= 100) {
        scrolled3 = scrolled3 + 300;
        scrollSlider3.scrollLeft = scrolled3;
        console.log(scrolled3);
        pre3.style.display = "block"

    }
    if (getScrollPercentage3() >= 99) {
        next3.style.display = "none"
    }


});
pre3.addEventListener('click', function () {

    if (getScrollPercentage3() >= 0 && getScrollPercentage3() <= 100) {
        scrolled3 = scrolled3 - 300;
        scrollSlider3.scrollLeft = scrolled3;
        console.log(scrolled3);
        next3.style.display = "block"

    }
    if (getScrollPercentage3() <= 0) {
        pre3.style.display = "none"
    }


});
// four slider//
const next4 = document.querySelector(".btn-next4");
const pre4 = document.querySelector(".btn-pre4");
const scrollSlider4 = document.querySelector(".slider4");
const progressBar4 = document.querySelector(".prog-bar-inner4");
const slider4 = document.querySelector(".slider-inner4");
//third function
function getScrollPercentage4() {
    return ((slider4.parentElement.scrollLeft / (slider4.parentElement.scrollWidth - slider4.parentElement.clientWidth)) * 100);
}
//func
slider4.parentElement.addEventListener('scroll', function () {
    // console.log(getScrollPercentage());
    progressBar4.style.width = `${getScrollPercentage4()}%`
});
let scrolled4 = 0;
next4.addEventListener('click', function () {

    if (getScrollPercentage4() >= 0 && getScrollPercentage4() <= 100) {
        scrolled4 = scrolled4 + 300;
        scrollSlider4.scrollLeft = scrolled4;
        console.log(scrolled4);
        pre4.style.display = "block"

    }
    if (getScrollPercentage4() >= 99) {
        next4.style.display = "none"
    }


});
pre4.addEventListener('click', function () {

    if (getScrollPercentage4() >= 0 && getScrollPercentage4() <= 100) {
        scrolled4 = scrolled4 - 300;
        scrollSlider4.scrollLeft = scrolled4;
        console.log(scrolled4);
        next4.style.display = "block"

    }
    if (getScrollPercentage4() <= 0) {
        pre4.style.display = "none"
    }


});
