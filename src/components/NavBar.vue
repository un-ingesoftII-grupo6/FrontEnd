<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
        <div class="col">
            <h3 class="text-dark">
                <router-link style="text-decoration: none;"
                    :to="this.link" class="text-dark">
                    <i class="fas fa-wallet"/> UN Wallet</router-link>
            </h3>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'navBar',
    data() {
        return {
            link : null
        }
    },
    props: {
        linkProp: {
            type: String,
            required: true
        }
    },
    mounted() {
        this.link = this.linkProp;
    }
}
</script>

<style>

</style>