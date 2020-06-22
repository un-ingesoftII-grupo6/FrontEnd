import NavBar from "@/components/NavBarWallet.vue";
import { shallowMount } from '@vue/test-utils'
describe("NavBarwallet.vue",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper =shallowMount(NavBar,{
            stubs: ['router-link', 'router-view'],
            props:['linkProp'],
            propsData: {
                type: "",
            },
        })
    })
    it("renders navbarwallet identity",()=>{
        expect(wrapper.exists()).toBe(true);
    })
    it("rexist component navbaw wallet exist?",()=>{
        expect(wrapper.find("nav").text()).toBe("UN Wallet  Log out")
    })
    it("tittle exist?",()=>{
        expect(wrapper.find("h3").text()).toBe("UN Wallet  Log out")
    })
    it("space for data user in login exist",()=>{
        expect(wrapper.find("div").text()).toBe("UN Wallet  Log out")
    })
})