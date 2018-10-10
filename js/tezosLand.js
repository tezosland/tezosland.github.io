const DELEGATION_ADDRESS ="tz1Z1tMai15JWUWeN2PKL9faXXVPMuWamzJj";
$(document).ready(function() {

    var accountDetailsApiUrl ='https://api1.tzscan.io/v1/node_account/'+DELEGATION_ADDRESS;

    console.log(accountDetailsApiUrl);
    
    function formatNumber (num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    }
    
    
    console.log( "ready!" );
    $.getJSON('https://api1.tzscan.io/v1/marketcap',function (data)
    {     
        console.log(data);
        var price_usd=parseFloat(data[0].price_usd);
         $("#price_usd").text(price_usd.toFixed(2));
         $("#price_btc").text(data[0].price_btc);


         $.getJSON(accountDetailsApiUrl,function(data)
         {     
             console.log(data);
             var balance=data.balance/1000000;
             var totalCapacity=balance * 12;
             $("#Balance").text(parseFloat(balance).toFixed(2));
             $("#BalanceUSD").text(formatNumber(parseFloat(price_usd*balance).toFixed(2)));
             
             $.getJSON('https://api2.tzscan.io/v1/staking_balance/'+DELEGATION_ADDRESS,function(data)
             {     
                 console.log(data);
                 var staking_balance=data[0]/1000000;
                 $("#DelegatedTezos").text(parseFloat(staking_balance).toFixed(2));
                 $("#DelegatedTezosUSD").text(formatNumber(parseFloat(staking_balance*price_usd).toFixed(2)));
                 $("#AvailableCapacity").text(parseFloat(totalCapacity-staking_balance).toFixed(2));
                 return false;        
             });
             return false;        
         });

         

        return false;        
    });
   
});

 