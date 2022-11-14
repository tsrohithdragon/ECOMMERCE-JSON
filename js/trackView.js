"use strict"
const viewingProduct = JSON.parse(localStorage.getItem("allTrack"));
console.log(viewingProduct.length);
let returnTheView = ``
const viewing = function () {
    for (let i = 0; i < viewingProduct.length; i++) {
        // function return star
        let ratingLength = viewingProduct[i].rating;
        let offStar=5-ratingLength;
        console.log(offStar);
        console.log(ratingLength);
        const returnStar = function () {
            let starCount = '';
            let starOff = '';
            for (let i = 1; i <= ratingLength; i++) {

                starCount += '<i class="fa-solid fa-star high-star"></i>';
            }
            
            if(ratingLength<5)
            {
                for (let i = 0; i <= offStar; i++) {

                    starOff += '<i class="fa-solid fa-star low-star"></i>';
                }

            }
            return starCount+starOff;
        }
        console.log(returnStar());

        returnTheView += `   <div id="product-box" class="col-12 col-lg-12 col-md-12 col-sm-12">
        <div class="row">
            <div class="col-12 col-lg-4 col-md-4 col-sm-12"><img src="${viewingProduct[i].url}.jpg" class="img-thumbnail" alt="..."></div>
            <div id="productName" class="col-6 col-lg-5 col-md-5 col-sm-6"><h5>${viewingProduct[i].title}</h5>
            <p>COLOR:WHITE<br>SELLER:HANMADRAGONIOD</p>
        <div class="starBox">
           ${returnStar()} <span>${ratingLength}/5</span>
        </div>
        </div>
            <div id="priceBox" class="col-6 col-lg-3 col-md-3 col-sm-6"><h5 class="price-tag"><i class="fa-solid fa-rupee-sign"></i><span>${viewingProduct[i].price}</span></h5></div>
            <div class="col-12" id="RangerClass">
                <div class="deliveryProgress">
                    <label for="customRange2" class="form-label">Delivery progress</label>
<input type="range" class="form-range" min="0" max="5" id="customRange2">
                </div>
                <div class="deliveryStatement">
                    <div class="row">
                        <div class="col 12"><h5>Shipment will be delivered by November 8 under control of HANMACORPLOGISTICS.LTD</h5></div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-lg-4 col-md-12 col-sm-12">Mon 8 November</div>
                        <div class="col-12 col-lg-2 col-md-12 col-sm-12">12.00AM</div>
                        <div class="col-12 col-lg-2 col-md-12 col-sm-12">Maharasthra</div>
                        <div class="col-12 col-lg-4 col-md-12 col-sm-12">Dispatched under the control of HANMACORP.LOGISTIC</div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-lg-4 col-md-12 col-sm-12">Mon 8 November</div>
                        <div class="col-12 col-lg-2 col-md-12 col-sm-12">12.00AM</div>
                        <div class="col-12 col-lg-2 col-md-12 col-sm-12">Telangana</div>
                        <div class="col-12 col-lg-4 col-md-12 col-sm-12">Dispatched under the control of HANMACORP.LOGISTIC</div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-lg-4 col-md-12 col-sm-12">Mon 8 November</div>
                        <div class="col-12 col-lg-2 col-md-12 col-sm-12">12.00AM</div>
                        <div class="col-12 col-lg-2 col-md-12 col-sm-12">Andhra-Pradesh</div>
                        <div class="col-12 col-lg-4 col-md-12 col-sm-12">Dispatched under the control of HANMACORP.LOGISTIC</div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-lg-4 col-md-12 col-sm-12">Mon 8 November</div>
                        <div class="col-12 col-lg-2 col-md-12 col-sm-12">12.00AM</div>
                        <div class="col-12 col-lg-2 col-md-12 col-sm-12">Karnataka</div>
                        <div class="col-12 col-lg-4 col-md-12 col-sm-12">Dispatched under the control of HANMACORP.LOGISTIC</div>
                    </div>
                </div>
            </div>
            <div id="statementBox" class="col-12 col-lg-12 col-md-12 col-sm-12"><h5><i class="fa-solid fa-circle-check"></i><span> Delivered in 2-7 days</span></h5>
            <p>HANMACORPLOGISTICS.LTD</p>
        <button class="track" id="btn-cart"><i class="fa-solid fa-cart-shopping"></i></button>
        <button class="track" id="btn-wish"><i class="fa-solid fa-heart"></i></button></div>
        </div>`
    }

    return returnTheView;

};

document.getElementById("card-data-insert").innerHTML = viewing();


   // add to cart full progress
   const addToCart=document.querySelectorAll('#btn-cart');
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
                       "title": viewingProduct[i].title,
                       "price": viewingProduct[i].price,
                       "discount": viewingProduct[i].discount,
                       "id": viewingProduct[i].id,
                       "rating":viewingProduct[i].rating,
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
              
              function addWish() {
                
                      // Parse any JSON previously stored in allEntries
                      var existingWish = JSON.parse(localStorage.getItem("allWish"));
                      if(existingWish == null) existingWish = [];
                    
                      var wish = {
                        "title": viewingProduct[i].title,
                        "price": viewingProduct[i].price,
                        "discount": viewingProduct[i].discount,
                        "id": viewingProduct[i].id,
                        "rating":viewingProduct[i].rating,
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
