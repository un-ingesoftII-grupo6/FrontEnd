<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
        <div class="col">
            <h2 class="text-dark">
                <a class="text-dark" href="/Wallet"><i class="fas fa-wallet"></i> UN Wallet</a>
                <span class="float-right">
                    <!--i class="fas fa-user"></i> <%= name + ' ' + lastName %-->
                    {{ this.user.user.Usr_name}}
                    <a v-on:click="localStorage.setItem('username', null)" href="/" class="btn btn-dark"><i class="fas fa-sign-out-alt"></i> Log out</a>
                </span>
            </h2>
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
                        <div v-if="this.movement.wallets[0].modifies_recipient === this.movement.wallets[0].modifies_sender === null">
                            You don't have any movements
                        </div>

                        <div v-if="this.movement.wallets[0].modifies_recipient.length > 0">
                            <ul id="modifies-recipient">
                                <h5>Received</h5>
                                <li v-for="(item, i) in movement.wallets[0].modifies_recipient" :key="i">
                                    <b>Date:</b> {{ item.Mov_timestamp }}, <b>Sender:</b> {{item.Wal_id_sender}}, <b>Amount:</b> ${{ item.Mov_total_amount}}
                                </li>
                            </ul>
                        </div>

                        <div v-if="this.movement.wallets[0].modifies_sender.length > 0">
                            <ul id="modifies_sender">
                                <h5>Sent</h5>
                                <li v-for="(item, i) in movement.wallets[0].modifies_sender" :key="i">
                                    <b>Date:</b> {{ item.Mov_timestamp }}, <b>Recipient:</b> {{item.Wal_id_recipient}}, <b>Amount:</b> ${{ item.Mov_total_amount }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <div >
            <div class="card animated flipInY">
                <line-chart
                    :chartdata="chartdata"
                    :options="options"/>
            </div>
        </div>
        <br>
        <br>
        <br>
        <br>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import LineChart from "../components/LineChart.js"

export default {
    name: "Operations",
    components: {
        LineChart
    },
    data(){
        return {
            user: null,
            movement: null,
            response: null,
            chartdata: null,
            options: null
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
    },
    async mounted() {
        this.fillData()
    },
    methods: {
        fillData() {
            this.chartdata = {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July"
                ],
                datasets: [
                    {
                        label: "Received",
                        data: [100000, 500000, 10000, 250000, 800000, 150000, 20000],
                        backgroundColor: "rgba(1, 100, 200, 0.20)",
                        borderColor: "rgba(1, 100, 200, 0.50)",
                        pointBackgroundColor: "rgba(1, 100, 250, 1)"
                    },
                    {
                        label: "Sent",
                        data: [900000, 862500, 100000, 400000, 50000, 620000, 1000000],
                        backgroundColor: "rgba(200, 1, 1, 0.20)",
                        borderColor: "rgba(200, 1, 1, 0.50)",
                        pointBackgroundColor: "rgba(250, 1, 1, 1)"
                    }
                ]
            },
            this.options = {
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: "History"
                }
            }
        }
    }
}
</script>

<style>

</style>