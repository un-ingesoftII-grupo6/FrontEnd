<template>

<div>
<nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container">
        <div class="col">
            <h2 class="text-primary">
                <a href="/"><i class="fas fa-wallet"></i> UN Wallet</a>
                <span class="float-right">
                    <i class="fas fa-user"></i> <!--%= name + ' ' + lastName %-->
                </span>
            </h2>
        </div>
    </div>
</nav>

<!--2cards same row -->
<div class="container">
    <div class="row pt-6">
        <div class="col-md-5">
                <!--Here start firstcard -->
            <div class="card animated pulse">
                <div class="card">
                    <div class="card-header text-white bg-info" id="walletID" data-clipboard-action="copy" data-clipboard-target="#walletID">
                        <!--%= wallet_user.id_wallet %-->
                        <span class="float-right">
                            <button type="#" class="btn btn-dark btn-sm" data-clipboard-action="copy" data-clipboard-target="#walletID">Copy</button>
                        </span>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">History</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                    </div>
                </div>
            </div>
            <br>
            <!--Here start second card -->
            <div class="card">
                <h5 class="card-header text-white bg-info ">Make a Transfer</h5>
                <div class="card-body">
                    <h5 class="card-title">Easy and Fast</h5>
                    <p class="card-text">Seen money card example here we can put 
                        the max monay that can send a wallet_user attention for type wallet</p>
                    <a href="#" class="btn btn-dark">Send</a>
                </div>
            </div>
        </div>

        <!--second card second row -->
        <div class="col">
            <div class="card">
                <div class="card-header text-white bg-info">                        
                    <h5>Transaction history<span class="float-right"><button class="btn btn-dark">Operations</button></span></h5>                                                  
                </div>
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text"></p>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>

                </div>
            </div>
        </div>
    </div>
    <br>
</div>

<partial name="footer"></partial> 
</div>

</template>

<script>
export default {
    name: "Wallet"
}
</script>

<style>

</style>