/* Mehtab-Ali Rajput 20251387*/
/* La page confirmation de marche pas sur local host mais si vou
ouvrez la page sans local host et ecrire dans le url confirmation.html
vous pouvez la voir*/


function confirmationPage(){
    var storedFirstName = localStorage.getItem("firstName");
    var storedLastName = localStorage.getItem("lastName");
    var confirmationNumber = localStorage.getItem("confirmatioNumber")
    document.getElementById("name").innerHTML =
   "Votre commande est confirmée "  + storedFirstName + "&nbsp" + storedLastName + "!";
   document.getElementById("confirmation-number").innerHTML = confirmationNumber
}
confirmationPage()


   function countItem(){
    var countText = localStorage.setItem("countText", 0)
    if ( !countText){
        $(".count").hide()
    }
    else{
    $("span.count").html(countText);
    }
    }
    countItem()

