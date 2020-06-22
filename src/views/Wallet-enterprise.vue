<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <div class="col">
                <h2 class="text-dark">
                    <a class="text-dark" href="/Wallet-enterprise"><i class="fas fa-wallet"></i> UN Wallet</a>
                    <span class="float-right">
                        <a v-on:click="localStorage.setItem('username', null)" href="/" class="btn btn-dark"><i class="fas fa-sign-out-alt"></i> Log out</a>                       
                    </span>
                </h2>
            </div>
        </div>
    </nav>
    <br>
    <!--Select scroll need update -->
    <div class="container p-2">
    <select v-model="selected">
    <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <!--span class="text-white"> Selected: {{ selected }}</span-->
    </div>  <!--end scroll -->  
    <div class="container p-2">
            <div class="row pt-6">
                <!--Here start firstcard -->
                <div class="col">
                    <div class="card">
                        <div class="card-header text-dark bg-light">                        
                            <h5><i class="fas fa-history"></i> Transaction history<span class="float-right"><button class="btn btn-dark">Operations</button></span></h5>                                                  
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
                            <br>
                            <br>
                            <br>
                            <br>
                        </div>
                    </div>
                </div>
                <!--second card second row -->
                <div class="col-md-5">                                        
                    <div class="card animated pulse">
                        <div class="card">
                            <div class="card-header text-dark bg-light" >
                                <span class="float-left">
                                    <h5 class="card-title"><i class="fas fa-balance-scale"></i>  Total Balance</h5>
                                </span>
                            </div>
                            <div class="card-body">
                                BALANCE ASIGNADO                             
                            </div>
                        </div>                        
                    </div> <br>               
                    <div class="card animated pulse">
                        <div class="card">
                            <div class="card-header text-dark bg-light" >
                                <span class="float-left">
                                    <h5 class="card-title"><i class="fas fa-balance-scale"></i>  Available Balance</h5>
                                </span>
                            </div>
                            <div class="card-body"> 
                                MAXIMO BALANCE                              
                            </div>
                        </div>                        
                    </div><br> 
                    <div class="card animated pulse">
                        <div class="card">
                            <div class="card-header text-dark bg-light">                        
                             <h5><i class="fas fa-balance-scale"></i> Set Limits<span class="float-right"><button class="btn btn-dark"> SET</button></span></h5><br>
                             <h5><i class="fas fa-balance-scale"></i> Add Founds<span class="float-right"><button class="btn btn-dark">ADD</button></span></h5>                                                 
                            </div>
                        </div>                        
                    </div><br>                                         
                </div>                                
            </div>
            <br>
        </div>       
</div>
</template>

<script>

</script>

<style>

</style>
