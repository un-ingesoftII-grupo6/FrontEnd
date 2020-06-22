<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
        <div class="col">
            <h2 class="text-dark">
                <router-link style="text-decoration: none;"
                    :to="this.link" class="text-dark">
                    <em class="fas fa-wallet"/> UN Wallet</router-link>
            </h2>
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
