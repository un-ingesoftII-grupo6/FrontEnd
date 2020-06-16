<template>
<div>
    <nav-bar-wallet :username="this.enterprise.enterprise.Ent_name" :linkProp="this.link"/>
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
                        </div>
                    </div>
                </div>
                <!--second card second row -->
                <div class="col-md-5">                                        
                    <div class="card animated pulse">
                        <div class="card">
                            <div class="card-header text-dark bg-light" >
                                <span class="float-left">
                                    <h5 class="card-title"><i class="fas fa-balance-scale"></i> Total Balance</h5>
                                </span>
                            </div>
                            <div class="card-body">
                                <p class="card-text">${{ this.enterprise.enterprise.Ent_budget }}</p>                             
                            </div>
                        </div>                        
                    </div>
                    <br>               
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
import axios from 'axios';
import NavBarWallet from '../components/NavBarWallet.vue'

export default {
    name: 'walletEnterprise',
    components: {
        NavBarWallet
    },
    data() {
        return {
            enterprise: null,
            response: null,
            link: '/Wallet-enterprise'
        }
    }, beforeCreate() {
        const pathEnterpise = '/enterprise/find/' + localStorage.getItem('username');
        axios
            .get(this.$store.state.backURL + pathEnterpise)
            .then(response => {
                if(response.status !== 200) {
                    alert("Request error");
                } else {
                    this.enterprise = response.data;
                }
            }).catch(error => {
                if(error.status === 500) {
                    alert("Server error");
                } else {
                    alert("Backent conection impossible");
                }
            });
    }
}
</script>

<style>

</style>
