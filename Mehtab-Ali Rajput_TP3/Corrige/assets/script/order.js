$(function verify(){
    var $registerForm = $("#order-form")
    if($registerForm.length){
        $registerForm.validate({
            rules:{
                firstname:{
                    minlength: 2
                },
                lastname:{
                    minlength:2
                },
                email:{
                    email: true
                },
                phone:{
                    phoneUS: true
                },
                creditcard:{
                    creditcard: true
                },
                creditCardExpiry:{
                    expiry: true
                }
            }
        })
    }
})

localStorage.setItem("confirmationNumber", 0)

$(document).ready(function(){
    jQuery.validator.addMethod("expiry", function(value, element) {
        return this.optional(element) || /^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(value);
      }, "La date d’expiration de votre carte de crédit est invalide.");
    });
      
  
      function confirmation() {
        var firstName = document.getElementById("first-name").value;
        var lastName = document.getElementById("last-name").value;
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName" ,lastName);
        var confirmationNumber = (parseInt(localStorage.getItem("confirmationNumber"))+1);
        localStorage.setItem("confirmatioNumber", confirmationNumber.toString());
      };
      
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