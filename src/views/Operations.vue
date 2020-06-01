<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
        <div class="container">
            <div class="col">
                <h2 class="text-dark">
                    <a class="text-dark" href="/Wallet"><i class="fas fa-wallet"></i> UN Wallet</a>
                    <span class="float-right">
                        <!--i class="fas fa-user"></i> <%= name + ' ' + lastName %-->
                        {{this.user.user.Usr_name}}
                        <a href="/Welcome" class="btn btn-dark"><i class="fas fa-sign-out-alt"></i> Log out</a>
                    </span>
                </h2>
            </div>
        </div>
    </nav>
    <br>

    <div class="container p-3">
        <div class="row">
            <div class="col -md-0 offset -md-0">
                <div class="card animated flipInY">
                    <div class="card-header bg-light text-dark">
                        <h3><i class="fas fa-history"></i> Operations</h3>
                    </div>
                    <div class="card-body">
                        <div v-if="this.movement.wallets[0].modifies_recipient !== null">
                            <ul id="modifies-recipient">
                                <h5>Received</h5>
                                <li v-for="(item, i) in movement.wallets[0].modifies_recipient" :key="i">
                                    <b>Date:</b> {{ item.Mov_timestamp }}, <b>Sender:</b> {{item.Wal_id_sender}}, <b>Amount:</b> ${{ item.Mov_total_amount}}
                                </li>
                            </ul>
                        </div>
                        <div v-if="this.movement.wallets[0].modifies_sender !== null">
                            <ul id="modifies_sender">
                                <h5>Sent</h5>
                                <li v-for="(item, i) in movement.wallets[0].modifies_sender" :key="i">
                                    <b>Date:</b> {{ item.Mov_timestamp }}, <b>Recipient:</b> {{item.Wal_id_recipient}}, <b>Amount:</b> ${{ item.Mov_total_amount }}
                                </li>
                            </ul>
                        </div>
                        <div v-if="this.movement.wallets[0].modifies_recipient === this.movement.wallets[0].modifies_sender === null">
                            You don't have any movements
                        </div>
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
    name: "Operations",
    data(){
        return {
            user: null,
            movement: null,
            response: null
        }
    },
    beforeCreate() {
        const pathUser = '/user/find/' + localStorage.getItem('username');
        axios
            .get(this.$store.state.backURL + pathUser)
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

            const pathMovement = '/movement/find/all/' + localStorage.getItem('username');
        axios
            .get(this.$store.state.backURL + pathMovement)
            .then(response => {
                if(response.status !== 200) {
                    alert("Request error");
                } else {
                    this.movement = response.data;
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