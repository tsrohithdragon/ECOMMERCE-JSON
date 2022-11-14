"use strict"
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
console.log(innerWidth);
// displaying the wishes
const localWish=JSON.parse(localStorage.getItem("allWish"));
let returnWish="";
let wishLength=localWish.length;
const pineApple=function()
{
    for(let i=0;i<wishLength;i++)
    {
        returnWish+=`<div id="full-card" class="col-12 col-lg-12 col-md-12 col-sm-12">
        <div class="row" id="middle-part">
            <div class="col-3 col-lg-2 col-md-2 col-sm-2"><img src="${localWish[i].url}"
                    class="img-thumbnail" alt="..." width="200px">
            </div>
            <div class="col-5 col-lg-5 col-md-5 col-sm-5">
                <p class="productName">${localWish[i].title}</p>
                <p class="productColor">WHITE</p>
                <p class="productSeller">Hanma Dragoniod</p>
                <div class="row">
                    <div class="col-12 col-lg-6 col-md-6 col-sm-6" id="productQuantity">
                        <select class="form-select" aria-label="Default select example">
                            <option value="1" selected>SMALL</option>
                            <option value="2">MEDIUM</option>
                            <option value="3">LARGE</option>
                            <option value="4">EXTRA LARGE</option>
                        </select>
                    </div>

                </div>

            </div>
            <div class="col-4 col-lg-5 col-md-5 col-sm-5" id="secondData">
                <p class="productPrice"><i class="fa-solid fa-rupee-sign"></i>${localWish[i].price}</p>
                <p class="discountPrice"><span class="discount">${localWish[i].discount}</span>(60% Off)</p>
                <p class="deliveryStatement">Delivered in 2-7 days</p>
            </div>

        </div>
        <div class="movingButtons">
            <button class="btnRemove"><i class="fa-solid fa-trash-can"></i></button>
            <button class="btn-cart"><i class="fa-solid fa-cart-shopping"></i></button>
        </div>
    </div>`
    }
    return returnWish;
}
document.getElementById("card-data-insert").innerHTML=pineApple();
// wish status
let totatNumberOfproducts="";
totatNumberOfproducts=`MY WISHLIST (${wishLength} ITEMS)`
document.querySelector(".all-items").innerHTML=totatNumberOfproducts;
// remove items from the cart
const btnRemove=document.querySelectorAll(".btnRemove");
for(let i=0;i<btnRemove.length;i++)
{
   btnRemove[i].addEventListener('click',function()
   {
    let localWish1;
    localWish1=localWish;
    localWish1.splice(i,1);
    console.log(localWish1);
    console.log(i);
    localStorage.setItem("allWish", JSON.stringify(localWish1));
    window.location.reload();
   });
}
// add to cart
const addToCart=document.querySelectorAll('.btn-cart');
console.log(addToCart.length);
for(let i=0;i<addToCart.length;i++)
{
    addToCart[i].addEventListener('click',function()
    {
        
        function addEntry() {
          
                // Parse any JSON previously stored in allEntries
                var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
                if(existingEntries == null) existingEntries = [];
              
                var entry = {
                    "title": localWish[i].title,
                    "price":localWish[i].price,
                    "discount":localWish[i].discount,
                    "id":localWish[i].id,
                    "url":localWish[i].url
                };
                console.log(entry);
                // localStorage.setItem("entry", JSON.stringify(entry));
                // Save allEntries back to local storage
                existingEntries.push(entry);
                localStorage.setItem("allEntries", JSON.stringify(existingEntries));
                
        //    localStorage.clear();
        };
        addEntry();
        
        
    });

}
