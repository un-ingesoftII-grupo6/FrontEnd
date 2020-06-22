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
        expect(wrapper.find("h3").text()).toBe("UN Wallet advantages")
    })    
})