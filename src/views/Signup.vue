<template>
<div>
    <div v-if="this.wtyp_id === 1">
        <nav-bar linkProp="/"/>
    </div>
    <div v-else>
        <nav-bar-wallet :username="this.nameBar" linkProp="/wallet-enterprise"/>
    </div>
    <br>

    <div class="container p-3">
        <div class="row">
            <div class="col -md-0 offset -md-0">
                <div class="card animated flipInY">
                    <div class="card-header bg-light text-dark">
                        <h3>{{ this.pageName }}</h3>
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
                                        <label for="inputPassword">Password</label>
                                        <input name="password" id="inputPassword" type="password" class="form-control"
                                            placeholder="Password" v-model="password" required/>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label for="confirmPassword">Confirm Password</label>
                                        <input name="confirmPassword" id="confirmPassword" type="password" class="form-control"
                                            placeholder="Confirm Pasword" v-model="cPassword" required/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div>
                                    <input id="button1" type="submit" value="Submit" class="btn btn-success">
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
import NavBar from '../components/NavBar.vue'
import NavBarWallet from '../components/NavBarWallet.vue'

const path = '/user/signup';

export default {
    name: "Signup",
    components: {
        NavBar,
        NavBarWallet
    },
    data( ){
        return{
            name: '',
            surname: '',
            email: '',
            username: '',
            password: '',
            cPassword: '',
            response: null,
            wtyp_id: null,
            ent_id: null,
            pageName: null,
            nameBar: localStorage.getItem('name')
        }
    },
    props: {
        wallettype: {
            type: Number,
            required: true,
        },
        enterprise_id: {
            type: Number,
            required: false
        },
        pname: {
            type: String,
            required: false,
            default: 'Sign up'
        }
    },
    mounted() {
        this.wtyp_id = this.wallettype;
        this.ent_id = this.enterprise_id;
        this.pageName = this.pname;
    },
    methods: {
        signUp(event) {
            if(this.password !== this.cPassword){
                    event.preventDefault( );
                    return;
                }
                axios
                    .post(this.$store.state.backURL + path,
                        {
                            name: this.name.trim(),
                            surname: this.surname.trim(),
                            email: this.email.trim(),
                            username: this.username.trim(),
                            password: this.password,
                            cpassword: this.cPassword,
                            wtyp_id: this.wtyp_id,
                            ent_id: this.ent_id
                        }
                    ).then(response => {
                        if(response.status !== 201) {
                            alert("User storage error");
                        } else {
                            if(this.wtyp_id === 1) {
                                alert("Correctly registered user");
                            } else if(this.wtyp_id === 3) {
                                alert("Correctly registered and associated user");
                            } 
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

    </style>