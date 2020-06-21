import Login from "@/views/Login.vue";
import { shallowMount } from '@vue/test-utils'

describe("Login.vue",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper =shallowMount(Login,{

        })
    })
    it("renders",()=>{
        expect(wrapper.exists()).toBe(true);
    })
    it("login card exist",()=>{
        expect(wrapper.find("h3").text()).toBe("Log in")
    })    
    it("space div text",()=>{
        expect(wrapper.find("div").text()).toBe("Log in Username  Password")
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
    /*it("user use login button",()=>{
        expect(wrapper.vm.$data.username).toBe(true);
    })
    it("user use login button",()=>{
        expect(wrapper.vm.$data.password).toBe(true);
    })
    it("user use login button",()=>{
        expect(wrapper.vm.$data.user).toBe(true);
    })
    it("user use login button",()=>{
        expect(wrapper.vm.$data.response).toBe(true);
    })*/

})