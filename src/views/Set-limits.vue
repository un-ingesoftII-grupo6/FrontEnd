<template>
<div>
    <nav-bar-wallet :linkProp="this.link"/>
    <br>
    
    <div class="col -md-4">
        <!--starts design card-->        
        <div class="row">
            <div class="col -md-4">
            
            </div> 
            <div class="col -md-4">
                <!--starts card-->        
                <card class="card animated flipInY">
                    <div class="card-header bg-light text-dark text-left">
                        <h3><em class="fas fa-tools"/> Set Wallet State<span class="float-right"></span></h3>
                    </div>
                    <!--starts card body-->        
                    <div class="card-body">
                        <form @submit="update">
                            <div class="form-group">
                                <label for="account">Account</label>
                                <input name="account" id="account" type="text" class="form-control" v-model="account" placeholder="Account" disabled required/>
                            </div>
                            <div class="form-group">
                                <label for="state">State</label>
                                <select id="state" class="browser-default custom-select" v-model="state" required>
                                    <option disabled selected>Choose</option>
                                    <option value="Active">Active</option>
                                    <option value="Disabl">Inactive</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="movement-limit">New Movement Limit</label>
                                <input name="movement-limit" id="movement-limit" type="number" class="form-control" placeholder="New Movement Limit" v-model="movementLimit"/>
                            </div>
                            <div class="form-group">
                                <label for="month-limit">New Month Limit</label>
                                <input name="month-limit" id="month-limit" type="number" class="form-control" placeholder="New Month Limit" v-model="monthLimith"/>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Password" name="password" v-model="password" required/>
                            </div>
                            <div class="form-group">
                                <input id="button1" type="button" value="Cancel" onclick="history.back()" class="btn btn-danger">
                                <input id="button1" type="submit" value="Submit" class="btn btn-success float-right">
                            </div>
                        </form>                         
                    </div>
                    <!--starts card body-->                            
                </card>
                <!--end card--> 
                <br>
                <br>
                <br>
                <br> 
            </div>
            <div class="col -md-4"></div>     
        </div>     
        <!--end design card-->                  
    </div>
</div>
</template>

<script>
import axios from 'axios'
import NavBarWallet from '../components/NavBarWallet.vue'

export default {
    name: 'setLimits',
    components: {
        NavBarWallet
    },
    data() {
        return {
            link: '/wallet-enterprise',
            account: localStorage.getItem('accountSetLimits'),
            user: localStorage.getItem('userSetLimits'),
            state: null,
            movementLimit: null,
            monthLimith: null,
            password: '',
            response: null
        }
    },
    methods: {
        update(event) {
            const path = '/wallet/edit/' + this.user + '/' + this.account
            
            axios
                .put(this.$store.state.backURL + path,
                    {
                        state: this.state,
                        new_movement_limit: this.movementLimit,
                        new_month_limit: this.monthLimith,
                        password: this.password,
                    },
                    {
                        headers: {
                            'access-token': localStorage.getItem('token')
                        } 
                    }
                ).then(response => {
                    if(response.status !== 200) {
                            alert("Wallet status update error");
                        } else {
                            alert("Wallet status updated correctly");
                        }
                }).catch(error => {
                    if(error.response.status !== 200){
                            alert(error.response.data);
                    }
                });
            event.preventDefault( );
            return true;
        }
    }
}
</script>
