import { shallowMount } from '@vue/test-utils'
import SihamSalah from '@/components/SihamSalah.vue'

describe('SihamSalah.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(SihamSalah, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
