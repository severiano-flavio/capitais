import { responseCountry } from '~/api/services/getCountry'

export default {
  async getCountry({ state, commit }) {
    try {
      const response = await responseCountry()
      commit('SET_COUNTRY', response.data)
    } catch (err) {
      throw new Error(err.message)
    }
  },
}
