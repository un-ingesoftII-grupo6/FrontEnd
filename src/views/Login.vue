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
    <footer class = "row text-white text-center">  
        <div class="col -sm-6">                
        </div>          
        <div class="col -sm-6">
        <br><h3> Contact us<a> </a><i class="fas fa-comment"></i></h3>
        </div>
        <div class="col -sm-6">
            <a>Telephone: +57 (1) 1234567<br>Mobil: 3001234567<br>Email: support_un_wallet@gmail.com<br>Chat online</a>
        </div>
        <div class="col -sm-6"> 
        <h3> Social media</h3>
        <i class="fab fa-facebook-square "></i>
        <i class="fab fa-instagram "></i>
        <i class="fab fa-twitter "></i>
        <i class="fab fa-youtube "> </i>               
        </div>
    </footer>
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