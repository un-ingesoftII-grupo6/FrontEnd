import Welcome from "@/views/Welcome.vue";
import { shallowMount, mount } from '@vue/test-utils'

describe("welcome.vue",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper =shallowMount(Welcome,{
            stubs: ['router-link', 'router-view'],
        })
    })
    it("welcome render exist",()=>{
        expect(wrapper.exists()).toBe(true);
    })
    it("Set card text for welcome",()=>{
        expect(wrapper.find("h3").text()).toBe("UN Wallet advantages")
    })   
})