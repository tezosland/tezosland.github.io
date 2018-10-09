const DELEGATION_ADDRESS ="tz1Z1tMai15JWUWeN2PKL9faXXVPMuWamzJj";
$(document).ready(function() {

    var postData = JSON.stringify({  });
    var accountDetailsApiUrl ='https://api1.tzscan.io/v1/node_account/'+DELEGATION_ADDRESS;

    console.log(accountDetailsApiUrl);
    ajaxMethodCall("GET",postData,accountDetailsApiUrl,function(data){
        console.log(data);
    })
    console.log( "ready!" );


});


function ajaxMethodCall(requestType,postData,ajaxUrl, successFunction) {

    $.ajax({
        url: ajaxUrl,
        type: requestType,
        dataType: "jsonp",
        success: successFunction
    });
     
}