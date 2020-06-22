<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
        <div class="container">
            <div class="col">
                <h2 class="text-dark">
                    <a class="text-dark" href="/"><em class="fas fa-wallet"></em> UN Wallet</a>
                    <span class="float-right">
                        <em class="fas fa-user"></em>
                    </span>
                </h2>
            </div>
        </div>
    </nav>
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
                            <label for="inputtelephone">Telephone number</label>
                            <input name="telephone" id="inputTelephone" type="text" class="form-control"
                                placeholder="Telephone " v-model="telephone" required/>
                        </div>
                    </div>
                </div>
                <br>
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
                <br>
                    <div class="row">                            
                    <div class="col">
                        <div class="form-group">
                            <label for="inputHelp">How can we help you? </label>                                                                            
                            <input name="Help" id="inputHelp" type="text" class="form-control" placeholder="help " v-model="help" required/>
                        </div>
                    </div>
                </div>                                                                
                <div class="form-group text-center">
                    <div>
                        <input id="button1" type="button" value="Go Back" onclick="history.back()" class="btn btn-dark">                           
                        <input id="button2" type="submit" value="Send" class="btn btn-success btn-success">
                    </div>
                </div>                        
            </form>
		</div>
    </div>
</div>
</template>

<script>
export default {

}
</script>
