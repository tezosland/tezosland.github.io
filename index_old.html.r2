<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Tezos Land is Reliable and low fee baking service for your Tezos">
    <meta name="author" content="Tezos Land Team">

    <title>Tezos Land is Reliable and Low fee baking service</title>

    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
 
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
    <!-- Custom fonts for this template -->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>

    <script src="vendor/jquery/jquery.min.js"></script>
    <meta content="blue" name="theme-color">
    <!-- Custom styles for this template -->
    <link href="css/agency.min.css" rel="stylesheet">  

    <link rel="icon" href="img/favicon.ico" type="image/x-icon" />
    <link rel="manifest" href="/manifest.json">
    <script src="js/mustache.js"></script>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.css">
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.js"></script>
    <script src="js/tezosLand.js"></script>
  </head>

  <body id="page-top">

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">  <img class="rounded-circle img-fluid" src="img/logo.png" alt=""></a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ml-auto">
              <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#tezosLand">TezosLand</a>
                </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#services">Baking Service</a>
            </li>
             
            <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#FAQ">FAQ</a>
              </li>
            
            
          </ul>
        </div>
      </div>
    </nav>

    <!-- Header -->
    <header class="masthead">
      <div class="container">
        <div class="intro-text">
          <div class="intro-lead-in text-dark" style="font-weight: bold;">Welcome To Tezos Land</div>
          <div  class="subheading" style="font-weight: bold;text-decoration: underline; color:black;">Reliable and low fee baking service for your Tezos</div>
          <a class="btn btn-link  btn-xl text-uppercase text-underline js-scroll-trigger" style="color:#fed136;" href="#tezosLand">More About Baking Service</a>
        </div> 
      </div>
    </header>
    <section id='tezosLand'>
        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <table class='table table-hover table-bordered table-striped'>
                      <thead>
                        <th>
                            Tezos Price in USD:  
                        </th>
                        <th>
                            Tezos Price in BTC:
                        </th>
                      </thead>
                      <tbody>
                          <tr>
                           <td>
                              $<span id='price_usd'></span> 
                           </td>  
                           <td>
                              <span id='price_btc'></span> 
                           </td> 
                            </tr>
                      </tbody>
                    
                    </table>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 offset-md-3 text-center">
                    <a class="text-uppercase text-dark btn-link btn" href='https://tzscan.io/tz1Z1tMai15JWUWeN2PKL9faXXVPMuWamzJj'>
                      Visit to Our Baking Service on TzScan.IO
                      </a>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 ">
              
              
                  <div class="card bg-light">
                    <div class="card-header text-uppercase text-center">Tezos Land DELEGATION ADDRESS</div>
                    <div class="card-body  ">
                      <p class="card-text text-center text-danger"> <span style="font-size:xx-large">tz1Z1tMai15JWUWeN2PKL9faXXVPMuWamzJj
                        </span> </p>
                    </div>
                  </div>
              
                  <div>
              
                    <a target="_blank" class="btn-link btn" href='https://www.youtube.com/watch?v=eD-y1cEwB94'>
                      Importing a fundraiser wallet
                    </a>
                    <a target="_blank" class="btn-link btn" href='https://www.youtube.com/watch?v=C6-lEA3HAec'>
                      How to delegate your Tez using Galleon wallet.
                    </a>
                  </div>
              
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 text-center"> 
                    <table class='table table-bordered table-sm'>
                      <tbody>
                        <tr>
                            <td class="table-dark">
                              TezosLand Security Deposit Balance
                          </td>
                          <td>
                              <span id='Balance'></span> XTZ   ($<span id='BalanceUSD'></span>)
                          </td>
                        </tr>
                        <tr>
                            <td class="table-dark">
                                Total Delegated Tezos
                            </td>
                            <td>
                                <span id='DelegatedTezos'></span> XTZ   ($<span id='DelegatedTezosUSD'></span>) 
                            </td>
                          </tr>
                          <tr>
                              <td class="table-dark">
                                  TezosLand Baking Rewards Distribution
                              </td>
                              <td>
                                  <span>95.5%</span> rewards to YOU  <br>  <span>4.5%</span> for baking fee   
                              </td>
                            </tr>

                      </tbody>
    
                    </table>
                  </div>
                </div>
         
        <div class="row">
            <div class="col-md-12 text-center">
                <a class="text-dark " href="mailto:support@tezosland.com">CONTACT US FOR ANY QUESTIONS OR CONCERNS ABOUT OUR BAKING SERVICE</a>
            </div>
          </div>
        <div class="row">
            <div class="col-md-12 text-center">
                <a class="text-dark " href="mailto:support@tezosland.com?subject=Slack Invitation Request&body=Please send me an invite link.">Join our slack community, Send email to get invitation</a>
            </div>
          </div>
       
       
     
       
        </div>
    </section>
    

         
  
 

    <script id="personDelegatedAccountDetail" type="text/template">
      {{#people}}<b>TzAddress:{{TzAddress}} </b>  TzAddressBalance: {{TzAddressBalance}} <br> {{/people}}
      </script>

    <!-- Services -->
    <section id="services">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Tezos Land Baking Service</h2>
            <h3 class="section-subheading text-muted">Reliable and low fee baking service</h3>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-md-4">
              <div class="timeline-image">
                  <img class="rounded-circle img-fluid" src="img/Anonymous.jpg" alt="">
                </div>
            <h4 class="service-heading">Anonymous</h4>
            <p class="text-muted">NO personal information is required. Delegate your Tezos and earn dividend in every cycle.</p>
          </div>
          <div class="col-md-4">
              <div class="timeline-image">
                  <img class="rounded-circle img-fluid" src="img/expert.png" alt="">
                </div>
            <h4 class="service-heading">Expert Bakers</h4>
            <p class="text-muted">The team behind TezosLand has more than 8 years of software industry experience. We do hard work and you earn.</p>
          </div>
          <div class="col-md-4">
              <div class="timeline-image">
                  <img class="rounded-circle img-fluid" src="img/fee.jpg" alt="">
                </div>
            <h4 class="service-heading">Our Baking Fee</h4>
            <p class="text-muted">TezosLand will get 4.5% fee for the great baking service.</p>
          </div>
        </div>
      </div>
    
    </section>


    <section id="FAQ">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading text-uppercase">Frequently Asked Questions</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <ul class="timeline">
                <li>
                  <div class="timeline-image">
                    <img class="rounded-circle img-fluid" src="img/about/1.png" alt="">
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="subheading">What is the current service fee?</h4>
                    </div>
                    <div class="timeline-body">
                      <p class="text-muted">Our current fee is 4.5%. You will get paid 95.5% of all rewards baked in tezos network for you.</p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-image">
                    <img class="rounded-circle img-fluid" src="img/about/1.png" alt="">
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="subheading">How Can I be a baker?</h4>
                    </div>
                    <div class="timeline-body">
                      <p class="text-muted"> You need 10000 tezos to stake and 7/24 running machine connected Tezos network. </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="timeline-image">
                    <img class="rounded-circle img-fluid" src="img/about/1.png" alt="">
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="subheading">What is DPOS and Delegation?</h4>
                    </div>
                    <div class="timeline-body">
                      <p class="text-muted">Tezos’ DPOS(Delegated Proof of Stake) algorithm is designed so that bakers are called upon to create blocks and receive rewards in proportion to their holdings. Delegation of tezos means you give RIGHTS to use them to create blocks.</p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-image">
                    <img class="rounded-circle img-fluid" src="img/about/1.png" alt="">
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="subheading">Can I lose my tezos when I delegate TezosLand?</h4>
                    </div>
                    <div class="timeline-body">
                      <p class="text-muted">NO, absolutely not. We do not have your tezos but RIGHTS to use them to create blocks. Your tezos will never leave from your wallet.</p>
                    </div>
                  </div>
                </li>
                <li>
                    <div class="timeline-image">
                      <img class="rounded-circle img-fluid" src="img/about/1.png" alt="">
                    </div>
                    <div class="timeline-panel">
                      <div class="timeline-heading">
                        <h4 class="subheading">When will I receive my rewards?</h4>
                      </div>
                      <div class="timeline-body">
                        <p class="text-muted">Your payment will be done as soon as tezos network releases the rewards. Payments will automatically be sent to your KT account so that you can earn more.</p>
                      </div>
                    </div>
                  </li>
                <li class="timeline-inverted">
                    <div class="timeline-image">
                        <a class="nav-link js-scroll-trigger" href="#tezosLand"> <img class=" img-fluid" src="img/about/delegate.png" alt=""></a>
                      </div>
                      
                  
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

  

    <!-- Footer -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-2">
            <a target="_blank" class="text-dark" href='https://tzscan.io/tz1Z1tMai15JWUWeN2PKL9faXXVPMuWamzJj?default=rewards'>Tezos Land Rewards </a>      
          </div>
          <div class="col-md-2">
              <a target="_blank" class="text-dark"  href='https://tzscan.io/tz1Z1tMai15JWUWeN2PKL9faXXVPMuWamzJj?default=baking'> Tezos Land Baking </a>    
            </div>
  

          <div class="col-md-1">
              <a target="_blank" class="text-dark"  href='https://tzscan.io'>
                  TzScan.IO
              </a>
          </div>
          <div class="col-md-2">
              <a target="_blank" class="text-dark"  href='https://tezos.foundation/'>
                 Tezos Foundation
              </a>
          </div>
          <div class="col-md-2">
        
              <a target="_blank" class="text-dark"  href='https://reddit.com/r/tezos'>
                 Reddit
              </a>
              <a target="_blank" class="text-dark"  href='https://twitter.com/TezosFoundation'>
                Twitter
             </a>
             <a target="_blank" class="text-dark"  href='https://www.youtube.com/channel/UCMeXYClRGsIfqS_sqMeolqQ'>
              Youtube
           </a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Portfolio Modals -->


    <!-- Bootstrap core JavaScript -->

    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Contact form JavaScript -->
    <script src="js/jqBootstrapValidation.js"></script>
    <script src="js/contact_me.js"></script>

    <!-- Custom scripts for this template -->
    <script src="js/agency.min.js"></script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-127424289-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-127424289-1');

  $(document).ready( function () {
    setTimeout(function() {       $('#DelegationAccountHtmlTable').DataTable();}, 1000);
} );
</script>

  </body>

</html>
