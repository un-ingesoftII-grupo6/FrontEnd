<template>
    <div class="col -md-4">
        <br>
        <!--starts card management wallets-->
        <div class="row ">
            <div class="col -md-8">
                <!--starts card header management wallets-->
                <card class="card">
                    <div class="card-header bg-light text-dark text-left">
                        <h3><em class="fas fa-money-check"></em> Manage asociate wallets <input id="button1" type="button" value="Go back" onclick="history.back()" class="btn btn-danger float-right"><span class="float-right"></span></h3>                        
                    </div>
                    <div class="cardbody" >
                        <!--starts card body management wallets-->
                        <div class="form-group-acounts" >
                            <br>
                            <!--starts wallets-->
                            <div class="scrolable">
                                <div class="container"> 
                                    <div class="card border-info">
                                        <div class="card-body 1">
                                        <label for="username">Account:</label>
                                        <a href="/Set-limit" id="button2" type="button" value="Set" class="btn btn-dark float-right">Set</a>                               
                                        </div>                               
                                    </div>                                    
                                </div>
                            </div>    
                            <!--end wallets-->                                                                                
                        </div> 
                    </div>
                    <!--end card body management wallets-->
                </card>
                <!--end card header management wallets-->
            </div>    
        </div>  
        <!--end card management wallets-->             
    </div>
</template>


<script>
export default {
    name: "asociateWallet",
}
</script>

<style>
.scrolable{
    max-height: 400px;
    overflow: scroll;
}
</style>