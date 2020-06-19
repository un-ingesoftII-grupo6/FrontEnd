<template>
<div>
    <nav-bar-wallet :username="this.name" :linkProp="this.link"/>
    <br>

    <div class="col -md-4">
        <br>
        <!--starts card management wallets-->
        <div class="row ">
            <div class="col -md-8">
                <!--starts card header management wallets-->
                <card class="card">
                    <div class="card-header bg-light text-dark text-left">
                        <h3><i class="fas fa-money-check"></i> Manage associated wallets<input id="button1" type="button" value="Go back" onclick="history.back()" class="btn btn-danger float-right"><span class="float-right"></span></h3>                        
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
                                            <span class="float-right">
                                                <router-link to="/set-limits" class="btn btn-dark">Set limit movement</router-link>
                                                <router-link id="button" to="/set-limits" class="btn btn-dark">Add founds</router-link>
                                            </span>                             
                                        </div>                               
                                    </div> 
                                    <br>                              
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
</div>
</template>

<script>
import NavBarWallet from '../components/NavBarWallet.vue'

export default {
    name: 'associatedWallets',
    components: {
        NavBarWallet
    },
    data() {
        return {
            link: '/wallet-enterprise'
        }
    }
}
</script>

<style>
.scrolable{
    max-height: 400px;
    overflow: scroll;
}
</style>