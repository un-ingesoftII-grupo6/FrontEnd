<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
        <div class="col">
            <h2 class="text-dark">
                <router-link style="text-decoration: none;"
                    v-bind:to="this.link" class="text-dark">
                    <i class="fas fa-wallet"/> UN Wallet</router-link>
                <span class="float-right">
                    {{ this.name }}
                    <a v-on:click="logOut" href="/" class="btn btn-dark"><i class="fas fa-sign-out-alt"></i> Log out</a>
                </span>
            </h2>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'navBarWallet',
    data() {
        return {
            name: '',
            link: null
        }
    },
    props: {
        username: {
            type: String
        },
        linkProp: {
            type: String
        }
    },
    mounted() {
        this.name = this.username;
        this.link = this.linkProp;
    },
    methods: {
        logOut() {
            localStorage.removeItem('username');
            localStorage.removeItem('token');
            localStorage.removeItem('name');
        }
    }
}
</script>

<style>
a {  text-decoration: none;}
</style>