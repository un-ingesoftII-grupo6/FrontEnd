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
    it("Testing renders and styles",()=>{
        expect(wrapper.find("a").text()).toBe("UN Wallet")
    })
})