<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
        <div class="col">
            <h3 class="text-dark">
                <router-link style="text-decoration: none;"
                    v-bind:to="this.link" class="text-dark">
                    <i class="fas fa-wallet"/> UN Wallet</router-link>
                <span class="float-right">
                    <a v-on:click="logOut" href="/" class="btn btn-dark"><i class="fas fa-sign-out-alt"/> Log out</a>
                </span>
            </h3>
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
            localStorage.clear();
        }
    }
}
</script>

<style>
a { 
    text-decoration: none;
}
</style>