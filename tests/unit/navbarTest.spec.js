import NavBar from "@/components/NavBar.vue";
import { shallowMount } from '@vue/test-utils'
describe("NavBar.vue",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper =shallowMount(NavBar,{
            stubs: ['router-link', 'router-view'],
            props:['linkProp'],
            propsData: {
                required: true,
            }
        })
    })
    it("renders",()=>{
        expect(wrapper.exists()).toBe(true);
    })
    it("navbar exist?",()=>{
        expect(wrapper.find("nav").text()).toBe("UN Wallet")
    })
    it("tittle exist?",()=>{
        expect(wrapper.find("h2").text()).toBe("UN Wallet")
    })
})