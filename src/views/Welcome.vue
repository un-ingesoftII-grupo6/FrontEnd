<template>
<div id="page-content">
    <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
        <div class="container">
            <div class="col">
                <h2 class="text-dark">
                    <a class="text-dark" href="/welcome"><i class="fas fa-wallet"></i> UN Wallet</a>
                    <span class="float-right">
                        <a href="/Login" class="btn btn-dark">Log in</a>
                        <a href="/Signup" id="button" class="btn btn-dark">Sign up</a>
                    </span>
                </h2>
            </div>
        </div>
    </nav>
    <br>

    <div class="container">
        <div class="row">
            <div class="col">
                <img src="../../public/homeimg.png" class="img-thumbnail border border-light" alt="Responsive image">      
            </div>
            <div class="col">
                <div class="card animated pulse">
                    <div class="card">
                        <div class="card-header text-dark bg-light text-center">
                            <h3>UN wallet advantages</h3>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li>Easy registration</li>
                                <li>Save and recive money</li>                 
                                <li>Recharge your money</li>
                                <li>Save time with UNWallet</li>
                                <li>Fast and secure transactions</li>
                                <li>Make payments to merchants and banks</li>
                                <li>mmediate availability of your money</li>                                              
                                <li>Money on hand without cash</li>                            
                            </ul>
                        </div> 
                    </div>
                </div>
            </div>            
        </div>
        <br>
        <div class="container p-3">
            <div class="bg-white p-3 -md-0">              
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
                                <input id="button2" type="submit" value="Send" class="btn btn-success">
                            </div>
                        </div>                        
                </form>
			</div>
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
export default {
    name: "welcome"
}
</script>

<style>
#button {
    margin-left: .8em;
}
</style>