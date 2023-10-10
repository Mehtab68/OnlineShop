/* Mehtab-Ali Rajput 20251387*/

/* Products.html */


function loadAllProducts(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var products = JSON.parse(xhr.responseText)
                
         document.getElementById("HautBas").addEventListener('click' ,function(){
            var item = '';
            let products2 = products.sort(function(a, b) {
                return parseFloat(b.price) - parseFloat(a.price);
            }); 
            for(var i = 0; i < products2.length; i++){
    
                item += `<div class="product">
                             <a href="./product.html?id=${products2[i].id}" title="En savoir plus...">
                            <h2>${products2[i].name}</h2>
                            <img alt="Manette Xbox 360" src="./assets/img/${products2[i].image}">
                            <p class="price"><small>Prix</small> ${products2[i].price}&thinsp;$</p>
                          </a>
                    </div>
                `
            }
            document.getElementById('products-list').innerHTML = item;}
         )
    
         document.getElementById("basHaut").addEventListener('click' ,function(){
            var item = '';
            let products2 = products.sort(function(a, b) {
                return parseFloat(a.price) - parseFloat(b.price);
            }); 
            for(var i = 0; i < products2.length; i++){
    
                item += `<div class="product">
                             <a href="./product.html?id=${products2[i].id}" title="En savoir plus...">
                            <h2>${products2[i].name}</h2>
                            <img alt="Manette Xbox 360" src="./assets/img/${products2[i].image}">
                            <p class="price"><small>Prix</small> ${products2[i].price}&thinsp;$</p>
                          </a>
                    </div>
                `
            }
            document.getElementById('products-list').innerHTML = item;}
         )
    
         document.getElementById("A-Z").addEventListener('click' ,function(){
            var item = '';
            let products2 = products.sort(function(a, b){
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            })
            for(var i = 0; i < products2.length; i++){
    
                item += `<div class="product">
                             <a href="./product.html?id=${products2[i].id}" title="En savoir plus...">
                            <h2>${products2[i].name}</h2>
                            <img alt="Manette Xbox 360" src="./assets/img/${products2[i].image}">
                            <p class="price"><small>Prix</small> ${products2[i].price}&thinsp;$</p>
                          </a>
                    </div>
                `
            }
            document.getElementById('products-list').innerHTML = item;}
         )
    
         document.getElementById("Z-A").addEventListener('click' ,function(){
            var item = '';
            let products2 = products.sort(function(a, b){
                if(b.name < a.name) { return -1; }
                if(b.name > a.name) { return 1; }
                return 0;
            })
            for(var i = 0; i < products2.length; i++){
    
                item += `<div class="product">
                             <a href="./product.html?id=${products2[i].id}" title="En savoir plus...">
                            <h2>${products2[i].name}</h2>
                            <img alt="Manette Xbox 360" src="./assets/img/${products2[i].image}">
                            <p class="price"><small>Prix</small> ${products2[i].price}&thinsp;$</p>
                          </a>
                    </div>
                `
            }
            document.getElementById('products-list').innerHTML = item;}
         )
    
         products.sort(function(a, b) {
            return parseFloat(a.price) - parseFloat(b.price);
        })
    
            var item = '';
    
            for(var i = 0; i < products.length; i++){
    
                item += `<div class="product">
                             <a href="./product.html?id=${products[i].id}" title="En savoir plus...">
                            <h2>${products[i].name}</h2>
                            <img alt="Manette Xbox 360" src="./assets/img/${products[i].image}">
                            <p class="price"><small>Prix</small> ${products[i].price}&thinsp;$</p>
                          </a>
                    </div>
                `
            }
            document.getElementById('products-list').innerHTML = item;
        }
    };
    xhr.open('GET', './data/products.json', true);
    xhr.send();
    }
    loadAllProducts()
    
    
    function tousLesProduits(){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var products = JSON.parse(xhr.responseText)
    
                document.getElementById("HautBas").addEventListener('click' ,function(){
                    var item = '';
                    let products2 = products.sort(function(a, b) {
                        return parseFloat(b.price) - parseFloat(a.price);
                    }); 
                    for(var i = 0; i < products2.length; i++){
            
                        item += `<div class="product">
                                     <a href="./product.html?id=${products2[i].id}" title="En savoir plus...">
                                    <h2>${products2[i].name}</h2>
                                    <img alt="Manette Xbox 360" src="./assets/img/${products2[i].image}">
                                    <p class="price"><small>Prix</small> ${products2[i].price}&thinsp;$</p>
                                  </a>
                            </div>
                        `
                    }
                    document.getElementById('products-list').innerHTML = item;}
                 )
            
                 document.getElementById("basHaut").addEventListener('click' ,function(){
                    var item = '';
                    let products2 = products.sort(function(a, b) {
                        return parseFloat(a.price) - parseFloat(b.price);
                    }); 
                    for(var i = 0; i < products2.length; i++){
            
                        item += `<div class="product">
                                     <a href="./product.html?id=${products2[i].id}" title="En savoir plus...">
                                    <h2>${products2[i].name}</h2>
                                    <img alt="Manette Xbox 360" src="./assets/img/${products2[i].image}">
                                    <p class="price"><small>Prix</small> ${products2[i].price}&thinsp;$</p>
                                  </a>
                            </div>
                        `
                    }
                    document.getElementById('products-list').innerHTML = item;}
                 )
    
                 document.getElementById("A-Z").addEventListener('click' ,function(){
                    var item = '';
                    let products2 = products.sort(function(a, b){
                        if(a.name < b.name) { return -1; }
                        if(a.name > b.name) { return 1; }
                        return 0;
                    })
                    for(var i = 0; i < products2.length; i++){
            
                        item += `<div class="product">
                                     <a href="./product.html?id=${products2[i].id}" title="En savoir plus...">
                                    <h2>${products2[i].name}</h2>
                                    <img alt="Manette Xbox 360" src="./assets/img/${products2[i].image}">
                                    <p class="price"><small>Prix</small> ${products2[i].price}&thinsp;$</p>
                                  </a>
                            </div>
                        `
                    }
                    document.getElementById('products-list').innerHTML = item;}
                 )
    
                 
         document.getElementById("Z-A").addEventListener('click' ,function(){
            var item = '';
            let products2 = products.sort(function(a, b){
                if(b.name < a.name) { return -1; }
                if(b.name > a.name) { return 1; }
                return 0;
            })
            for(var i = 0; i < products2.length; i++){
    
                item += `<div class="product">
                             <a href="./product.html?id=${products2[i].id}" title="En savoir plus...">
                            <h2>${products2[i].name}</h2>
                            <img alt="Manette Xbox 360" src="./assets/img/${products2[i].image}">
                            <p class="price"><small>Prix</small> ${products2[i].price}&thinsp;$</p>
                          </a>
                    </div>
                `
            }
            document.getElementById('products-list').innerHTML = item;}
         )
    
                products.sort(function(a, b) {
                    return parseFloat(a.price) - parseFloat(b.price);}
                )
    
                var item = '';
                for(var i = 0; i < products.length; i++){
                    item += `<div class="product">
                                 <a href="./product.html?id=${products[i].id}" title="En savoir plus...">
                                <h2>${products[i].name}</h2>
                                <img alt="Manette Xbox 360" src="./assets/img/${products[i].image}">
                                <p class="price"><small>Prix</small>${products[i].price}&thinsp;$</p>
                              </a>
                        </div>
                    `
                    productNumber =  ` 13 produits  `
                }
                document.getElementById('products-list').innerHTML = item;
                document.getElementById('products-count').innerHTML = productNumber
            }
        };
        xhr.open('GET', './data/products.json', true);
        xhr.send();
    }
    
    function appareilPhoto(){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var products = JSON.parse(xhr.responseText)
                
    
                document.getElementById("HautBas").addEventListener('click' ,function(){
                    var item = '';
                    let products2 = products.sort(function(a, b) {
                        return parseFloat(b.price) - parseFloat(a.price);
                    }); 
                    for(var i = 0; i < products2.length; i++){
                        if (products[i].category == "cameras"){
                        item += `<div class="product">
                                     <a href="./product.html?id=${products2[i].id}" title="En savoir plus...">
                                    <h2>${products2[i].name}</h2>
                                    <img alt="Manette Xbox 360" src="./assets/img/${products2[i].image}">
                                    <p class="price"><small>Prix</small> ${products2[i].price}&thinsp;$</p>
                                  </a>
                            </div>
                        `
                    }
                    document.getElementById('products-list').innerHTML = item;}
                })
            
                 document.getElementById("basHaut").addEventListener('click' ,function(){
                    var item = '';
                    let products2 = products.sort(function(a, b) {
                        return parseFloat(a.price) - parseFloat(b.price);
                    }); 
                    for(var i = 0; i < products2.length; i++){
                        if (products[i].category == "cameras"){
                        item += `<div class="product">
                                     <a href="./product.html?id=${products2[i].id}" title="En savoir plus...">
                                    <h2>${products2[i].name}</h2>
                                    <img alt="Manette Xbox 360" src="./assets/img/${products2[i].image}">
                                    <p class="price"><small>Prix</small> ${products2[i].price}&thinsp;$</p>
                                  </a>
                            </div>
                        `
                    }
                    document.getElementById('products-list').innerHTML = item;}
                })
    
                document.getElementById("A-Z").addEventListener('click' ,function(){
                    var item = '';
                    let products2 = products.sort(function(a, b){
                        if(a.name < b.name) { return -1; }
                        if(a.name > b.name) { return 1; }
                        return 0;
                    })
                    for(var i = 0; i < products2.length; i++){
                        if (products[i].category == "cameras"){
                        item += `<div class="product">
                                     <a href="./product.html?id=${products2[i].id}" title="En savoir plus...">
                                    <h2>${products2[i].name}</h2>
                                    <img alt="Manette Xbox 360" src="./assets/img/${products2[i].image}">
                                    <p class="price"><small>Prix</small> ${products2[i].price}&thinsp;$</p>
                                  </a>
                            </div>
                        `
                    }
                    document.getElementById('products-list').innerHTML = item;}
                })
    
                
         document.getElementById("Z-A").addEventListener('click' ,function(){
            var item = '';
            let products2 = products.sort(function(a, b){
                if(b.name < a.name) { return -1; }
                if(b.name > a.name) { return 1; }
                return 0;
            })
            for(var i = 0; i < products2.length; i++){
                if (products[i].category == "cameras"){
                item += `<div class="product">
                             <a href="./product.html?id=${products2[i].id}" title="En savoir plus...">
                            <h2>${products2[i].name}</h2>
                            <img alt="Manette Xbox 360" src="./assets/img/${products2[i].image}">
                            <p class="price"><small>Prix</small> ${products2[i].price}&thinsp;$</p>
                          </a>
                    </div>
                `
            }
            document.getElementById('products-list').innerHTML = item;}
        })
                
                products.sort(function(a, b) {
                    return parseFloat(a.price) - parseFloat(b.price);}
            )
    
                var item = '';
     
                var productCount = 1
    
                for(var i = 0; i < products.length; i++){
                    if (products[i].category == "cameras"){
    
                    var productCount1 =  productCount++;
                    item += `<div class="product">
                               <a href="./product.html?id=${products[i].id}" title="En savoir plus...">
                                <h2>${products[i].name}</h2>
                                <img alt="Manette Xbox 360" src="./assets/img/${products[i].image}">
                                <p class="price"><small>Prix</small>${products[i].price}&thinsp;$</p>
                              </a>
                        </div>
                    `
                    productNumber =  ` ${productCount1} produits  `
                    
                    }
                }
                document.getElementById('products-list').innerHTML = item;
                document.getElementById('products-count').innerHTML = productNumber;
            }
        };
        xhr.open('GET', './data/products.json', true);
        xhr.send();
    }
    
                
    function consoles(){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var products = JSON.parse(xhr.responseText)
    
                document.getElementById("HautBas").addEventListener('click' ,function(){
                    var item = '';
                    let products2 = products.sort(function(a, b) {
                        return parseFloat(b.price) - parseFloat(a.price);
                    }); 
                    for(var i = 0; i < products2.length; i++){
                        if (products[i].category == "consoles"){
                        item += `<div class="product">
                                     <a href="./product.html?id=${products2[i].id}" title="En savoir plus...">
                                    <h2>${products2[i].name}</h2>
                                    <img alt="Manette Xbox 360" src="./assets/img/${products2[i].image}">
                                    <p class="price"><small>Prix</small> ${products2[i].price}&thinsp;$</p>
                                  </a>
                            </div>
                        `
                    }
                    document.getElementById('products-list').innerHTML = item;}
                })
            
                 document.getElementById("basHaut").addEventListener('click' ,function(){
                    var item = '';
                    let products2 = products.sort(function(a, b) {
                        return parseFloat(a.price) - parseFloat(b.price);
                    }); 
                    for(var i = 0; i < products2.length; i++){
                        if (products[i].category == "consoles"){
                        item += `<div class="product">
                                     <a href="./product.html?id=${products2[i].id}" title="En savoir plus...">
                                    <h2>${products2[i].name}</h2>
                                    <img alt="Manette Xbox 360" src="./assets/img/${products2[i].image}">
                                    <p class="price"><small>Prix</small> ${products2[i].price}&thinsp;$</p>
                                  </a>
                            </div>
                        `
                    }
                    document.getElementById('products-list').innerHTML = item;}
                })
    
                document.getElementById("A-Z").addEventListener('click' ,function(){
                    var item = '';
                    let products2 = products.sort(function(a, b){
                        if(a.name < b.name) { return -1; }
                        if(a.name > b.name) { return 1; }
                        return 0;
                    })
                    for(var i = 0; i < products2.length; i++){
                        if (products[i].category == "consoles"){
                        item += `<div class="product">
                                     <a href="./product.html?id=${products2[i].id}" title="En savoir plus...">
                                    <h2>${products2[i].name}</h2>
                                    <img alt="Manette Xbox 360" src="./assets/img/${products2[i].image}">
                                    <p class="price"><small>Prix</small> ${products2[i].price}&thinsp;$</p>
                                  </a>
                            </div>
                        `
                    }
                    document.getElementById('products-list').innerHTML = item;}
                })
    
                document.getElementById("Z-A").addEventListener('click' ,function(){
                    var item = '';
                    let products2 = products.sort(function(a, b){
                        if(b.name < a.name) { return -1; }
                        if(b.name > a.name) { return 1; }
                        return 0;
                    })
                    for(var i = 0; i < products2.length; i++){
                        if (products[i].category == "consoles"){
                        item += `<div class="product">
                                     <a href="./product.html?id=${products2[i].id}" title="En savoir plus...">
                                    <h2>${products2[i].name}</h2>
                                    <img alt="Manette Xbox 360" src="./assets/img/${products2[i].image}">
                                    <p class="price"><small>Prix</small> ${products2[i].price}&thinsp;$</p>
                                  </a>
                            </div>
                        `
                    }
                    document.getElementById('products-list').innerHTML = item;}
                })
    
                products.sort(function(a, b) {
                    return parseFloat(a.price) - parseFloat(b.price);}
                )
    
                var item = '';
     
                var productCount = 1
    
                for(var i = 0; i < products.length; i++){
                    if (products[i].category == "consoles"){
    
                    var productCount1 =  productCount++;
                    item += `<div class="product">
                                 <a href="./product.html?id=${products[i].id}" title="En savoir plus...">
                                <h2>${products[i].name}</h2>
                                <img alt="Manette Xbox 360" src="./assets/img/${products[i].image}">
                                <p class="price"><small>Prix</small>${products[i].price}&thinsp;$</p>
                              </a>
                        </div>
                    `
                    productNumber =  ` ${productCount1} produits  `
                    
                    }
                }
                document.getElementById('products-list').innerHTML = item;
                document.getElementById('products-count').innerHTML = productNumber;
            }
        };
        xhr.open('GET', './data/products.json', true);
        xhr.send();
    }
    
    
    function ecrans(){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var products = JSON.parse(xhr.responseText)
    
                document.getElementById("HautBas").addEventListener('click' ,function(){
                    var item = '';
                    let products2 = products.sort(function(a, b) {
                        return parseFloat(b.price) - parseFloat(a.price);
                    }); 
                    for(var i = 0; i < products2.length; i++){
                        if (products[i].category == "screens"){
                        item += `<div class="product">
                                     <a href="./product.html?id=${products2[i].id}" title="En savoir plus...">
                                    <h2>${products2[i].name}</h2>
                                    <img alt="Manette Xbox 360" src="./assets/img/${products2[i].image}">
                                    <p class="price"><small>Prix</small> ${products2[i].price}&thinsp;$</p>
                                  </a>
                            </div>
                        `
                    }
                    document.getElementById('products-list').innerHTML = item;}
                })
            
                 document.getElementById("basHaut").addEventListener('click' ,function(){
                    var item = '';
                    let products2 = products.sort(function(a, b) {
                        return parseFloat(a.price) - parseFloat(b.price);
                    }); 
                    for(var i = 0; i < products2.length; i++){
                        if (products[i].category == "screens"){
                        item += `<div class="product">
                                     <a href="./product.html?id=${products2[i].id}" title="En savoir plus...">
                                    <h2>${products2[i].name}</h2>
                                    <img alt="Manette Xbox 360" src="./assets/img/${products2[i].image}">
                                    <p class="price"><small>Prix</small> ${products2[i].price}&thinsp;$</p>
                                  </a>
                            </div>
                        `
                    }
                    document.getElementById('products-list').innerHTML = item;}
                })
    
                document.getElementById("A-Z").addEventListener('click' ,function(){
                    var item = '';
                    let products2 = products.sort(function(a, b){
                        if(a.name < b.name) { return -1; }
                        if(a.name > b.name) { return 1; }
                        return 0;
                    })
                    for(var i = 0; i < products2.length; i++){
                        if (products[i].category == "screens"){
                        item += `<div class="product">
                                     <a href="./product.html?id=${products2[i].id}" title="En savoir plus...">
                                    <h2>${products2[i].name}</h2>
                                    <img alt="Manette Xbox 360" src="./assets/img/${products2[i].image}">
                                    <p class="price"><small>Prix</small> ${products2[i].price}&thinsp;$</p>
                                  </a>
                            </div>
                        `
                    }
                    document.getElementById('products-list').innerHTML = item;}
                })
    
                document.getElementById("Z-A").addEventListener('click' ,function(){
                    var item = '';
                    let products2 = products.sort(function(a, b){
                        if(b.name < a.name) { return -1; }
                        if(b.name > a.name) { return 1; }
                        return 0;
                    })
                    for(var i = 0; i < products2.length; i++){
                        if (products[i].category == "screens"){
                        item += `<div class="product">
                                     <a href="./product.html?id=${products2[i].id}" title="En savoir plus...">
                                    <h2>${products2[i].name}</h2>
                                    <img alt="Manette Xbox 360" src="./assets/img/${products2[i].image}">
                                    <p class="price"><small>Prix</small> ${products2[i].price}&thinsp;$</p>
                                  </a>
                            </div>
                        `
                    }
                    document.getElementById('products-list').innerHTML = item;}
                })
    
                products.sort(function(a, b) {
                    return parseFloat(a.price) - parseFloat(b.price);}
                )
    
                var item = '';
     
                var productCount = 1
    
                for(var i = 0; i < products.length; i++){
                    if (products[i].category == "screens"){
    
                    var productCount1 =  productCount++;
                    item += `<div class="product">
                                <a href="./product.html?id=${products[i].id}" title="En savoir plus...">
                                <h2>${products[i].name}</h2>
                                <img alt="Manette Xbox 360" src="./assets/img/${products[i].image}">
                                <p class="price"><small>Prix</small>${products[i].price}&thinsp;$</p>
                              </a>
                        </div>
                    `
                    productNumber =  ` ${productCount1} produits  `
                    
                    }
                }
                document.getElementById('products-list').innerHTML = item;
                document.getElementById('products-count').innerHTML = productNumber;
            }
        };
        xhr.open('GET', './data/products.json', true);
        xhr.send();
    }
    
    
    function ordinateurs(){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var products = JSON.parse(xhr.responseText)
    
                document.getElementById("HautBas").addEventListener('click' ,function(){
                    var item = '';
                    let products2 = products.sort(function(a, b) {
                        return parseFloat(b.price) - parseFloat(a.price);
                    }); 
                    for(var i = 0; i < products2.length; i++){
                        if (products[i].category == "computers"){
                        item += `<div class="product">
                                     <a href="./product.html?id=${products2[i].id}" title="En savoir plus...">
                                    <h2>${products2[i].name}</h2>
                                    <img alt="Manette Xbox 360" src="./assets/img/${products2[i].image}">
                                    <p class="price"><small>Prix</small> ${products2[i].price}&thinsp;$</p>
                                  </a>
                            </div>
                        `
                    }
                    document.getElementById('products-list').innerHTML = item;}
                })
            
                 document.getElementById("basHaut").addEventListener('click' ,function(){
                    var item = '';
                    let products2 = products.sort(function(a, b) {
                        return parseFloat(a.price) - parseFloat(b.price);
                    }); 
                    for(var i = 0; i < products2.length; i++){
                        if (products[i].category == "computers"){
                        item += `<div class="product">
                                     <a href="./product.html?id=${products2[i].id}" title="En savoir plus...">
                                    <h2>${products2[i].name}</h2>
                                    <img alt="Manette Xbox 360" src="./assets/img/${products2[i].image}">
                                    <p class="price"><small>Prix</small> ${products2[i].price}&thinsp;$</p>
                                  </a>
                            </div>
                        `
                    }
                    document.getElementById('products-list').innerHTML = item;}
                })
    
                document.getElementById("A-Z").addEventListener('click' ,function(){
                    var item = '';
                    let products2 = products.sort(function(a, b){
                        if(a.name < b.name) { return -1; }
                        if(a.name > b.name) { return 1; }
                        return 0;
                    })
                    for(var i = 0; i < products2.length; i++){
                        if (products[i].category == "computers"){
                        item += `<div class="product">
                                     <a href="./product.html?id=${products2[i].id}" title="En savoir plus...">
                                    <h2>${products2[i].name}</h2>
                                    <img alt="Manette Xbox 360" src="./assets/img/${products2[i].image}">
                                    <p class="price"><small>Prix</small> ${products2[i].price}&thinsp;$</p>
                                  </a>
                            </div>
                        `
                    }
                    document.getElementById('products-list').innerHTML = item;}
                })
    
                document.getElementById("Z-A").addEventListener('click' ,function(){
                    var item = '';
                    let products2 = products.sort(function(a, b){
                        if(b.name < a.name) { return -1; }
                        if(b.name > a.name) { return 1; }
                        return 0;
                    })
                    for(var i = 0; i < products2.length; i++){
                        if (products[i].category == "computers"){
                        item += `<div class="product">
                                     <a href="./product.html?id=${products2[i].id}" title="En savoir plus...">
                                    <h2>${products2[i].name}</h2>
                                    <img alt="Manette Xbox 360" src="./assets/img/${products2[i].image}">
                                    <p class="price"><small>Prix</small> ${products2[i].price}&thinsp;$</p>
                                  </a>
                            </div>
                        `
                    }
                    document.getElementById('products-list').innerHTML = item;}
                })
    
                products.sort(function(a, b) {
                    return parseFloat(a.price) - parseFloat(b.price);}
                )
    
                var item = '';
     
                var productCount = 1
    
                for(var i = 0; i < products.length; i++){
                    if (products[i].category == "computers"){
    
                    var productCount1 =  productCount++;
                    item += `<div class="product">
                                 <a href="./product.html?id=${products[i].id}" title="En savoir plus...">
                                <h2>${products[i].name}</h2>
                                <img alt="Manette Xbox 360" src="./assets/img/${products[i].image}">
                                <p class="price"><small>Prix</small>${products[i].price}&thinsp;$</p>
                              </a>
                        </div>
                    `
                    productNumber =  ` ${productCount1} produits  `
                    
                    }
                }
                document.getElementById('products-list').innerHTML = item;
                document.getElementById('products-count').innerHTML = productNumber;
            }
        };
        xhr.open('GET', './data/products.json', true);
        xhr.send();
    } 
function categoriesBoutton(){
    var header = document.getElementById("product-categories");
    var btns = header.getElementsByClassName("btn1");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("selected");
      current[0].className = current[0].className.replace(" selected", "");
      this.className += " selected";
      });
    }
    }
categoriesBoutton() 
    function classementBoutton(){
    var header1 = document.getElementById("product-criteria");
    var btns1 = header1.getElementsByClassName("btn2");
    for (var j = 0; j < btns1.length; j++) {
      btns1[j].addEventListener("click", function lol () {
      var current1 = document.getElementsByClassName("selected1");
      current1[0].className = current1[0].className.replace(" selected1", "");
      this.className += " selected1";
      });
    }
    }
classementBoutton()


function countItem(){
    var countText = localStorage.getItem("countText")
    if ( !countText){
        $(".count").hide()
    }
    else{
    $("span.count").html(countText);
    }
    }
    countItem()