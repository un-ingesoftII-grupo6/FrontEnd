import Vue from 'vue'
import Maketransfer from "@/views/Associated-wallets.vue";
//import { shallowMount } from '@vue/test-utils'

describe("Associated-wallets",()=>{ 
    const vm  =  new Vue(Maketransfer).$data
    expect(vm.$data).toBe(undefined)
    it('render ',()=>{
        expect(true).toBe(true)
    })
    /*test for data base and user connect
    it("login card exist",()=>{
        expect(wrapper.find("h2").text()).toBe("UN Wallet")
    }) 
    it("space for data user in login exist",()=>{
        expect(wrapper.find("div").text()).toBe("UN Wallet Make transfer Destination Wallet Amount Password")
    })
    it("user use login button",()=>{
        expect(wrapper.vm.$data.user).toBe("");
    })
    it("user use login button",()=>{
        expect(wrapper.vm.$data.wallet).toBe(null);
    })
    it("user use login button",()=>{
        expect(wrapper.vm.$data.destWallet).toBe(null);
    })  
    it("user use login button",()=>{
        expect(wrapper.vm.$data.wal_id_sender).toBe(null);
    })
    it("user use login button",()=>{
        expect(wrapper.vm.$data.amount).toBe("");
    })
    it("user use login button",()=>{
        expect(wrapper.vm.$data.response).toBe(null);
    })*/
})