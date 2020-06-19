import Vue from 'vue';
import Router from 'vue-router';
import Signup from "./views/Signup";
import Login from "./views/Login";
import Wallet from "./views/Wallet";
import Welcome from "./views/Welcome";
import Support from "./views/Support";
import MakeTransfer from "./views/Make-transfer";
import Operations from "./views/Operations";
import WalletEnterprise from "./views/Wallet-enterprise";

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/wallet",
      name: "wallet",
      component: Wallet,
      meta: {
        auth: true
      }
    },
    {
      path: "/",
      name: "welcome",
      component: Welcome
    },
    {
      path: "/support",
      name: "support",
      component: Support
    },
    {
      path: "/make-transfer",
      name: "makeTransfer",
      component: MakeTransfer,
      meta: {
        auth: true
      }
    },
    {
      path: "/operations",
      name: "operations",
      component: Operations,
      meta: {
        auth: true
      }
    },
    {
      path: "/wallet-enterprise",
      name: "walletEnterprise",
      component: WalletEnterprise,
      meta: {
        auth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
    let token = (localStorage.getItem('token')) === null ? false : true;
    
    if(to.matched.some(record => record.meta.auth)) {
        if(token) {
            next();
        } else {
            next({ name: 'login' });
        }
    } else {
        if(token) {
            next(false);
        } else {
            next();
        }
    }
})

export default router;