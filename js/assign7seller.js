"use strict"
// previous js//
'use strict'
const registerPart=document.querySelector(".register");
const loginPart=document.querySelector(".login");
const btnLogin=document.querySelector(".btnLogin");
const btnRegister=document.querySelector(".btnCreate");
const btnSubmit=document.getElementById("registrationSuccess");
const btnSubmit2=document.getElementById("loginSuccess");
const btnForgot=document.querySelector(".forgot-btn");
const closingButton=document.querySelector(".btnClose");
// register part
const passwordHide=document.querySelector(".locker");
const passwordHide2=document.querySelector(".locker2");
// login part
const passwordHidea=document.querySelector(".lockera");
const passwordHideb=document.querySelector(".lockerb");
// password
const passcode=document.getElementById("password");
const passcode2=document.getElementById("password2");
console.log(typeof(passcode));
//thankbox position
const positionBox=document.querySelector(".floatingBox");
// overlay
const blurish=document.querySelector(".overlay");
// button functions//
btnLogin.addEventListener('click',function()
{
    loginPart.style.top="0px";
    registerPart.style.top="600px";
    btnRegister.style.backgroundColor="white";
    btnRegister.style.color="black";
    // color change button part//
    btnLogin.style.backgroundColor='rgb(255, 162, 30)';
    btnLogin.style.color="white";
});
btnRegister.addEventListener('click',function()
{
    loginPart.style.top="600px";
    registerPart.style.top="-450px";
    btnLogin.style.backgroundColor="white";
    btnLogin.style.color="black";
    // color change button part//
    btnRegister.style.backgroundColor='rgb(255, 162, 30)';
    btnRegister.style.color="white";

});
//submit alert functions//
btnSubmit.addEventListener('click',function()
{
    alert('Registration Successfull!!');
    positionBox.classList.toggle("hidden");
    blurish.classList.toggle("hidden");

});
// login button alert
btnSubmit2.addEventListener('click',function()
{
    alert('Login Successfull!!');
    positionBox.classList.toggle("hidden");
    blurish.classList.toggle("hidden");
});
btnForgot.addEventListener('click',function()
{
    alert('RESET LINK SENT TO REGISTER EMAIL!!');
});
// password hide and unhide function
// register part
passwordHide.addEventListener('click',function()
{
    passwordHide.classList.toggle("hidden");
    passwordHide2.classList.toggle("hidden");
    // hiden and hide out part
    if(passcode2.type==="password")
    {
        passcode.type='text';
    }
    else
    {
        passcode2.type='password';
    }
    
});
passwordHide2.addEventListener('click',function()
{
    passwordHide.classList.toggle("hidden");
    passwordHide2.classList.toggle("hidden");
    if(passcode2.type==="password")
    {
        passcode2.type='text';
    }
    else
    {
        passcode2.type='password';
    }
   
});
// login part
passwordHidea.addEventListener('click',function()
{
    passwordHidea.classList.toggle("hidden");
    passwordHideb.classList.toggle("hidden");
    if(passcode.type==="password")
    {
        passcode.type='text';
    }
    else
    {
        passcode.type='password';
    }
});
passwordHideb.addEventListener('click',function()
{
    passwordHidea.classList.toggle("hidden");
    passwordHideb.classList.toggle("hidden");
    if(passcode.type==="password")
    {
        passcode.type='text';
    }
    else
    {
        passcode.type='password';
    }
});
// // overlay function
// blurish.addEventListener('click',function()
// {
//     positionBox.classList.toggle("hidden");
//     blurish.classList.toggle("hidden");

// });
// closing button on thanks box//
// closingButton.addEventListener('click',function()
// {
//     positionBox.classList.toggle("hidden");
//     // blurish.classList.toggle("hidden");

// });

console.log(innerWidth);



//previous js ends//