<template>
<div>
    <nav-bar linkProp="/"/>
    <br>

    <div class="container p-3">
        <div class="bg-white p-3 -md-0 rounded">              
            <form class="form-group">
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label for="inputName">Name</label>
                            <input name="name" id="inputName" type="text" class="form-control" placeholder="Name"
                                    v-model="name" required/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label for="inputTelephone">Telephone number</label>
                            <input name="telephone" id="inputTelephone" type="text" class="form-control"
                                placeholder="Telephone " v-model="telephone" required/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label for="inputCompany">Company</label>
                            <input name="Company" id="inputCompany" type="text" class="form-control" placeholder="Company"
                                v-model="company" required/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label for="inputEmail">Email </label>
                            <input name="Email" id="inputEmail" type="text" class="form-control"
                                placeholder="Email " v-model="email" required/>
                        </div>
                    </div>
                </div>
                <div class="row">                            
                    <div class="col">
                        <div class="form-group">
                            <label for="inputHelp">How can we help you? </label>
                            <textarea name="Help" id="inputHelp" class="form-control" rows="3" placeholder="Help " required/>
                        </div>
                    </div>
                </div>                                                                
                <div class="form-group">
                    <div>                                
                        <input id="button1" type="button" value="Cancel" onclick="history.back()" class="btn btn-danger">
                        <input id="button1" type="submit" value="Submit" class="btn btn-success float-right">
                    </div>
                </div>                        
            </form>
		</div>
    </div>
    <br>
    <br>
    <br>
    <br>
</div>
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
    name: 'Support',
    components: {
        NavBar
    }
}
</script>

<style>
#button1 {
    margin-top: .8em;
}
</style>