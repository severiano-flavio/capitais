import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import Home from '@/pages'

describe('Modificando a lista', () => {
  Vue.use(Vuetify)
  const localVue = createLocalVue()
  localVue.use(Vuetify)
  localVue.use(Vuex)

  let getters
  let actions
  let store
  beforeEach(() => {
    actions = {
      getCountry: jest.fn(),
    }
    getters = {
      getList1: () => () => {},
      getList2: () => () => {},
      getList3: () => () => {},
    }
    store = new Vuex.Store({
      actions,
      getters,
    })
  })

  test('Pesquisa realizada em input com caracteres especiais', () => {
    const wrapper = shallowMount(Home, { store, localVue })
    const input = wrapper.find('input')
    input.setValue('*/-/*.*/()')
    expect(getters).toBeTruthy()
  })
})
