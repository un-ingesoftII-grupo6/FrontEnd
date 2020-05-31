<template>
<div id="page-content">
    <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
        <div class="container">
            <div class="col">
                <h2 class="text-dark">
                    <a class="text-dark" href="/welcome"><i class="fas fa-wallet"></i> UN Wallet</a>
                    <span class="float-right">
                        <a href="/Login" class="btn btn-dark">Log in</a>
                        <a href="/Signup" id="button" class="btn btn-dark">Sign up</a>
                    </span>
                </h2>
            </div>
        </div>
    </nav>
    <br>

    <div class="container">
        <div class="row">
            <div class="col">
                <img src="../../public/homeimg.png" class="img-thumbnail border border-light" alt="Responsive image">      
            </div>
            <div class="col">
                <div class="card animated pulse">
                    <div class="card">
                        <div class="card-header text-dark bg-light text-center">
                            <h3>UN wallet advantages</h3>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li>Easy registration</li>
                                <li>Save and recive money</li>                 
                                <li>Recharge your money</li>
                                <li>Save time with UNWallet</li>
                                <li>Fast and secure transactions</li>
                                <li>Make payments to merchants and banks</li>
                                <li>mmediate availability of your money</li>                                              
                                <li>Money on hand without cash</li>                            
                            </ul>
                        </div> 
                    </div>
                </div>
            </div>            
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "welcome"
}
</script>

<style>
#button {
    margin-left: .8em;
}
</style>