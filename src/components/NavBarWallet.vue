<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
        <div class="col">
            <h2 class="text-dark">
                <a class="text-dark" v-bind:href="this.link"><i class="fas fa-wallet"></i> UN Wallet</a>
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
        }
    }
}
</script>

<style>

</style>