'use strict'
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
const localItemsTrack=JSON.parse(localStorage.getItem("allEntries"));
console.log(localItemsTrack.length);
let returnhtml="";

const displayorder=function()
{
    for(let i=0;i<localItemsTrack.length;i++)
{
    returnhtml+=`<div id="product-box" class="col-12 col-lg-12 col-md-12 col-sm-12">
    <div class="row">
        <div class="col-4 col-lg-2 col-md-3 col-sm-4"><img src="${localItemsTrack[i].url}" class="img-thumbnail" alt="..."></div>
        <div id="productName" class="col-8 col-lg-4 col-md-5 col-sm-5"><h5>${localItemsTrack[i].title}</h5>
        <p>COLOR:WHITE</p>
    <p>SELLER:HANMADRAGONIOD</p></div>
        <div id="priceBox" class="col-12 col-lg-2 col-md-4 col-sm-3"><h5 class="price-tag"><i class="fa-solid fa-rupee-sign"></i><span> ${localItemsTrack[i].price}</span></h5></div>
        <div id="statementBox" class="col-12 col-lg-4 col-md-12 col-sm-12"><h5><i class="fa-solid fa-circle-check"></i><span> Delivered by November 8</span></h5>
        <p>YOUR ORDER HAS BEEN PLACED</p>
        <a href="trackView.html"><button class="track">TRACK</button></a></div>
    </div>
    
</div>`
}
return returnhtml;

};
document.getElementById('card-data-insert').innerHTML=displayorder();
// total products
let count="";
count=`PRODUCTS (${localItemsTrack.length} ITEMS)`
document.querySelector(".all-items").innerHTML=count;
// view track function
const viewTrack=document.querySelectorAll(".track");
const trackLength=viewTrack.length;
console.log(trackLength);
for(let i=0;i<trackLength;i++)
{
    viewTrack[i].addEventListener('click',function()
    {
        
        const view=function()
        {
             // Parse any JSON previously stored in allEntries
             let allTrack=[];
           
             var viewTrackData = {
                 "title": localItemsTrack[i].title,
                 "price": localItemsTrack[i].price,
                 "discount": localItemsTrack[i].discount,
                 "id": localItemsTrack[i].id,
                 "rating":localItemsTrack[i].rating,
                 "url":localItemsTrack[i].url
             };
             console.log(viewTrackData);
             // localStorage.setItem("entry", JSON.stringify(entry));
             // Save allEntries back to local storage
             allTrack.push(viewTrackData);
             localStorage.setItem("allTrack", JSON.stringify(allTrack));   
        };
        view();
        
    });

}
