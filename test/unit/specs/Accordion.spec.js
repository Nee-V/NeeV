import Vue from 'vue'
import Accordion from '@/components/core/Accordion'

describe('Accordion.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Accordion)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('ul'))
  })
})
