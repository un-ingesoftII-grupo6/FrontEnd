import Welcome from "@/views/Welcome.vue";
import { shallowMount } from '@vue/test-utils'

describe("welcome.vue",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper =shallowMount(Welcome,{

        })
    })
    it("welcome render exist",()=>{
        expect(wrapper.exists()).toBe(true);
    })
    it("Set card text for welcome",()=>{
        expect(wrapper.find("h2").text()).toBe("UN Wallet Log in Sign up")
    })    
    it("Specific text in view for correct navigation",()=>{
        expect(wrapper.find("div").text()).toBe("UN Wallet Log in Sign up   UN wallet advantages Easy registration Save and recive money Recharge your money Save time with UNWallet Fast and secure transactions Make payments to merchants and banks Immediate availability of your money Money on hand without cash   Support")
    })
    it("Testing renders and styles",()=>{
        expect(wrapper.find("a").text()).toBe("UN Wallet")
    })
})