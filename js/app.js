/**
 * Created by joshbenner on 10/1/16.
 */


var walmartApiUrl = "http://api.walmartlabs.com/v1/items?callback=?";
var upcValidLengths = [5,6,12];

function productInfo(data){
    $.each(data.items,function(i, item){
        console.log(item);
        var cart = $('.cart');

        cart.append("<li>" + item.name + "</li>");
    })
}

$( document ).ready(function() {

    $('.addItem' ).click(function(){
        var item = $('.UPC' ).val();
        console.log(item);
        var options =
        {
            apiKey: "q6dcjsx9c4gxmvks7wnarpkp",
            format: "json",
            upc: item
        };

        $.getJSON(walmartApiUrl, options, productInfo);


    });

    $('.checkout' ).click(function(){

        $(this).removeClass('btn-primary');
        $(this).addClass('btn-success');

    });
});
