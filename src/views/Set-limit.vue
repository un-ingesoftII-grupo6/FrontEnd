<template>
    <div class="container">
        <br>
        <br>
        <!--starts design card-->        
        <div class="row ">
            <div class="col -md-8"></div> 
            <div class="col -md-8">
                <!--starts card-->        
                <card class="card">
                    <div class="card-header bg-light text-dark text-left">
                        <h3><em class="fas fa-balance-scale"></em> Set Limit<span class="float-right"></span></h3>
                    </div>
                    <!--starts card body-->        
                    <div class="card-body">
                        <form>
                            <div class="form-group1">
                                <label for="username">Account</label>
                                <input name="account" id="account" type="text" class="form-control" placeholder="Account" v-model="username" required/>
                            </div>
                            <div class="form-group2">
                                <label for="username">New Limit</label>
                                <input name="limit" id="limit" type="text" class="form-control" placeholder="Limit" v-model="username" required/>
                            </div>
                            <div class="form-group3">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Password" name="password" v-model="password" required/>
                            </div>
                            <div class="form-group4">
                                <!--starts buttons--> 
                                <div class="form-group5">
                                    <input id="button1" type="button" value="Cancel" onclick="history.back()" class="btn btn-danger">
                                    <input  id="button2" type="submit" value="Submit" class="btn btn-success float-right">
                                </div>
                                <!--end buttons--> 
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
</template>

<script>
export default {
    name: "Set-limit",
}
</script>
