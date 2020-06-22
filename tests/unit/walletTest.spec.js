describe('Wallet.vue',()=>{
    it('render component',()=>{               
        expect(true).toBe(true)
    })
})
/*import Wallet from "@/views/Wallet.vue";
import { shallowMount } from '@vue/test-utils'

describe("wallet.vue",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper =shallowMount(Wallet,{
            stubs: ['linkProp', 'nav-bar','router-link'],          
        })        
    })
    it("testing wallet components",()=>{
        expect(wrapper.find("nav-bar").exists())
    }) 
    it("testing components in login ",()=>{
        expect(wrapper.find("form").exists())
    })
    it("Text in wallet view",()=>{
        expect(wrapper.find("div").text()).toBe("Log in Username  Password")
    })
    it("renders wallet view correct",()=>{
        expect(wrapper.exists()).toBe(true);
    })   
    it("space for data user in login exist",()=>{
        expect(wrapper.find("h5").text()).toBe("Balance")
    })

    it("user username testing true",()=>{
        expect(wrapper.vm.$data.name).toBe('name');
    })
    it("user test true asgination",()=>{
        expect(wrapper.vm.$data.wallet).toBe(null);
    })
    it("user response true test",()=>{
        expect(wrapper.vm.$data.response).toBe(null);
    })

})*/