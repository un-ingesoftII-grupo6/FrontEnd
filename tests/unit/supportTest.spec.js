import support from "@/views/Support.vue";
import { shallowMount } from '@vue/test-utils'

describe("support.vue",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper =shallowMount(support,{

        })
    })
    it("renders correctly to suppor view",()=>{
        expect(wrapper.exists()).toBe(true);
    })
    it("Searching input and buttons test",()=>{
        expect(wrapper.find("input").exists)
    })    
    it("search label for data",()=>{
        expect(wrapper.find("label").exists)
    })
    it("space for data user in login exist",()=>{
        expect(wrapper.find("div").text()).toBe("Name  Telephone number   Company  Email    How can we help you?")
    })
})