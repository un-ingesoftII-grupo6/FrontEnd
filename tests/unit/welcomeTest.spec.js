import Welcome from "@/views/Welcome.vue";
import { shallowMount } from '@vue/test-utils'

describe("welcome.vue",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper =shallowMount(Welcome,{

        })
    })
    it("renders",()=>{
        expect(wrapper.exists()).toBe(true);
    })
    it("login card exist",()=>{
        expect(wrapper.find("h2").text()).toBe("UN Wallet Log in Sign up")
    })    
    it("space for data user in login exist",()=>{
        expect(wrapper.find("div").text()).toBe("UN Wallet Log in Sign up   UN wallet advantages Easy registration Save and recive money Recharge your money Save time with UNWallet Fast and secure transactions Make payments to merchants and banks Immediate availability of your money Money on hand without cash   Support")
    })
    it("space for data user in login exist",()=>{
        expect(wrapper.find("a").text()).toBe("UN Wallet")
    })
})