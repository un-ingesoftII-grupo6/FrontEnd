<template>
<div>
    <NavBar/>
    <br>
    
    <div class="container p-4">
        <div class="row ">
            <div class="col -md-4"></div>
            <div class="col -md-4">
                <div class="card animated flipInY">
                    <div class="card-header bg-light text-dark text-center">
                        <h3>Log in</h3>
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
                                <div class="form-group">
                                    <input id="button1" type="button" value="Go Back" onclick="history.back()" class="btn btn-dark">
                                    <input  id="button2" type="submit" value="Submit" class="btn btn-dark">
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
    import NavBar from "../components/NavBar.vue"

    const path = "/user/login";
    
    export default {
        name: "Login",
        components: {
            NavBar
        },
        data(){
            return {
                username: '',
                password: '',
                user: null,                
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
                        if(typeof(response.data.user) === "object") {
                            if(response.data.user.possess[0].Wtyp_id !== 2){
                                this.$router.push( {name: 'wallet'});
                            } 
                        } else {
                            if(response.data.enterprise !== null) {
                                this.$router.push( {name: 'walletEnterprise'});
                            }
                        }
                    }
                }).catch(error => {
                        if( error.response.status !== 201 ){
                            alert(error.response.data);
                        }
                });
                event.preventDefault();
                return true;
            }
        }
    }
</script>

<style>
    #button1 {
        margin-top: .8em;
    }

    #button2 {
        margin-top: .8em;
        margin-left: .8em;
    }
</style>