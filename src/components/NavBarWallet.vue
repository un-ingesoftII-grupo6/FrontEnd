<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
        <div class="col">
            <h3 class="text-dark">
                <router-link style="text-decoration: none;"
                    v-bind:to="this.link" class="text-dark">
                    <em class="fas fa-wallet"/> UN Wallet</router-link>
                <span class="float-right">
                    <a v-on:click="settings(link)" href="/settings" class="btn btn-dark"><em class="fas fa-cogs"/></a>
                    <a v-on:click="logOut" href="/" class="btn btn-dark" style="margin-left: .8em;"><em class="fas fa-sign-out-alt"/> Log out</a>
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
        },
        settings(item) {
            localStorage.removeItem('settings');
            localStorage.setItem('settings', item)
        }
    }
}
</script>

<style>
a { 
    text-decoration: none;
}
</style>