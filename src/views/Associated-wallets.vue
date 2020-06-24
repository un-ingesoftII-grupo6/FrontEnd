<template>
<div>
    <nav-bar-wallet :linkProp="this.link"/>
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
                            <em class="fas fa-money-check"/> Manage Associated Wallets
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
                                                <label for="username">
                                                    <strong>Nombre:</strong> {{ item.possess.Usr_name + ' ' + item.possess.Usr_surname }}, <strong>Username:</strong> {{ item.possess.Usr_username }}
                                                    </label>
                                                <span v-if="typePage === 'manage'">
                                                    <span class="float-right">
                                                        <a v-on:click="setlimits(item.Wal_id)" href="/set-limits" class="btn btn-dark">Set State</a>
                                                        <a v-on:click="addfunds('Add Funds', item.Wal_id, '/wallet-enterprise')" href="/make-transfer" class="btn btn-dark" style="margin-left: .8em;">Add Funds</a>
                                                    </span> 
                                                </span>
                                                <span v-else-if="typePage === 'history'">
                                                    <span class="float-right">
                                                        <a v-on:click="operationsWalletAssociated(item.possess.Usr_username, '/wallet-enterprise')" href="/operations" class="btn btn-dark">History</a>
                                                    </span>
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
            link: '/wallet-enterprise',
            accounts: null,
            response: null,
            typePage: localStorage.getItem('typePageAW')
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
    },
    methods: {
        setlimits(item) {
            localStorage.removeItem('accountSetLimits');
            localStorage.setItem('accountSetLimits', item);
        },
        addfunds(item1, item2, item3) {
            localStorage.removeItem('namePageMakeTransfer');
            localStorage.removeItem('destWalletMakeTransfer');
            localStorage.removeItem('linkMakeTransfer');
            localStorage.setItem('namePageMakeTransfer', item1);
            localStorage.setItem('destWalletMakeTransfer', item2);
            localStorage.setItem('linkMakeTransfer', item3);
        },
        operationsWalletAssociated(item1, item2) {
            localStorage.removeItem('usernameOperations');
            localStorage.removeItem('linkOperations');
            localStorage.setItem('usernameOperations', item1);
            localStorage.setItem('linkOperations', item2);
        }
    } 
}
</script>

<style>

.overflow-auto {
  max-height: 450px;
  overflow-y: scroll;
}
</style>