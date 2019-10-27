const DELEGATION_ADDRESS = "tz1Z1tMai15JWUWeN2PKL9faXXVPMuWamzJj";
$(document).ready(function () {

    $("#RewardsDistribution").click(function () {


        try {
            GetRewards();
        }
        catch (err) {
            console.log(err.message);
        }
    });

    $("#copyDelegationAddress").click(function () {
        $("#textboxDelegationAddress").select();
        document.execCommand('copy');
        $("#copyp").show();
    });


    function GetRewards() {
        var cycle = 39;
        var pageNumber = 100;
        var rewardsSplit = 'https://api1.tzscan.io/v1/rewards_split/' + DELEGATION_ADDRESS + '?cycle=' + cycle + '&p=0&number=' + pageNumber;
        $.getJSON(rewardsSplit, function (data) {
            var future_blocks_rewards = data.future_blocks_rewards;
            var future_endorsements_rewards = data.future_endorsements_rewards;
            var people = [];
            $.each(data.delegators_balance, function (index, value) {
                var tzAddress = value[0];
                var tzAddressBalance = value[1];
                console.log(tzAddressBalance + " " + tzAddress.tz);
                var person = {
                    TzAddress: value[0].tz,
                    TzAddressBalance: value[1]
                };
                people.push(person);
            });
            console.log(data);


            //    var obj = {people: JSON.parse(text)};

            var template = $('#personTpl').html();
            var html = Mustache.to_html(template, { people: people, future_blocks_rewards, future_endorsements_rewards });
            $('#sampleArea').html(html);

            return false;
        });
    }

    var accountDetailsApiUrl = 'https://api1.tzscan.io/v1/node_account/' + DELEGATION_ADDRESS;
    var bondsApiUrl = 'https://api1.tzscan.io/v1/bonds_rewards/' + DELEGATION_ADDRESS;

    console.log(accountDetailsApiUrl);

    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    }

    var fixedRounding = 3;
    console.log("ready!");



    try {
        GetNodeDetailData();
    }
    catch (err) {
        console.log(err.message);
    }
	
	

    function GetNodeDetailData() {
        $.getJSON('https://api1.tzscan.io/v1/marketcap', function (data) {
            console.log(data);
            var price_usd = parseFloat(data[0].price_usd);
            $("#price_usd").text(price_usd.toFixed(fixedRounding));
            $("#price_btc").text(data[0].price_btc);


            $.getJSON(accountDetailsApiUrl, function (data) {
                console.log(data);
                var balance = data.balance / 1000000;
               
                $("#Balance").text(formatNumber(parseFloat(balance).toFixed(fixedRounding)));
                $("#BalanceUSD").text(formatNumber(parseFloat(price_usd * balance).toFixed(fixedRounding)));

                $.getJSON('https://api2.tzscan.io/v1/staking_balance/' + DELEGATION_ADDRESS, function (data) {
                    console.log(data);
                    var staking_balance = data[0] / 1000000;

                    var delegatedBalance = staking_balance - balance;
                    $("#DelegatedTezos").text(formatNumber(parseFloat(delegatedBalance).toFixed(fixedRounding)));
                    $("#DelegatedTezosUSD").text(formatNumber(parseFloat(delegatedBalance * price_usd).toFixed(fixedRounding)));
                    //   $("#AvailableCapacity").text(parseFloat(totalCapacity-staking_balance).toFixed(fixedRounding));

					// {"block_rewards":160000000,"block_deposits":"3376000000","block_acc_fees":0,"endorsements_rewards":599000000,"endorsement_deposits":"12494000000"}
					$.getJSON(bondsApiUrl, function (data) {
						console.log(data);
						var reserved_balance = parseInt(data.block_rewards)+parseInt(data.block_deposits)+parseInt(data.block_acc_fees)+parseInt(data.endorsements_rewards)+parseInt(data.endorsement_deposits);
						var reserved_balance = reserved_balance / 1000000;
						var total_balance = reserved_balance+balance;
						var totalCapacity = total_balance * 7.94;
						var capacity_usage = 100 * staking_balance/totalCapacity;
						capacity_usage = capacity_usage.toFixed(2)
						
						var controlButton = $('#capacityBar');
						controlButton.progressSet(capacity_usage);
						controlButton.attr({'data-loading':'Capacity Usage: %perc%%'.replace('%perc%',capacity_usage)})
						
						if(capacity_usage>95){
							$("#underdel").hide();
							$("#overdel").show();
						}else if (capacity_usage>80){
							$("#remcapdiv").show();
							$("#remcap").text("Available capacity is %tez% tz".replace('%tez%',(totalCapacity-staking_balance).toFixed(2)));
						}
						return false;
					});
					
					
                    return false;
                });
                return false;
            });

            return false;
        });
        try {
        //    GetEachDelegatedAccountDetail();
        }
        catch (err) {
            console.log(err.message);
        }
    }
//https://api2.tzscan.io/v1/delegator_rewards_with_details/KT1PEZ91VnphKodWSfuvCcjXrA29zfHsgUxt?p=0&number=100

    $("#DelegatorRewardsBtn").click(function() {
         GetDelegatorRewardsWithDetails($("#DelegatorRewardsAddress").val());
    });

    function GetDelegatorRewardsWithDetails(delegatorAddress){
        var template = $('#delegatorRewardsWithDetailsTemplateHtml').html();
        delegatorAddress=delegatorAddress.trim();
      console.log(delegatorAddress);
   
        var delegator_rewards_with_details = 'https://api2.tzscan.io/v1/delegator_rewards_with_details/' + delegatorAddress + '?p=0&number=200'
        $.getJSON(delegator_rewards_with_details, function (data) {
            
            var totalRewards=0;
            var XtzLandDelegator=false;
            var delegatorRewardsList = new Array();
            $.each(data, function (index, value) {
                data[index].IsOurDelegatorInThatCycle=value.delegate.tz === DELEGATION_ADDRESS;

                if(data[index].IsOurDelegatorInThatCycle)
                {
                 XtzLandDelegator = data[index].IsOurDelegatorInThatCycle;

                 var addressBalance = value.balance / 1000000;
                 var formattedBalance = formatNumber(parseFloat(addressBalance).toFixed(2));

                 data[index].formattedBalance=formattedBalance;
               

                 var addressrewards = (value.balance / value.staking_balance) * (value.rewards / 1000000);
                 addressrewards=addressrewards/100 * 95.5;

                 var formattedRewards = formatNumber(parseFloat(addressrewards).toFixed(2));
                 data[index].formattedRewards=formattedRewards;

                    totalRewards+=addressrewards;


                    var formattedStatus="";
                    if(value.status.status === "cycle_pending"){
                       formattedStatus="Cycle Pending";
                    }else if(value.status.status === "cycle_in_progress"){      
                       formattedStatus="Cycle In Progress";
                   }else if(value.status.status === "rewards_pending"){  
                       formattedStatus="Rewards Pending";
                   }else if(value.status.status === "rewards_delivered"){  
                       formattedStatus="Rewards Delivered";
                   }
   
                    data[index].formattedStatus = formattedStatus;
   
   
                    var rowStyleClass="";
                    if(value.status.status === "cycle_pending"){
                       rowStyleClass="table-secondary";
                    }else if(value.status.status === "cycle_in_progress"){      
                       rowStyleClass="table-info";
                   }else if(value.status.status === "rewards_pending"){  
                       rowStyleClass="table-warning";
                   }else if(value.status.status === "rewards_delivered"){  
                       rowStyleClass="table-success";
                   }
                   data[index].rowStyleClass = rowStyleClass;
                 }

            });

             
            var renderedHtml = Mustache.to_html(
                template, 
                {
                 delegatorRewards:data,
                 totalRewards:totalRewards,
                 XtzLandDelegator:XtzLandDelegator}
                 );


            $('#delegatorRewardsWithDetailsResultHtml').empty();
            $('#delegatorRewardsWithDetailsResultHtml').html(renderedHtml);
        });
    }



    function GetEachDelegatedAccountDetail() {

        var template = $('#delegatedAccountDetail').html();
        var delegatedAccountDetailCntTemplate = $('#delegatedAccountDetailCnt').html();
        var apiOriginations_delegate = 'https://api6.tzscan.io/v1/operations/' + DELEGATION_ADDRESS + '?type=Delegation&p=0&number=200'
        $.getJSON(apiOriginations_delegate, function (data) {
            var totalDelegatedAccount = data.length;
            var delegatedList = new Array();
            data.reverse();
            $.each(data, function (index, value) {
                value.type.source['IsDelegatedAccount'] = !(value.type.source.tz === DELEGATION_ADDRESS);
            });

            var html2 = Mustache.to_html(delegatedAccountDetailCntTemplate, { Delegation: data });

            $('#delegatedAccountDetailCntArea').html(html2);

            $.each(data, function (index, value) {

                var delegatedSource = value.type.source.tz;

                var delegatedSourceApiUrl = 'https://api1.tzscan.io/v1/node_account/' + delegatedSource;
                var delegatedSourceBalance = '';


                $.getJSON(delegatedSourceApiUrl, function (delegatedSourceData) {
                    console.log(delegatedSourceData);
                    var addressBalance = delegatedSourceData.balance / 1000000;
                    var formattedBalance = formatNumber(parseFloat(addressBalance).toFixed(2))
                    var MustacheData = {
                        TzAddress: delegatedSourceData.name.tz,
                        TzAddressBalance: formattedBalance,
                        TzAddressIndex: index + 1
                    };
                    var html = Mustache.to_html(template, MustacheData);
                    $('#' + delegatedSourceData.name.tz).html(html);
                });


            });


            console.log(data);

            return false;
        });


    }

});

