<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
        <div class="container">
            <div class="col">
                <h2 class="text-dark">
                    <a class="text-dark" href="/welcome"><i class="fas fa-wallet"></i> UN Wallet</a>
                    <span class="float-right">
                        <i class="fas fa-user"></i> <!--%= name + ' ' + lastName %-->                    
                    </span>
                </h2>
            </div>
        </div>
    </nav>
    <br>
    <div class="container p-4">
        <div class="row ">
            <div class="col -md-4"></div>
            <div class="col -md-4">
                <div class="card animated flipInY">
                    <div class="card-header bg-light text-dark text-center">
                        <h3>
                            Log in
                        </h3>
                    </div>
                    <div class="card-body">
                        <form @submit="login">
                            <div class="form-group">
                                <label for="username">Username</label>
                                <input name="username" id="username" type="text" class="form-control" placeholder="Username" v-model="username" required/>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Password" name="password" v-model="password" required/>
                            </div>
                            <div class="form-group">
                                <br>
                                <div>
                                    <input type="button" value="Go Back" onclick="history.back()" class="btn btn-dark">
                                    <input  id="button" type="submit" value="Submit" class="btn btn-dark">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col -md-4"></div>            
        </div>               
    </div>
    <br>
    <br>
</div> 
</template>

<script>
    import axios from 'axios';

    const path = "/user/login";
    
    export default {
        name: "Login",
        data(){
            return {
                username: '',
                password: '',                
                response: null
            }
        },
        methods: {
            login(event) {
                axios
                .post(this.$store.state.backURL + path,
                    {
                        username: this.username.trim(),
                        password: this.password
                    }
                ).then(response => {
                    if(response.status !== 200) {
                        alert("Authentication error");
                    } else {
                        localStorage.setItem('username', this.username);
                        this.$router.push( {name: 'wallet'});
                    }
                }).catch(error => {
                    if(error.response.status === 400) {
                        alert("Bad credentials");
                    } else if(error.response.status === 401){
                        alert("The password is incorrect");
                    } else if(error.response.status === 404) {
                        alert("This username does not exist in the database");
                    } else {
                        alert("Server comunication error");
                    }
                });
                event.preventDefault();
                return true;
            }
        }
    }
</script>

<style>
#button {
    margin-left: .8em;
}

</style>