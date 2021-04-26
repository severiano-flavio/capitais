import { MutationTree } from 'vuex'
import { responseCountry } from '~/api/services/getCountry'

export default {
  async getCountry({ commit }: MutationTree<string>) {
    try {
      const response = await responseCountry()
      commit('SET_COUNTRY', response.data)
    } catch (err) {
      throw new Error(err.message)
    }
  },
}
