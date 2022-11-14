'use strict'
// flag buttons//

var flags = document.querySelector('.flag');
$('#india').click(function () {
    $('.flag').attr("src", "source/india.png");
    $('#dropdownMenuButton1').html("india");
    $('.currencyInd').removeClass("spanHide");
    $('.currencyRus').addClass("spanHide");
    $('.currencyJap').addClass("spanHide");
    $('.currencyUsa').addClass("spanHide");
});
$('#russia').click(function () {
    $('.flag').attr("src", "source/russia.png");
    $('#dropdownMenuButton1').html("Russia");
    $('.currencyInd').addClass("spanHide");
    $('.currencyRus').removeClass("spanHide");
    $('.currencyJap').addClass("spanHide");
    $('.currencyUsa').addClass("spanHide");
});
$('#japan').click(function () {
    $('.flag').attr("src", "source/japan.png");
    $('#dropdownMenuButton1').html("Japan");
    $('.currencyInd').addClass("spanHide");
    $('.currencyRus').addClass("spanHide");
    $('.currencyJap').removeClass("spanHide");
    $('.currencyUsa').addClass("spanHide");
});
$('#usa').click(function () {
    $('.flag').attr("src", "source/usa.png");
    $('#dropdownMenuButton1').html("Usa");
    $('.currencyInd').addClass("spanHide");
    $('.currencyRus').addClass("spanHide");
    $('.currencyJap').addClass("spanHide");
    $('.currencyUsa').removeClass("spanHide");
});

// filter button
$('.sideNavbar ul li i').on('click', function () {
    $('.sideNavbar').toggleClass('blast');
})
//New js


let productListUrl = 'https://my-json-server.typicode.com/swagofindia/products/db';
var productList;
let returnHtml = '';
let storageItems=[];
async function loadProduct(productListUrl) {
    fetch('https://my-json-server.typicode.com/swagofindia/products/db').then(response => response.json()).then(json => {
        productList = json
        productList.Products.forEach((product) => {
            // template method
            // let star='<i class="fa-solid fa-star"></i>';
            //star function
            let noOfStar=function()
            {
                let morningStar="";
                let nightStar="";
                for(let i=1;i<=product.ratings;i++)
                {
                    morningStar+='<i class="fa-solid fa-star"></i>';
                }
                let lowStar=5-product.ratings;
                // console.log(lowStar);
                if(product.ratings<5)
                {
                    for(let i=0;i<=lowStar;i++)
                    {
                        nightStar+='<i class="fa-solid fa-star low-star"></i>';
                    }
                }
                // console.log(nightStar);
                return morningStar+nightStar;
            };
            // new or old function
            let newSpan=function()
            {
                if(product.isNew=='TRUE')
                {
                    // console.log('ok');
                    return 'NEW'
                }
                if(product.isNew=='FALSE')
                {
                    // console.log('Risk');
                    return 'SWAG'
                }
            };
            returnHtml=`<div class="col-12 col-lg-4 col-md-12 col-sm-12" id="${product.id}"> 
            <div class ="card" style="width: 90%;margin-left: 5%;margin-top:50px">
                <img src ="source/product${product.id}.jpg" class="card-img-top" alt= "..." >
             <span class="can-new">${newSpan()}</span>
                <div class="threeIcons invisible">
                 <div class="row">
                 <div class="col-4"><a href="productView.html"><i class="fa-solid fa-eye" id="viewProduct"></i></a></div>
                 <div class="col-4"><a href="#"><i class="fa-solid fa-heart" id="btn-wish"></i></a></div>
                 <div class="col-4"><a href="#"><i class="fa-solid fa-cart-shopping" id="btn-cart"></i></a></div>
                </div> 
            </div> 
            <div class="can-body">
                  <h5>${product.name}</h5> 
            </div> 
                <ul class="list-group list-group-flush">
                <li class="list-group-item" id="can-price">
                    <span class="currencyInd"><i class="fa-solid fa-indian-rupee-sign"></i>
                    </span>
                    <span class="currencyRus spanHide"><i class="fa-solid fa-ruble-sign"></i>
                    </span>
                    <span class="currencyJap spanHide"><i class="fa-solid fa-yen-sign"></i></span>
                    <span class="currencyUsa spanHide"><i class="fa-solid fa-dollar-sign"></i>
                    </span>
                    <span>${product.priceAfterDiscount}</span>
                    <span class="minusValue">${product.price}</span>
                </li>
                    <li class="list-group-item" id="can-star">${noOfStar()}${product.ratings}/5</li>
                </ul>
            </div>
          </div>`

            document.querySelector('#card-store').innerHTML += returnHtml; 
        });

        // add to cart full progress
        const addToCart=document.querySelectorAll('#btn-cart');
        console.log(addToCart.length);
        for(let i=0;i<addToCart.length;i++)
        {
            addToCart[i].addEventListener('click',function()
            {    
                window.location.reload();  
                function addEntry() {
                  
                        // Parse any JSON previously stored in allEntries
                        var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
                        if(existingEntries == null) existingEntries = [];
                      
                        var entry = {
                            "title": productList.Products[i].name,
                            "price": productList.Products[i].priceAfterDiscount,
                            "discount": productList.Products[i].price,
                            "id": productList.Products[i].id,
                            "rating":productList.Products[i].ratings
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
          // add to wishlist full progress
          const addToWish=document.querySelectorAll('#btn-wish');
          console.log(addToWish.length);
          for(let i=0;i<addToWish.length;i++)
          {
              addToWish[i].addEventListener('click',function()
              {
                   window.location.reload();  
                  function addWish() {
                    
                          // Parse any JSON previously stored in allEntries
                          var existingWish = JSON.parse(localStorage.getItem("allWish"));
                          if(existingWish == null) existingWish = [];
                        
                          var wish = {
                              "title": productList.Products[i].name,
                              "price": productList.Products[i].priceAfterDiscount,
                              "discount": productList.Products[i].price,
                              "id": productList.Products[i].id,
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
        //   product view page
        const viewProduct=document.querySelectorAll("#viewProduct");
        const viewLength=viewProduct.length;
        console.log(viewLength);
        for(let i=0;i<viewLength;i++)
        {
            viewProduct[i].addEventListener('click',function()
            {
                
                const view=function()
                {
                     // Parse any JSON previously stored in allEntries
                     let allView=[];
                   
                     var viewItem = {
                         "title": productList.Products[i].name,
                         "price": productList.Products[i].priceAfterDiscount,
                         "discount": productList.Products[i].price,
                         "id": productList.Products[i].id,
                         "rating":productList.Products[i].ratings,
                     };
                     console.log(viewItem);
                     // localStorage.setItem("entry", JSON.stringify(entry));
                     // Save allEntries back to local storage
                     allView.push(viewItem);
                     localStorage.setItem("allView", JSON.stringify(allView));
                    
                    console.log(productList.Products[i]);   
                };
                view();
                
            });
        
        }
       
       

        // blur js
        document.querySelectorAll('div[class^="card"').forEach(element => {

            element.addEventListener('mouseover', event => {
                element.childNodes[1].classList.add('blurry');
                element.childNodes[3].classList.add('invisible'); //can-new
                element.childNodes[7].classList.add('blurry');
                element.childNodes[9].classList.add('blurry');
                element.childNodes[5].classList.remove('invisible');

            });
            element.addEventListener('mouseout', event => {
                element.childNodes[1].classList.remove('blurry');
                element.childNodes[3].classList.remove('invisible'); //can-new
                element.childNodes[7].classList.remove('blurry');
                element.childNodes[9].classList.remove('blurry');
                element.childNodes[5].classList.add('invisible');

            });
        });
    });
};
loadProduct(productListUrl);


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

