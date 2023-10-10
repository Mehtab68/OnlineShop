/* Mehtab-Ali Rajput 20251387*/

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

var productId = getUrlParameter('id'); 

function loadProduct(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var products = JSON.parse(xhr.responseText)
            
            var item = '';
 
            for(var i = 0; i < products.length; i++){
                if (products[i].id == productId){
               
            localStorage.setItem("name", (products[i].name))
            parseInt(localStorage.setItem("price", (products[i].price)))
            localStorage.setItem("id", products[i].id)
            
                item += `  <h1>${products[i].name}</h1>
                <div class="row">
                  <div class="col">
                    <img id="product-image" alt="${products[i].name}" src="./assets/img/${products[i].image}">
                  </div>
                  <div class="col">
                    <section>
                      <h2>Description</h2>
                      <p>${products[i].description}</p>
                    </section>
                    <section>
                      <h2>Caractéristiques</h2>
                      <ul>
                      <li> ${products[i].features[0]}</li>
                      <li> ${products[i].features[1]}</li>
                      <li> ${products[i].features[2]}</li>
                      <li> ${products[i].features[3]}</li>
                      </ul>
                    </section>
                    <hr>
                    <form class="pull-right">
                      <label for="product-quantity">Quantité:</label>
                      <input class="form-control" id="product-quantity" type="number" value="1" min="1">
                      <button onclick="addCartBTN()" type='button' class="btn" title="Ajouter au panier" type="submit">
                        <i class="fa fa-cart-plus"></i>&nbsp; Ajouter
                      </button>
                    </form>
                    <p>Prix: <strong>${products[i].price}&thinsp;$</strong></p>
                  </div>
                </div>
                `
                    
                }
            }
           if (productId > products.length ){
            item += `<h1> Page non trouvée! </h1>`
        }}
        document.getElementById('product-description').innerHTML = item;
    };
    xhr.open('GET', './data/products.json', true);
    xhr.send();
};
loadProduct()


function countBadge(){
var newCount = localStorage.getItem("count")
var newCount = parseInt(newCount)
if ( !newCount){
  localStorage.setItem("count", 0)
}
console.log(newCount);
}
countBadge()

function totalPrice(){
  var total = localStorage.getItem("total")
  var total = parseInt(total)
  if ( !total){
    localStorage.setItem("total", 0)
  }
  console.log(total);
}
totalPrice()

function addCartBTN(){
  document.getElementById("dialogBox").style.display = "block";
  setTimeout(function(){
      document.getElementById("dialogBox").style.display = "";
  }, 5000);

  var addedItem = document.getElementById('product-quantity').value
  localStorage.setItem("addedItem", addedItem);
  var addedItem = localStorage.getItem("addedItem");
  var addedItem = parseInt(addedItem)
  var newCount = localStorage.getItem("count")
  var newCount = parseInt(newCount)
  if ( newCount == NaN){
    localStorage.setItem("count", 0)
  }
  newCount = newCount + addedItem
  localStorage.setItem("count", newCount)
  localStorage.setItem("countText", newCount);

  $("span.count").html(newCount);
  $(".count").show()


  var itemName = localStorage.getItem("name")
  var price = localStorage.getItem("price")
  var item = localStorage.getItem("item");
  var id = localStorage.getItem('id')
  item += `<tr>
   <td><button class="remove-item-button" title="Supprimer"><i class="fa fa-times"></i></button></td>
   <td><a href="./product.html?id=${id}">${itemName}</a></td>
   <td>${price}&thinsp;$</td>
   <td>
     <div class="row">
       <div class="col">
         <button title="Retirer" disabled=""><i class="fa fa-minus"></i></button>
       </div>
       <div class="col">${addedItem}</div>
       <div class="col">
         <button onclick="add()" title="Ajouter"><i class="fa fa-plus"></i></button>
       </div>
     </div>
   </td>
   <td>${addedItem*price}&thinsp;$</td>
   </tr> `
   localStorage.setItem("item", item);
   localStorage.setItem("itemRow", item)

   var total = localStorage.getItem("total")
   var total = parseInt(total)
   if ( total == NaN){
     localStorage.setItem("total", 0)
   }
   total = total + addedItem*price
   localStorage.setItem('total', total)
   var lol = localStorage.getItem('total')
   }
   
  

  
    var countText = localStorage.getItem("countText")
    if ( !countText){
        $(".count").hide()
    }
    else{
    $("span.count").html(countText);
    }
    

    
 
