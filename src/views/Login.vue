<template>
    <div class="container p-4">
        <div class="row">
            <div class="col -md-3">
                <div class="card animated flipInY">
                    <div class="card-header bg-primary text-white text-center">
                        <h3>
                            Log in
                        </h3>
                    </div>
                    <div class="card-body">
                        <form @submit="login">
                            <div class="form-group">
                                <label for="username">Email address</label>
                                <input name="username" id="username" type="text" class="form-control" placeholder="Username" v-model="username" required/>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Password" name="password" v-model="password" required/>
                            </div>
                            <div class="form-group">
                                <br>
                                <div style="text-align: center">
                                    <input type="submit" value="Submit" class="btn btn-primary">
                                    <input type="button" value="Go Back" onclick="history.back()" class="btn btn-primary">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>        
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
                password: ''
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
                        this.$router.push( {name: 'wallet'})
                    }
                }).catch(error => {
                    if(error.response.status === 400) {
                        alert("Bad credentials");
                    } else {
                        alert("Server comunication error");
                    }
                });
                event.preventDefault();
            }
        }
    }
</script>

<style>

</style>