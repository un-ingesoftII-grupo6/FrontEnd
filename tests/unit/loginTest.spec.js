import Login from "@/views/Login.vue";
import { shallowMount } from '@vue/test-utils'

describe("Login.vue",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper =shallowMount(Login,{
            stubs: ['linkProp', 'nav-bar','router-link'],          
        })        
    })
    it("testing components in login ",()=>{
        expect(wrapper.find("nav-bar").exists())
    }) 
    it("testing components in login ",()=>{
        expect(wrapper.find("form").exists())
    })
    it("Text in login ",()=>{
        expect(wrapper.find("div").text()).toBe("Log in Username  Password")
    })
    it("renders in login view",()=>{
        expect(wrapper.exists()).toBe(true);
    })   
    it("space for data user in login exist",()=>{
        expect(wrapper.find("label").text()).toBe("Username")
    })
    //To test username and password you can connect or no data base
    //If you dont connect data bse use these
    it("user username data",()=>{
        expect(wrapper.vm.$data.username).toBe("");
    })
    it("user password data",()=>{
        expect(wrapper.vm.$data.password).toBe("");
    })
    it("user for wallet",()=>{
        expect(wrapper.vm.$data.user).toBe(null);
    })
    it("Response data for user",()=>{
        expect(wrapper.vm.$data.response).toBe(null);
    })
    //If you connect data bse use these
    it("user username testing true",()=>{
        expect(wrapper.vm.$data.username).toBe("");
    })
    it("user password true",()=>{
        expect(wrapper.vm.$data.password).toBe("");
    })
    it("user test true asgination",()=>{
        expect(wrapper.vm.$data.user).toBe(null);
    })
    it("user response true test",()=>{
        expect(wrapper.vm.$data.response).toBe(null);
    })

})