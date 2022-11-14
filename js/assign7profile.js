"use strict"
// disability data and fuctions//
const mobileNo1=document.getElementById("mobile-number-1");
const fullname=document.getElementById("fullname");
const emailForm=document.getElementById("exampleInputEmail1");
const birthDay=document.getElementById("birthDay");
const addressForm=document.getElementById("address");
const altMobileNo=document.getElementById("altMobileNumber");
const nickname=document.getElementById("nickName");
const btnForm=document.getElementById("formButton");
// button//
const editButton=document.getElementById("editButton");

mobileNo1.disabled=true;
fullname.disabled=true;
emailForm.disabled=true;
birthDay.disabled=true;
addressForm.disabled=true;
altMobileNo.disabled=true;
nickname.disabled=true;
btnForm.disabled=true;

editButton.addEventListener('click',function()
{
    alert("Are you sure you want to edit !!!");
    
    if(mobileNo1.disabled=true)
    {
        mobileNo1.disabled=false;
    };
    if(fullname.disabled=true)
    {
        fullname.disabled=false;
    };
    if(emailForm.disabled=true)
    {
        emailForm.disabled=false;
    };
    if(birthDay.disabled=true)
    {
        birthDay.disabled=false;
    };
    if(addressForm.disabled=true)
    {
        addressForm.disabled=false;
    };
    if(altMobileNo.disabled=true)
    {
        altMobileNo.disabled=false;
    };
    if(nickname.disabled=true)
    {
        nickname.disabled=false;
    };
    if(btnForm.disabled=true)
    {
        btnForm.disabled=false;
    };
});
// profile javascript//

btnForm.addEventListener('click',function()
{
    alert("EDITED SUCCESSFULLY !!!");
    
    if(mobileNo1.disabled=false)
    {
        mobileNo1.disabled=true;
    };
    if(fullname.disabled=false)
    {
        fullname.disabled=true;
    };
    if(emailForm.disabled=false)
    {
        emailForm.disabled=true;
    };
    if(birthDay.disabled=false)
    {
        birthDay.disabled=true;
    };
    if(addressForm.disabled=false)
    {
        addressForm.disabled=true;
    };
    if(altMobileNo.disabled=false)
    {
        altMobileNo.disabled=true;
    };
    if(nickname.disabled=false)
    {
        nickname.disabled=true;
    };
    if(btnForm.disabled=false)
    {
        btnForm.disabled=true;
    };
    
});
const navbarToggler=document.querySelector(".navbar-expand-btn");
const navigationBar=document.querySelector(".sideNavigation");
// navabar function
navbarToggler.addEventListener('click',function()
{
    console.log("ok");
    if(innerWidth<767)
    {
    navigationBar.classList.toggle("fullNavigation");

    }
});
// carts and wish count//
const itemsInCart=JSON.parse(localStorage.getItem("allEntries"));
const cartCount=function()
{
    let count="";
    count=itemsInCart.length;
    return count;
};
const itemsInWish=JSON.parse(localStorage.getItem("allWish"));
const wishCount=function()
{
    let count="";
    count=itemsInWish.length;
    return count;
};
console.log(itemsInCart.length);
document.querySelector(".mini-val-cart").innerHTML=cartCount();
document.querySelector(".mini-val-wish").innerHTML=wishCount();
