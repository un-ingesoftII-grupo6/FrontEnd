<template>
<div>
    <nav-bar-wallet :linkProp="this.link"/>
    <br>
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
                        <h3><em class="fas fa-cogs"/> Change Password<span class="float-right"></span></h3>
                    </div>
                    <!--starts card body-->        
                    <div class="card-body">
                        <form @submit="update">
                            <div class="form-group">
                                <label for="currentPassword">Current Password</label>
                                <input name="currentPassword" id="currentPassword" type="password" class="form-control" v-model="currentPassword" placeholder="Current Password" required/>
                            </div>
                            <div class="form-group">
                                <label for="newPassword">New Password</label>
                                <span class="float-right">
                                    <em v-on:click.prevent="pass1" :class="image1" style="cursor: pointer;"/>
                                </span>
                                <input name="newPasswordt" id="newPassword" :type="passwordFieldType1" class="form-control" placeholder="New Password" v-model="newPassword" required/>
                            </div>
                            <div class="form-group">
                                <label for="cNewPassword">Confirm New Password</label>
                                <span class="float-right">
                                    <em v-on:click.prevent="pass2" :class="image2" style="cursor: pointer;"/>
                                </span>
                                <input name="cNewPassword" id="cNewPassword" :type="passwordFieldType2" class="form-control" placeholder="Confirm New Password" v-model="cNewPassword" required/>
                                <button v-on:click.prevent="generatePassword" class="btn btn-info btn-sm" style="margin-top: .8em;"><em class="fas fa-key"/> Generate</button>
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
var generator = require('generate-password')

export default {
    name: 'settings',
    components: {
        NavBarWallet
    },
    data() {
        return {
            link: localStorage.getItem('settings'),
            currentPassword: '',
            newPassword: '',
            cNewPassword: '',
            passwordFieldType1: 'password',
            passwordFieldType2: 'password',
            image1: 'fas fa-eye-slash',
            image2: 'fas fa-eye-slash'
        }
    },
    methods: {
        update(event) {
            if(this.newPassword !== this.cNewPassword){
                alert('The passwords are not the same');
                event.preventDefault();
                return;
            }

            const path = '/' + ((localStorage.getItem('settings') === '/wallet') ? 'user/' : 'enterprise/')
                + 'edit/' +  localStorage.getItem('username') 

            axios
                .put(this.$store.state.backURL + path,
                    {
                        new_password: this.newPassword,
                        old_password: this.currentPassword
                    },
                    {
                        headers: {
                            'access-token': localStorage.getItem('token')
                        } 
                    }
                ).then(response => {
                    if(response.status !== 200) {
                            alert("Password update error");
                        } else {
                            alert("Password updated correctly");
                        }
                }).catch(error => {
                    if(error.response.status !== 200){
                            alert(error.response.data);
                    }
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
            this.newPassword = generator.generate({
                length: 20,
                numbers: true,
                strict: true
            })

            this.cNewPassword = this.newPassword;
        }
    }
}
</script>