<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
            <div class="container">
                <div class="col">
                    <h2 class="text-dark">
                        <a class="text-dark" href="/welcome"><i class="fas fa-wallet"></i> UN Wallet</a>
                        <!--span class="float-right">
                            <i class="fas fa-user"></i> <%= name + ' ' + lastName %>                    
                        </span-->
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
                            <h3>Sign up</h3>
                        </div>
                        <div class="card-body">
                            <form @submit="signUp">
                                <div class="form-row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="inputName">Name</label>
                                            <input name="name" id="inputName" type="text" class="form-control" placeholder="Name"
                                                v-model="name" required/>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="inputLastName">Last Name</label>
                                            <input name="lastName" id="inputLastName" type="text" class="form-control"
                                                placeholder="Last Name" v-model="surname" required/>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="inputEmail">Email</label>
                                            <input name="email" id="inputEmail" type="email" class="form-control"
                                                placeholder="Email" v-model="email" required/>
                                        </div>
                                    </div>
                                    <div class="col">    
                                        <div class="form-group">
                                            <label for="username">Username</label>
                                            <input name="username" id="username" type="text" class="form-control" placeholder="Username" v-model="username" required/>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="confirmPassword">Confirm Password</label>
                                            <input name="confirmPassword" id="confirmPassword" type="password" class="form-control"
                                                placeholder="Confirm Pasword" v-model="cPassword" required/>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="inputPassword">Password</label>
                                            <input name="password" id="inputPassword" type="password" class="form-control"
                                                placeholder="Password" v-model="password" required/>
                                        </div>
                                    </div>
                                </div>
    
                                <div class="form-group">
                                    <div>
                                        <input id="button1" type="button" value="Go Back" onclick="history.back()" class="btn btn-dark">
                                        <input id="button2" type="submit" value="Submit" class="btn btn-dark">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </template>
    
    <script>
        import axios from 'axios'
        const path = '/user/signup';
        export default {
            name: "Signup",
            data( ){
                return{
                    name: '',
                    surname: '',
                    email: '',
                    username: '',
                    password: '',
                    cPassword: '',
                    response: null
                }
            },
            methods: {
                signUp(event) {
                   /* if(this.password !== this.cPassword){
                        event.preventDefault( );
                        return;
                    }*/
                    axios
                        .post(this.$store.state.backURL + path,
                            {
                                name: this.name.trim(),
                                surname: this.surname.trim(),
                                email: this.email.trim(),
                                username: this.username.trim(),
                                password: this.password,
                                cpassword: this.cPassword
                            }
                        ).then(response => {
                            if(response.status !== 201) {
                                alert("User storage error");
                            } else {
                                alert("Correctly registered user");
                            }
                        }).catch( error =>{
                            alert(error.response.data);
                        });
                    event.preventDefault( );
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