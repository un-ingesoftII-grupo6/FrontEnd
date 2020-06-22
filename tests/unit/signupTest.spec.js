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
    it("Signup tittle card exist",()=>{
        expect(wrapper.find("h3").text()).toBe("Sign up")
    })    
    it("Text asserts for view",()=>{
        expect(wrapper.find("div").text()).toBe("Sign up Name  Last Name  Email  Username  Password  Confirm Password")
    })
    //To test username and password you can connect or no data base
    //If you dont connect data bse use these
    it("Data or signup user this name",()=>{
        expect(wrapper.vm.$data.name).toBe("");
    })
    it("Surname used by user",()=>{
        expect(wrapper.vm.$data.surname).toBe("");
    })
    it("Email user",()=>{
        expect(wrapper.vm.$data.email).toBe("");
    })
    it("Username for wallet",()=>{
        expect(wrapper.vm.$data.username).toBe("");
    })
    it("Password wallet",()=>{
        expect(wrapper.vm.$data.password).toBe("");
    })
    it("Confirma password in wallet",()=>{
        expect(wrapper.vm.$data.cPassword).toBe("");
    })
    it("Responsive name for this user",()=>{
        expect(wrapper.vm.$data.response).toBe(null);
    })

})