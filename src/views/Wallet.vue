<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
        <div class="container">
            <div class="col">
                <h2 class="text-dark">
                    <a class="text-dark" href="/Wallet"><i class="fas fa-wallet"></i> UN Wallet</a>
                    <span class="float-right">
                        <!--i class="fas fa-user"></i> <%= name + ' ' + lastName %-->
                        {{this.user.user.Usr_name}}
                        <a href="/Welcome" class="btn btn-dark"><i class="fas fa-sign-out-alt"></i> Log out</a>
                  
                    </span>
                </h2>
            </div>
        </div>
    </nav>
    <br>

    <!--2cards same row -->
    <div class="container">
        <div class="row pt-6">
            <div class="col-md-5">
                <!--Here start firstcard -->
                <div class="card animated pulse">
                    <div class="card">
                        <div class="card-header text-dark bg-light" id="walletID" data-clipboard-action="copy" data-clipboard-target="#walletID">
                            {{this.wallet.wallets[0].Wal_id}}
                            <span class="float-right">
                                <button id="button" type="#" class="btn btn-dark btn-sm" data-clipboard-action="copy" data-clipboard-target="#walletID">Copy</button>
                            </span>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-balance-scale"></i> Balance</h5>
                            <p class="card-text">${{this.wallet.wallets[0].Wal_balance}}</p>
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
                        <a href="/Make-transfer" class="btn btn-dark">Send</a>
                    </div>
                </div>
            </div>

            <!--second card second row -->
            <div class="col">
                <div class="card">
                    <div class="card-header text-dark bg-light">                        
                        <h5><i class="fas fa-history"></i> Transaction History<span class="float-right"><a href="/Operations" class="btn btn-dark">Operations</a></span></h5>                                                  
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text"></p>
                        <div v-if="this.movement.wallets[0].modifies_recipient !== null">
                            <ul id="modifies-recipient">
                                <h5>Received</h5>
                                <li v-for="(item, i) in movement.wallets[0].modifies_recipient" :key="i">
                                    Date: {{ item.Mov_timestamp }}, Amount: {{ item.Mov_total_amount}}
                                </li>
                            </ul>
                        </div>
                        <div v-if="this.movement.wallets[0].modifies_sender !== null">
                            <ul id="modifies_sender">
                                <h5>Sent</h5>
                                <li v-for="(item, i) in movement.wallets[0].modifies_sender" :key="i">
                                    Date: {{ item.Mov_timestamp }}, Amount: {{ item.Mov_total_amount }}
                                </li>
                            </ul>
                        </div>
                        <div v-if="this.movement.wallets[0].modifies_recipient === this.movement.wallets[0].modifies_sender === null">
                            You don't have any movements
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
import axios from 'axios';
import clipboard from 'clipboard';

new clipboard('#button');

export default {
    name: "Wallet",
    data(){
        return {
            user: null,
            wallet: null,
            movement: null,
            response: null
        }
    },
    beforeCreate() {
        const pathUser = '/user/find/' + localStorage.getItem('username');
        axios
            .get(this.$store.state.backURL + pathUser)
            .then(response => {
                if(response.status !== 200) {
                    alert("Request error");
                } else {
                    this.user = response.data;
                }
            }).catch(error => {
                if(error.status === 500) {
                    alert("Server error");
                } else {
                    alert("Backent conection impossible");
                }
            });
        
        const pathWallet = '/wallet/find/all/' + localStorage.getItem('username');
        axios
            .get(this.$store.state.backURL + pathWallet)
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
            .get(this.$store.state.backURL + pathMovement)
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
    } 
}
</script>

<style>

</style>