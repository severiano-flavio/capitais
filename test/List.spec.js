import { createLocalVue, mount } from '@vue/test-utils'
import List from '@/components/list'
import Vue from 'vue'
import vuetify from 'vuetify'

describe('Comportamento de listas', () => {
  Vue.use(vuetify)
  const localVue = createLocalVue()
  localVue.use(vuetify)
  test('Lista sem conteúdo', () => {
    const wrapper = mount(List, {
      localVue,
    })

    const list = wrapper.find('.v-list-item__title')
    expect(list.text()).toBe('')
  })
  test('Lista preenchida', () => {
    const wrapper = mount(List, {
      localVue,
      propsData: {
        items: [
          {
            capital: 'brasil',
          },
        ],
      },
    })
    const list = wrapper.find('.v-list-item__title')
    expect(list.text()).toBe('brasil')
  })
})
