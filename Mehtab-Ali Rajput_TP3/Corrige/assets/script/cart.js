   /* Mehtab-Ali Rajput 20251387*/

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

var itemRow = localStorage.getItem("itemRow") 
if (!itemRow){
}
else{
 var itemRow = itemRow.replace('null', '')
document.getElementById("tbody").innerHTML = itemRow
}


let count = document.getElementById("myTable").rows.length; 

$(document).ready(function(){
    $("#myTable").on('click','.remove-item-button',function(){
        if (confirm("Voulez vous supprimer le produit du panier ?") == true) {
            $(this).closest('tr').remove();
            var countText = localStorage.getItem("countText")
            count = count - 1 
            var itemRow = localStorage.removeItem( $(this).closest('tr'))
        }
        if ( count - 1 == 0){
            $("#myTable").remove();
            $("p.shopping-cart-total").remove()
            $("a.btn").remove()
            $("button.btn").remove()
            $("#zeroItem").text
                ("Aucun produit dans le panier.");
            $(".count").hide()
            localStorage.clear("itemRow")
        localStorage.setItem('count', 0)
        }
        
     });
     
 });
if ( count - 1 == 0){
    localStorage.clear("itemRow")
    localStorage.setItem('count', 0)
    $("#myTable").remove();
    $("p.shopping-cart-total").remove()
    $("a.btn").remove()
    $("button.btn").remove()
    $("#zeroItem").text
        ("Aucun produit dans le panier.");
}

document.getElementById("remove-all-items-button").addEventListener("click", function(){
    if (confirm("Voulez vous supprimer tous les produits du panier ?") == true) {
        $("#myTable tbody tr").remove()
        $("#myTable").remove();
        $("p.shopping-cart-total").remove()
        $("a.btn").remove()
        $("button.btn").remove()
        $("#zeroItem").text
            ("Aucun produit dans le panier.");
      localStorage.clear("itemRow")
      localStorage.setItem('count', 0)
      $(".count").hide()
      }     
})


function total(){
var total = localStorage.getItem('total')
document.getElementById('price').innerHTML = ` <p id="lool" class="shopping-cart-total">Total: <strong>${total}&thinsp;$</strong></p>`
console.log(total);
}
total()


function add(){
   
}

