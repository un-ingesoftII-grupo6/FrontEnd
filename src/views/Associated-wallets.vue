<template>
<div>
    <nav-bar-wallet :username="this.name" :linkProp="this.link"/>
    <br>

    <div class="col -md-4">
        <br>
        <!--starts card management wallets-->
        <div class="row">
            <div class="col -md-8">
                <!--starts card header management wallets-->
                <card class="card animated flipInY">
                    <div class="card-header bg-light text-dark text-left">
                        <h3>
                            <i class="fas fa-money-check"/> Manage Associated Wallets
                        </h3>                        
                    </div>
                    <div class="cardbody">
                        <!--starts card body management wallets-->
                        <div class="form-group">
                            <br>
                            <!--starts wallets-->
                            <div class="overflow-auto">
                                <div class="container">
                                    <div v-for="(item, i) in accounts.users" :key="i">
                                        <div class="card border-info">
                                            <div class="card-body">
                                                <label for="username"><b>Account:</b> {{ item.Wal_id }}</label>
                                                <span class="float-right">
                                                    <router-link class="btn btn-dark" :to="{name: 'setLimits', params: {accountProp: item.Wal_id}}">
                                                        Set state
                                                    </router-link>
                                                    <router-link id="button" to="/make-transfer" class="btn btn-dark">
                                                        Add founds
                                                    </router-link>
                                                </span>                             
                                            </div>                               
                                        </div> 
                                        <br>
                                    </div>                         
                                </div>
                            </div>    
                            <!--end wallets-->                                                                                
                        </div> 
                    </div>
                    <!--end card body management wallets-->
                </card>
                <!--end card header management wallets-->
                <br>
                <br>
                <br>
                <br>
            </div>    
        </div>  
        <!--end card management wallets-->             
    </div>
</div>
</template>

<script>
import axios from 'axios'
import NavBarWallet from '../components/NavBarWallet.vue'

export default {
    name: 'associatedWallets',
    components: {
        NavBarWallet
    },
    data() {
        return {
            name: localStorage.getItem('name'),
            link: '/wallet-enterprise',
            accounts: null,
            response: null
        }
    },
    beforeCreate() {
        const path = '/enterprise/find/managed/' + localStorage.getItem('username');
        axios
            .get(this.$store.state.backURL + path, {
                headers: {
                    'access-token': localStorage.getItem('token')
                } 
            })
            .then(response => {
                if(response.status !== 200) {
                    alert("Request error");
                } else {
                    this.accounts = response.data;
                }
            }).catch(error => {
                if(error.status === 500) {
                    alert("Server error");
                } else {
                    alert(error.response.data);
                }
            });
    }
}
</script>

<style>
.overflow-auto {
  max-height: 450px;
  overflow-y: scroll;
}
</style>