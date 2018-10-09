const DELEGATION_ADDRESS ="tz1Z1tMai15JWUWeN2PKL9faXXVPMuWamzJj";
$(document).ready(function() {

    var accountDetailsApiUrl ='https://api1.tzscan.io/v1/node_account/'+DELEGATION_ADDRESS;

    console.log(accountDetailsApiUrl);
    
    $.getJSON(accountDetailsApiUrl,DisplayBalance);
    console.log( "ready!" );


});
function DisplayBalance(data)
{     
    console.log(data);
    $("#Balance").text(data.balance/1000000);
    return false;        
}

function ajaxMethodCall(requestType,postData,ajaxUrl, successFunction) {

    $.ajax({
        url: ajaxUrl,
        type: requestType,
        dataType: "jsonp",
        success: successFunction,
        error: function(jqXHR, exception) {
            if (jqXHR.status === 0) {
                console.error('Not connect.\n Verify Network.');
            } else if (jqXHR.status == 404) {
                console.error('Requested page not found. [404]');
            } else if (jqXHR.status == 500) {
                console.error('Internal Server Error [500].');
            } else if (exception === 'parsererror') {
                console.error('Requested JSON parse failed.');
            } else if (exception === 'timeout') {
                console.error('Time out error.');
            } else if (exception === 'abort') {
                console.error('Ajax request aborted.');
            } else {
                console.error('Uncaught Error.\n' + jqXHR.responseText);
            }
        }
    });
     
}