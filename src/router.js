import Vue from 'vue';
import Router from 'vue-router';
import Signup from "./views/Signup";
import Login from "./views/Login";
import Wallet from "./views/Wallet";
import Welcome from "./views/Welcome";
import MakeTransfer from "./views/Make-transfer";
import WalletEnterprise from "./views/WalletEnterprise";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/Signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/Login",
      name: "login",
      component: Login
    },
    {
      path: "/Wallet",
      name: "wallet",
      component: Wallet,
    },
    {
      path: "/Welcome",
      name: "welcome",
      component: Welcome
    },
    {
      path: "/Make-transfer",
      name: "makeTransfer",
      component: MakeTransfer
    },
    {
      path: "/WalletEnterprise",
      name: "walletEnterprise",
      component: WalletEnterprise
    }
  ]
})
