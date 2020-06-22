<template>
<div>
    <nav-bar-wallet :username="this.name" :linkProp="this.link"/>
    <br>

    <!--2cards same row -->
    <div class="container">
        <div class="row pt-6">
            <div class="col-md-5">
                <!--Here start firstcard -->
                <div class="card animated pulse">
                    <div class="card">
                        <div class="card-header text-dark bg-light" id="walletID" data-clipboard-action="copy" data-clipboard-target="#walletID">
                            <h6>
                                {{ this.wallet.wallets[0].Wal_id }}
                                <span class="float-right">
                                    <button id="button" type="#" class="btn btn-dark btn-sm" data-clipboard-action="copy" data-clipboard-target="#walletID">Copy</button>
                                </span>
                            </h6>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-balance-scale"></i> Balance</h5>
                            <p class="card-text">${{ new Intl.NumberFormat("de-DE").format(this.wallet.wallets[0].Wal_balance) }}</p>
                        </div>
                    </div>
                </div>
                <br>
                <!--Here start second card -->
                <div class="card">
                    <h5 class="card-header text-dark bg-light "><i class="fas fa-dollar-sign"></i> Make Transfer</h5>
                    <div class="card-body">
                        <h5 class="card-title">Easy and Fast</h5>
                        <p class="card-text">Seen money card example here we can put 
                            the max monay that can send a wallet_user attention for type wallet</p>
                        <router-link :to="{name: 'makeTransfer'}" class="btn btn-dark">
                            <span v-on:click="maketransfer('Make Transfer')">
                                Send
                            </span>
                        </router-link>
                    </div>
                </div>
            </div>

            <!--second card second row -->
            <div class="col">
                <div class="card">
                    <div class="card-header text-dark bg-light">                        
                        <h5>
                            <i class="fas fa-history"/> Transaction History
                            <span class="float-right">
                                <router-link to="/operations" class="btn btn-dark">Operations</router-link>
                            </span>
                        </h5>                                                  
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text"></p>

                        <div v-if="this.movement.wallets[0].modifies_recipient.length === this.movement.wallets[0].modifies_sender.length === 0">
                            You don't have any movements
                        </div>

                        <div v-if="this.movement.wallets[0].modifies_recipient.length > 0">
                            <ul id="modifies-recipient">
                                <h5>Received</h5>
                                <li v-for="(item, i) in movement.wallets[0].modifies_recipient" :key="i">
                                    Date: {{ item.Mov_timestamp }}, Amount: {{ new Intl.NumberFormat("de-DE").format(item.Mov_total_amount) }}
                                </li>
                            </ul>
                        </div>

                        <div v-if="this.movement.wallets[0].modifies_sender.length > 0">
                            <ul id="modifies_sender">
                                <h5>Sent</h5>
                                <li v-for="(item, i) in movement.wallets[0].modifies_sender" :key="i">
                                    Date: {{ item.Mov_timestamp }}, Amount: {{ new Intl.NumberFormat("de-DE").format(item.Mov_total_amount) }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import clipboard from 'clipboard'
import NavBarWallet from '../components/NavBarWallet.vue'

new clipboard('#button');

export default {
    name: 'Wallet',
    components: {
        NavBarWallet
    },
    data(){
        return {
            name: localStorage.getItem('name'),
            wallet: null,
            movement: null,
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

            const pathMovement = '/movement/find/all/' + localStorage.getItem('username');
        axios
            .get(this.$store.state.backURL + pathMovement, {
                headers: {
                    'access-token': localStorage.getItem('token')
                }
            })
            .then(response => {
                if(response.status !== 200) {
                    alert("Request error");
                } else {
                    this.movement = response.data;
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
        maketransfer(item) {
            localStorage.removeItem('namePageMakeTransfer');
            localStorage.removeItem('destWalletMakeTransfer');
            localStorage.setItem('namePageMakeTransfer', item);
        }
    }
}
</script>

<style>

</style>