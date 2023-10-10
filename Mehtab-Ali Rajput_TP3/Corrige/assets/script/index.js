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