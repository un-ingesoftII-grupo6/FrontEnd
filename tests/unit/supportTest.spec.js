import support from "@/views/Support.vue";
import { shallowMount } from '@vue/test-utils'

describe("support.vue",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper =shallowMount(support,{
            stubs: ['linkProp', 'nav-bar']
        })
    })
    it("renders support test",()=>{
        expect(wrapper.exists()).toBe(true);
    })
    it("login card exist",()=>{
        expect(wrapper.find("nav-bar").exists())
    })
    it("space for data user in login exist",()=>{
        expect(wrapper.find("div").text()).toBe("Name  Telephone number  Company  Email   How can we help you?")
    })
})