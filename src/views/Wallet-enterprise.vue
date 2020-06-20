<template>
<div>
    <nav-bar-wallet :username="this.name" :linkProp="this.link"/>
    <br>

    <!--Select scroll need update -->
    <div class="container p-2">
    <!--select v-model="selected">
    <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select-->
    <!--span class="text-white"> Selected: {{ selected }}</span-->
    </div>  <!--end scroll -->  
    <div class="container p-2">
            <div class="row pt-6">
                <!--Here start firstcard -->
                <div class="col">
                    <div class="card">
                        <div class="card-header text-dark bg-light">                        
                            <h5><i class="fas fa-history"></i> Transaction History<span class="float-right"><router-link to="/operations" class="btn btn-dark">Operations</router-link></span></h5>                                                  
                        </div>
                        <div class="card-body">
                            <p class="card-text">
                                Keep the transaction history of both you and the wallets associated with your enterprise wallet handy.
                            </p>
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
                                <h5 class="card-title">${{ new Intl.NumberFormat("de-DE").format(this.enterprise.enterprise.Ent_budget) }}</h5>                             
                            </div>
                        </div>                        
                    </div>
                    <br>               
                    <div class="card animated pulse">
                        <div class="card">
                            <div class="card-header text-dark bg-light" >
                                <span class="float-left">
                                    <h5 class="card-title"><i class="fas fa-tools"/> Wallet Options</h5>
                                </span>
                            </div>
                            <div class="card-body">
                                <ul>
                                    <li>
                                        <p class="card-text">                  
                                            Manage Associated Wallets
                                            <span class="float-right">
                                                <router-link to="/Associated-wallets" class="btn btn-dark btn-sm">
                                                    Manage
                                                </router-link>
                                            </span>
                                        </p>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <p class="card-text">
                                            Create Associated Wallets
                                            <span class="float-right">
                                                <router-link class="btn btn-dark btn-sm" :to="{name: 'signup', params: {wallettype: 3, enterprise_id: this.enterprise.enterprise.Ent_id, pname: 'Create Associated Wallet'}}">
                                                    Create
                                                </router-link>
                                            </span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>                        
                    </div>
                    <br>                                         
                </div>                                
            </div>
            <br>
        </div>       
</div>
</template>
    
<script>
import axios from 'axios'
import NavBarWallet from '../components/NavBarWallet.vue'

export default {
    name: 'walletEnterprise',
    components: {
        NavBarWallet
    },
    data() {
        return {
            name: localStorage.getItem('name'),
            enterprise: null,
            response: null,
            link: '/wallet-enterprise'
        }
    }, beforeCreate() {
        const pathEnterpise = '/enterprise/find/' + localStorage.getItem('username');
        axios
            .get(this.$store.state.backURL + pathEnterpise, {
                headers: {
                    'access-token': localStorage.getItem('token')
                }
            })
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
