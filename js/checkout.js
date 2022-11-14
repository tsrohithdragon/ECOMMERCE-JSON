"use strict"
// carts and wish count//
const itemsInCart = JSON.parse(localStorage.getItem("allEntries"));
const cartCount = function () {
    let count = "";
    count = itemsInCart.length;
    return count;
};
const itemsInWish = JSON.parse(localStorage.getItem("allWish"));
const wishCount = function () {
    let count = "";
    count = itemsInWish.length;
    return count;
};
console.log(itemsInCart.length);
document.querySelector(".mini-val-cart").innerHTML = cartCount();
document.querySelector(".mini-val-wish").innerHTML = wishCount();
// total price
const localItems = JSON.parse(localStorage.getItem("allEntries"));
console.log(localItems);
// real price function
const realPriceOfitems = function () {
    let price=0;
    for (let i = 0; i < localItems.length; i++) {
        price+=Number(localItems[i].price);
    }
    return price;
};
document.getElementById("real-price").innerHTML=realPriceOfitems();
// total price function
const totalPriceOfitems = function () {
    let price=0;
    for (let i = 0; i < localItems.length; i++) {
        price+=Number(localItems[i].discount);
    }
    return Math.round(price);
};
document.getElementById("pro-price").innerHTML=totalPriceOfitems();

// discount price function
const totalDiscountOfitems = function () {
    let price=0;
    for (let i = 0; i < localItems.length; i++) {
        price+=Number(localItems[i].price);
    }
    let discount=0;
    for (let i = 0; i < localItems.length; i++) {
        discount+=Number(localItems[i].discount);
    }
    return Math.round(discount-price);
};
document.getElementById("pro-discount").innerHTML=totalDiscountOfitems();
// real price function
const youPriceOfitems = function () {
    let price=0;
    for (let i = 0; i < localItems.length; i++) {
        price+=Number(localItems[i].price);
    }
    return price;
};
document.getElementById("youPay").innerHTML=youPriceOfitems();
// summary in checkout
let noOfItemsInCart=`${localItems.length} Items`
document.querySelector(".order-items").innerHTML=noOfItemsInCart;