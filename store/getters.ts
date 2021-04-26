import { CountryTypes, StoreTypes } from '~/types'

export default {
  /**
   *  Função que faz uma busca nos objetos de mesmo texto que o @param keyword
   * @param state Recebe os parâmetros da state
   * @constant search recebe um @type {object} encontrado pela propriedade name ou capital
   * encontrado pelo regex ou recebe @type {null}
   * @returns {(keyword: string) => CountryTypes[]} com os textos encontrados na busca.
   */
  filterCountry(state: StoreTypes): (keyword: string) => CountryTypes[] {
    return (keyword) => {
      const countries = state.country

      if (keyword.length === 0) {
        return countries
      }
      return countries.filter((item: CountryTypes) => {
        const regex = new RegExp(keyword, 'gi')
        const search = item.name.match(regex) || item.capital.match(regex)
        if (search !== null) {
          return search
        }
        return []
      })
    }
  },
}
