const DELEGATION_ADDRESS ="tz1Z1tMai15JWUWeN2PKL9faXXVPMuWamzJj";
$(document).ready(function() {
 
    $( "#RewardsDistribution" ).click(function() {
        GetRewards();
      });

      function GetRewards()
      {
        var cycle=39;
        var pageNumber=100;
        var rewardsSplit='https://api1.tzscan.io/v1/rewards_split/'+DELEGATION_ADDRESS+'?cycle='+cycle+'&p=0&number='+pageNumber;
        $.getJSON(rewardsSplit,function(data)
        {     
            var future_blocks_rewards=data.future_blocks_rewards;
            var future_endorsements_rewards = data.future_endorsements_rewards;
            var people = []; 
            $.each(data.delegators_balance, function (index, value) {
                var tzAddress=value[0];
                var tzAddressBalance=value[1];
                console.log(tzAddressBalance+" "+tzAddress.tz);
                var person = {
                    TzAddress: value[0].tz,
                    TzAddressBalance: value[1]
                };
                people.push(person);
              });
            console.log(data);
            

        //    var obj = {people: JSON.parse(text)};
          
            var template = $('#personTpl').html();
            var html = Mustache.to_html(template, {people:people,future_blocks_rewards,future_endorsements_rewards});
            $('#sampleArea').html(html);

            return false;        
        });
      }

    var accountDetailsApiUrl ='https://api1.tzscan.io/v1/node_account/'+DELEGATION_ADDRESS;

    console.log(accountDetailsApiUrl);
    
    function formatNumber (num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    }
    
    var fixedRounding=3;
    console.log( "ready!" );

  
    
    $.getJSON('https://api1.tzscan.io/v1/marketcap',function (data)
    {     
        console.log(data);
        var price_usd=parseFloat(data[0].price_usd);
         $("#price_usd").text(price_usd.toFixed(fixedRounding));
         $("#price_btc").text(data[0].price_btc);


         $.getJSON(accountDetailsApiUrl,function(data)
         {     
             console.log(data);
             var balance=data.balance/1000000;
             var totalCapacity=balance * 12;
             $("#Balance").text(formatNumber(parseFloat(balance).toFixed(fixedRounding)));
             $("#BalanceUSD").text(formatNumber(parseFloat(price_usd*balance).toFixed(fixedRounding)));
             
             $.getJSON('https://api2.tzscan.io/v1/staking_balance/'+DELEGATION_ADDRESS,function(data)
             {     
                 console.log(data);
                 var staking_balance=data[0]/1000000;
                 
                 var delegatedBalance = staking_balance-balance;
                 $("#DelegatedTezos").text(formatNumber(parseFloat(delegatedBalance).toFixed(fixedRounding)));
                 $("#DelegatedTezosUSD").text(formatNumber(parseFloat(delegatedBalance*price_usd).toFixed(fixedRounding)));
              //   $("#AvailableCapacity").text(parseFloat(totalCapacity-staking_balance).toFixed(fixedRounding));
                 return false;        
             });
             return false;        
         });



         

        return false;        
    });
    
});

 