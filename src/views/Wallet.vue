<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <div class="col">
                <h2 class="text-dark">
                    <a class="text-dark" href="/Wallet"><i class="fas fa-wallet"></i> UN Wallet</a>
                    <span class="float-right">
                        <!--i class="fas fa-user"></i> <%= name + ' ' + lastName %-->
                        {{this.user.post.Usr_name}}
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
                            {{this.user.post.possess[0].Wal_id}}
                            <span class="float-right">
                                <button id="button" type="#" class="btn btn-dark btn-sm" data-clipboard-action="copy" data-clipboard-target="#walletID">Copy</button>
                            </span>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-balance-scale"></i> Balance</h5>
                            <p class="card-text">${{this.user.post.possess[0].Wal_balance}}</p>
                        </div>
                    </div>
                </div>
                <br>
                <!--Here start second card -->
                <div class="card">
                    <h5 class="card-header text-dark bg-light ">Make a Transfer</h5>
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
            response: null
        }
    },
    beforeCreate() {
        const path = '/user/find/' + localStorage.getItem('username');
        axios
            .get(this.$store.state.backURL + path)
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
    } 
}
</script>

<style>

</style>