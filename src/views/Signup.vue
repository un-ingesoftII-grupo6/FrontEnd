<template>
<div>
    <div v-if="this.wtyp_id === 1">
        <nav-bar linkProp="/"/>
    </div>
    <div v-else>
        <nav-bar-wallet linkProp="/wallet-enterprise"/>
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
                                        <span class="float-right">
                                            <div class="container">
                                                <em v-on:click.prevent="pass1" :class="image1" style="cursor: pointer;"/>
                                            </div>
                                        </span>
                                        <input name="password" id="inputPassword" :type="passwordFieldType1" class="form-control"
                                            placeholder="Password" v-model="password" required/>
                                        <button v-on:click.prevent="generatePassword" class="btn btn-info btn-sm" style="margin-top: .6em;"><em class="fas fa-key"/> Generate</button>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label for="confirmPassword">Confirm Password</label>
                                        <span class="float-right">
                                            <div class="container">
                                                <em v-on:click.prevent="pass2" :class="image2" style="cursor: pointer;"/>
                                            </div>
                                        </span>
                                        <input name="confirmPassword" id="confirmPassword" :type="passwordFieldType2" class="form-control"
                                            placeholder="Confirm Pasword" v-model="cPassword" required/>
                                    </div>
                                </div>
                            </div>
                            <!-- here end card-->
                            <!-- here start buttons--> 
                            <div class="form-group">
                                <div>
                                    <input id="button1" type="button" value="Cancel" onclick="history.back()" class="btn btn-danger">
                                    <input id="button1" type="submit" value="Submit" class="btn btn-success float-right">
                                    <br>                                                                     
                                </div>
                                <!-- here end buttons-->
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
var generator = require('generate-password')

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
            wtyp_id: parseInt(localStorage.getItem('wallettypeSignup')),
            ent_id: localStorage.getItem('enterprise_idSignup'),
            pageName: localStorage.getItem('nameSignup'),
            passwordFieldType1: 'password',
            passwordFieldType2: 'password',
            image1: 'fas fa-eye-slash',
            image2: 'fas fa-eye-slash'
        }
    },
    methods: {
        signUp(event) {
            if(this.password !== this.cPassword){
                alert('The passwords are not the same');
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
        },
        pass1() {
            if(this.passwordFieldType1 === 'password') {
                this.passwordFieldType1 = 'text';
                this.image1 = 'fas fa-eye';
            } else {
                this.passwordFieldType1 = 'password';
                this.image1 = 'fas fa-eye-slash';
            }
        },
        pass2() {
            if(this.passwordFieldType2 === 'password') {
                this.passwordFieldType2 = 'text';
                this.image2 = 'fas fa-eye';
            } else {
                this.passwordFieldType2 = 'password';
                this.image2 = 'fas fa-eye-slash';
            }
        },
        generatePassword() {
            this.password = generator.generate({
                length: 20,
                numbers: true,
                strict: true
            })

            this.cPassword = this.password;
        }
    },
}
</script>