<template>
<div>
    <nav-bar-wallet :username="this.name" :linkProp="this.link"/>
    <br>

    <div class="container p-4">
        <!--starts design card-->        
        <div class="row">
            <div class="col -md-4"></div> 
            <div class="col -md-4">
                <!--starts card-->        
                <card class="card animated flipInY">
                    <div class="card-header bg-light text-dark text-left">
                        <h3><i class="fas fa-balance-scale"></i> Set Limit<span class="float-right"></span></h3>
                    </div>
                    <!--starts card body-->        
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <label for="account">Account</label>
                                <input name="account" id="account" type="text" class="form-control" placeholder="Account" v-model="username" required/>
                            </div>
                            <div class="form-group">
                                <label for="limit">New Limit</label>
                                <input name="limit" id="limit" type="text" class="form-control" placeholder="Limit" v-model="username" required/>
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
            </div>
            <div class="col -md-8"></div>     
        </div>     
        <!--end design card-->                  
    </div>
</div>
</template>

<script>
import NavBarWallet from '../components/NavBarWallet.vue'
export default {
    name: 'setLimits',
    components: {
        NavBarWallet
    },
    data() {
        return {
            link: '/wallet-enterprise'
        }
    }
}
</script>

<style>

</style>