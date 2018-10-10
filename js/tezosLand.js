const DELEGATION_ADDRESS ="tz1Z1tMai15JWUWeN2PKL9faXXVPMuWamzJj";
$(document).ready(function() {

    var accountDetailsApiUrl ='https://api1.tzscan.io/v1/node_account/'+DELEGATION_ADDRESS;

    console.log(accountDetailsApiUrl);
    
    $.getJSON(accountDetailsApiUrl,function(data)
    {     
        console.log(data);
        var balance=data.balance/1000000;
        var totalCapacity=balance * 12;
        $("#Balance").text(parseFloat(balance).toFixed(2));
        
        
        $.getJSON('https://api2.tzscan.io/v1/staking_balance/'+DELEGATION_ADDRESS,function(data)
        {     
            console.log(data);
            var staking_balance=data[0]/1000000;
            $("#AvailableCapacity").text(parseFloat(totalCapacity-staking_balance).toFixed(2));
            return false;        
        });
        return false;        
    });

    
    console.log( "ready!" );
    $.getJSON('https://api1.tzscan.io/v1/marketcap',function (data)
    {     
        console.log(data);
         $("#price_usd").text(parseFloat(data[0].price_usd).toFixed(2));
         $("#price_btc").text(data[0].price_btc);
        return false;        
    });
    //var rewardsSplit ='https://api6.tzscan.io/v1/rewards_split/?'+DELEGATION_ADDRESS+'cycle=26&p=0&number=10000';
    //$.getJSON(rewardsSplit,function(data){
    //    console.log(data);
    //    return false;   
   // });
});

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