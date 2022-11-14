'use strict'
// flag buttons//

var flags = document.querySelector('.flag');
$('#india').click(function () {
    $('.flag').attr("src", "source/india.png");
    $('#dropdownMenuButton1').html("india");
   
});
$('#russia').click(function () {
    $('.flag').attr("src", "source/russia.png");
    $('#dropdownMenuButton1').html("Russia");
   
});
$('#japan').click(function () {
    $('.flag').attr("src", "source/japan.png");
    $('#dropdownMenuButton1').html("Japan");
   
});
$('#usa').click(function () {
    $('.flag').attr("src", "source/usa.png");
    $('#dropdownMenuButton1').html("Usa");
  
});
// cart visual trail
const localItems=JSON.parse(localStorage.getItem("allEntries"));
// console.log(localItems);
// special trail

// trail
let returnOutput="";
let cartLength=localItems.length;
// count of products
let countHtml="";
//`MY CART:(${cartLength} ITEMS)`
countHtml=`MY CART:(${cartLength} ITEMS)`
// total pricing
const totalPricing=function()
{
    let price=0;
    for(let i=0;i<cartLength;i++)
    {
        // console.log(localItems[i].price);
        price+=Number(localItems[i].price);
    }
    // console.log(price);
    return Math.round(price);
};
totalPricing();
let totalPrice="";
totalPrice=`Total:<i class="fa-solid fa-indian-rupee-sign"></i> ${totalPricing()}`;
// dicount
const discountPricing=function()
{
    let discount=0;
    let price=0;
    for(let i=0;i<cartLength;i++)
    {
        // console.log(localItems[i].price);
        discount+=Number(localItems[i].discount);
        price+=Number(localItems[i].price);
    }
    // console.log(price);
    return Math.round(discount-price);
};
discountPricing();


let totalPrice1="";
totalPrice1=`${totalPricing()}`;

    const apple=function()
    {
        for(let i=0;i<cartLength;i++)
        {
            returnOutput+=`<div class="col-12 col-lg-12 col-md-12 col-sm-12" id="AllBlock">
            <div class="row" id="middle-part">
                <div class="col-6 col-lg-2 col-md-2 col-sm-6"><img src="${localItems[i].url}"
                        class="img-thumbnail" alt="..." width="200px">
                    </div>
                <div class="col-6 col-lg-5 col-md-5 col-sm-6">
                    <p class="productName">${localItems[i].title}</p>
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
                        <div class="col-12 col-lg-6 col-md-6 col-sm-6" id="productQuantity">
                            <select class="form-select" aria-label="Default select example">
                                <option value="1">QTY:1</option>
                                <option value="2">QTY:2</option>
                                <option value="3">QTY:3</option>
                                <option value="4">QTY:4</option>
                            </select>
                        </div>
                    </div>
                   
                </div>
                <div class="col-12 col-lg-5 col-md-5 col-sm-12" id="secondData">
                    <p class="productPrice"><i class="fa-solid fa-rupee-sign"></i>${localItems[i].price}</p>
                    <p class="discountPrice"><span class="discount">${localItems[i].discount}</span>(60% Off)</p>
                    <p class="deliveryStatement">Delivered in 2-7 days</p>
                </div>
                
            </div>
            <div class="movingButtons">
                <button class="btnRemove"><i class="fa-solid fa-trash-can"></i></button>
                <button class="btnwhishlist"><i class="fa-solid fa-heart"></i></button>
            </div>
            </div>`
        }
        return returnOutput;
    }
document.getElementById('productAllOutput').innerHTML=apple();
document.querySelector('.productCount').innerHTML=countHtml;
document.querySelector('.priceCount').innerHTML=totalPrice;
document.getElementById('price-details').innerHTML=totalPrice1;
document.getElementById('order-details').innerHTML=totalPricing();
document.getElementById('grand-details').innerHTML=totalPricing();
document.getElementById('discount-details').innerHTML=discountPricing();
// config buttons
const btnRemove=document.querySelectorAll(".btnRemove");
// console.log(btnRemove.length);
for(let i=0;i<btnRemove.length;i++)
{
   btnRemove[i].addEventListener('click',function()
   {
    let localItems1;
    localItems1=localItems;
    localItems1.splice(i,1);
    console.log(localItems1);
    console.log(i);
    localStorage.setItem("allEntries", JSON.stringify(localItems1));
    window.location.reload();
   });
}
// successfull function
document.querySelector('.placeOrder').addEventListener('click',function()
{
    alert(`Order placed successfully !!!
    Have a nice day !!!`);
});
// button add to wish full function

// add to wish
 // add to wishlist full progress
 const addToWish=document.querySelectorAll('.btnwhishlist');
 console.log(addToWish.length);
 for(let i=0;i<addToWish.length;i++)
 {
     addToWish[i].addEventListener('click',function()
     {
        console.log('ok');
        window.location.reload();
         
         function addWish() {
           
                 // Parse any JSON previously stored in allEntries
                 var existingWish = JSON.parse(localStorage.getItem("allWish"));
                 if(existingWish == null) existingWish = [];
               
                 var wish = {
                     "title": localItems[i].title,
                     "price": localItems[i].price,
                     "discount": localItems[i].discount,
                     "id": localItems[i].id,
                     "url":localItems[i].url
                 };
                 console.log(wish);
                 // localStorage.setItem("entry", JSON.stringify(entry));
                 // Save allEntries back to local storage
                 existingWish.push(wish);
                 localStorage.setItem("allWish", JSON.stringify(existingWish));
                 
         //    localStorage.clear();
         };
         addWish();         
     });

 }
//  imported js
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
