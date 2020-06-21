import Signup from "@/views/Signup.vue";
import { shallowMount } from '@vue/test-utils'

jest.mock("axios",()=>({
    post(){
        return true;
    }
}))

describe("signup.vue",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper =shallowMount(Signup,{

        })
    })
    it("renders",()=>{
        expect(wrapper.exists()).toBe(true);
    })
    it("login card exist",()=>{
        expect(wrapper.find("h3").text()).toBe("Sign up")
    })    
    it("space for data user in login exist",()=>{
        expect(wrapper.find("div").text()).toBe("Sign up Name  Last Name  Email  Username  Password  Confirm Password     You are already registered, enter here.")
    })
    it("space for data user in login exist",()=>{
        expect(wrapper.find("label").text()).toBe("Name")
    })
    //To test username and password you can connect or no data base
    //If you dont connect data bse use these
    it("user space form signup name",()=>{
        expect(wrapper.vm.$data.name).toBe("");
    })
    it("user space form signup surname",()=>{
        expect(wrapper.vm.$data.surname).toBe("");
    })
    it("user space form signup email",()=>{
        expect(wrapper.vm.$data.email).toBe("");
    })
    it("user space form signup username",()=>{
        expect(wrapper.vm.$data.username).toBe("");
    })
    it("user space form signup password",()=>{
        expect(wrapper.vm.$data.password).toBe("");
    })
    it("user space form signup cPassword",()=>{
        expect(wrapper.vm.$data.cPassword).toBe("");
    })
    it("user space form signup name",()=>{
        expect(wrapper.vm.$data.response).toBe(null);
    })

})