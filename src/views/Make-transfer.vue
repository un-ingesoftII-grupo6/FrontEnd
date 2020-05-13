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
                        <a v-on:click="localStorage.setItem('username', null)" href="/Welcome" class="btn btn-dark"><i class="fas fa-sign-out-alt"></i> Log out</a>                    
                    </span>
                </h2>
            </div>
        </div>
    </nav>
    <br>

    <div class="container p-4">
        <div class="row">
            <div class="col -md-3">
                <div class="card animated flipInY">
                    <div class="card-header bg-light text-dark">
                        <h3>Make transfer</h3>
                    </div>
                    <div class="card-body">
                        <form @submit="login">
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
import axios from 'axios';

export default {
    name: "Make-transfer",
    data(){
        return {
            user: null,
            destWallet: '',
            amount: '',
            password: '',                
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