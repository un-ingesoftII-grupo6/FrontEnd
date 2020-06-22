import Footer from "@/components/Footer.vue";
import { shallowMount } from '@vue/test-utils'

describe('footer.vue',()=>{
    const wrapper = shallowMount(Footer)
    it('render component',()=>{               
        expect(wrapper.exists()).toBe(true)
    })
    it('text footer ',()=>{               
        expect(wrapper.find("footer").text()).toBe("Contact us Telephone: +57 (1) 1234567Mobil: 3001234567Email: support_un_wallet@gmail.comChat online  Social media")
    })
    it('into text footer ',()=>{               
        expect(wrapper.find("h3").text()).toBe("Contact us")
    })

})
