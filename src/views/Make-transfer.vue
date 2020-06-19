<template>
<div>
    <nav-bar-wallet :username="this.user.user.Usr_name" :linkProp="this.link"/>
    <br>

    <div class="container p-4">
        <div class="row">
            <div class="col -md-3">
                <div class="card animated flipInY">
                    <div class="card-header bg-light text-dark">
                        <h3>Make transfer</h3>
                    </div>
                    <div class="card-body">
                        <form @submit="transfer">
                            <div class="form-group">
                                <label for="destWallet">Destination Wallet</label>
                                <input name="destWallet" id="destWallet" type="text" class="form-control" placeholder="Destination Wallet" v-model="destWallet" required/>
                            </div>
                            <div class="form-group">
                                <label for="amount">Amount</label>
                                <input type="number" class="form-control" id="amount" placeholder="Amount" name="amount" v-model="amount" required/>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Password" name="password" v-model="password" required/>
                            </div>
                            <div class="form-group">
                                <br>
                                <div>
                                    <input type="button" value="Go Back" onclick="history.back()" class="btn btn-dark">
                                    <input  id="button" type="submit" value="Submit" class="btn btn-dark">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</div>
</template>

<script>
import axios from 'axios'
import NavBarWallet from '../components/NavBarWallet.vue'

export default {
    name: 'Make-transfer',
    components: {
        NavBarWallet
    },
    data(){
        return {
            user: null,
            wallet: null,
            destWallet: '',
            wal_id_sender: '',
            amount: null,
            password: '',                
            response: null,
            link: '/wallet'
        }
    },
    beforeCreate() {
        const pathUser = '/user/find/' + localStorage.getItem('username');
        axios
            .get(this.$store.state.backURL + pathUser, {
                headers: {
                    'access-token': localStorage.getItem('token')
                }
            })
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
        transfer(event) {
            const path = '/movement/send-money';
            axios
                .post(this.$store.state.backURL + path,
                    {
                        wal_id_sender: this.wallet.wallets[0].Wal_id.trim(),
                        wal_id_recipient: this.destWallet.trim(),
                        amount: this.amount,
                        password: this.password
                    },
                    {
                        headers: {
                            'access-token': localStorage.getItem('token')
                        }
                    }
                ).then(response => {
                    if(response.status !== 201) {
                        alert("Transfer storage error");
                    } else {
                        alert("Movement done correctly");
                    }
                }).catch( error =>{
                    if( error.response.status !== 201 ){
                        alert(error.response.data);
                    }
                });
            event.preventDefault( );
            return true;
        }
    } 
}
</script>

<style>

</style>