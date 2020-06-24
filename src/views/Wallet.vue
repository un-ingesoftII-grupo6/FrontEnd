<template>
<div>
    <nav-bar-wallet :linkProp="this.link"/>
    <br>

    <!--2cards same row -->
    <div class="container p-2">
    </div>
    <div class="container p-2">
        <div class="row pt-6">
            <!--Here start firstcard -->
            <div class="col">
                <div class="card">
                    <div class="card-header text-dark bg-light text-center">                        
                        <h3>{{ (this.name.slice(-1) === 's') ? this.name : this.name + "'s" }} Wallet</h3>                                                  
                    </div>
                    <div class="card-body text-center">
                        <span id="idwallet" data-clipboard-action="copy" data-clipboard-target="#idwallet" style="cursor: pointer;">
                            {{ this.wallet.wallets[0].Wal_id }}
                        </span>
                    </div>
                </div>
                <br>
                <!--Here start second card -->
                <div class="card">
                    <h5 class="card-header text-dark bg-light "><em class="fas fa-dollar-sign"></em> Make Transfer</h5>
                    <div class="card-body">
                        <h5 class="card-title">Easy and Fast</h5>
                        <p class="card-text">
                            You can send money in a very easy way, all you will need is the destination 
                            wallet number and your password, of course, for more security!
                        </p>
                        <a v-on:click="maketransfer('Make Transfer', '/wallet')" href="/make-transfer" class="btn btn-dark">Send</a>
                    </div>
                </div>
            </div>

            <!--second card second row -->
            <div class="col-md-5">
                <div class="card">
                    <div class="card-header text-dark bg-light">
                        <span class="float-left">
                            <h5 class="card-title"><em class="fas fa-balance-scale"></em> Balance</h5>
                        </span>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">
                            ${{ new Intl.NumberFormat("de-DE").format(this.wallet.wallets[0].Wal_balance) }}
                        </h5>
                    </div>
                </div>
                <br>
                <div class="card">
                    <div class="card-header text-dark bg-light">                        
                        <h5>
                            <em class="fas fa-history"/> Transaction History
                        </h5>                                                  
                    </div>
                    <div class="card-body">
                        <p class="card-text">
                            Look at your movements of the last months in detail one by one 
                            and also in the form of a graph for more control and security.
                        </p>
                        <span class="float-left">
                            <a v-on:click="operationsWallet('/wallet')" href="/operations" class="btn btn-dark">Operations</a>
                        </span>
                    </div>
                </div>
            </div>
            <br>
        </div>    
    </div>
</div>
</template>

<script>
import axios from 'axios'
import clipboard from 'clipboard'
import NavBarWallet from '../components/NavBarWallet.vue'

new clipboard('#idwallet');

export default {
    name: 'Wallet',
    components: {
        NavBarWallet
    },
    data(){
        return {
            name: localStorage.getItem('name'),
            wallet: null,
            response: null,
            link: '/wallet'
        }
    },
    beforeCreate() {
        const pathWallet = '/wallet/find/all/' + localStorage.getItem('username');
        axios
            .get(this.$store.state.backURL + pathWallet, {
                headers: {
                    'access-token': localStorage.getItem('token')
                }
            })
            .then(response => {
                if(response.status !== 200) {
                    alert("Request error");
                } else {
                    this.wallet = response.data;
                }
            }).catch(error => {
                if(error.status === 500) {
                    alert("Server error");
                } else {
                    alert("Backent conection impossible");
                }
            });
    },
    methods: {
        maketransfer(item1, item2) {
            localStorage.removeItem('namePageMakeTransfer');
            localStorage.removeItem('destWalletMakeTransfer');
            localStorage.removeItem('linkMakeTransfer');
            localStorage.setItem('namePageMakeTransfer', item1);
            localStorage.setItem('linkMakeTransfer', item2);
        },
        operationsWallet(item) {
            localStorage.removeItem('usernameOperations');
            localStorage.removeItem('linkOperations');
            localStorage.setItem('linkOperations', item);
        }
    }
}
</script>
