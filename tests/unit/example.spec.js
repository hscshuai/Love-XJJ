import { shallowMount } from '@vue/test-utils'
import Heart from '@/components/Heart.vue'

describe('Heart.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Heart, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
