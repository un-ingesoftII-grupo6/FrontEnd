import support from "@/views/Support.vue";
import { shallowMount } from '@vue/test-utils'

describe("support.vue",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper =shallowMount(support,{

        })
    })
    it("renders",()=>{
        expect(wrapper.exists()).toBe(true);
    })
    it("login card exist",()=>{
        expect(wrapper.find("h2").text()).toBe("UN Wallet")
    })    
    it("space for data user in login exist",()=>{
        expect(wrapper.find("div").text()).toBe("UN Wallet   Name  Telephone number   Company  Email    How can we help you?")
    })
})