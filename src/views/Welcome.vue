<template>
<div id="page-content">
    <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
        <div class="col">
            <h2 class="text-dark">
                <router-link style="text-decoration: none;"
                    to="/" class="text-dark">
                    <em class="fas fa-wallet"/> UN Wallet</router-link>
                <span class="float-right">
                    <router-link to="/login" class="btn btn-dark">Log in</router-link>
                    <router-link id="button" class="btn btn-dark" :to="{name: 'signup'}">
                        <span v-on:click="signup(1, 'Sign up')">
                            Sign up
                        </span>
                    </router-link>
                </span>
            </h2>
        </div>
    </nav>
    <br>

    <div class="container">
        <div class="row">
            <div class="col">
                <img src="../../public/homeimg.png" class="img-thumbnail border border-light" alt="Responsive image">      
            </div>
            <div class="col">
                <div class="card animated pulse">
                    <div class="card">
                        <div class="card-header text-dark bg-light text-center">
                            <h3>UN Wallet advantages</h3>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li>Easy registration</li>
                                <li>Save and recive money</li>                 
                                <li>Recharge your money</li>
                                <li>Save time with UNWallet</li>
                                <li>Fast and secure transactions</li>
                                <li>Make payments to merchants and banks</li>
                                <li>Immediate availability of your money</li>                                              
                                <li>Money on hand without cash</li>                            
                            </ul>
                        </div> 
                    </div>
                </div>
            </div>            
        </div>
        <br>
    </div>
    <div class="container">
        <router-link to="/support" class="btn btn-dark btn-rounded"><em class="far fa-question-circle"/> Support</router-link>
    </div>
</div>
</template>

<script>
export default {
    name: 'welcome',
    methods: {
        signup(item1, item2) {
            localStorage.removeItem('wallettypeSignup');
            localStorage.removeItem('nameSignup');
            localStorage.setItem('wallettypeSignup', item1);
            localStorage.setItem('nameSignup', item2);
        }
    }
}
</script>
