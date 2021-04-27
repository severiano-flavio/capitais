import { sortObject, searchObject } from '~/helpers/arrayHelpers'
import { StoreTypes } from '~/types'

export default {
  /**
   * @param search Recebe string
   * @param sort recebe string "A-Z" ou "Z-A"
   */
  getList1(state: StoreTypes) {
    return (search: RegExp, sort: string) => {
      // eslint-disable-next-line array-callback-return
      const list = state.country.filter((item, index) => {
        if (item.capital !== '') {
          // A constante irá separar a state em quantidades iguais de listas
          const splitList = state.country.length / 3
          if (index < splitList) {
            return item
          }
        }
      })
      const listOrderner = sortObject(list, sort)
      return searchObject(listOrderner, search)
    }
  },
  getList2(state: StoreTypes) {
    return (search: RegExp, sort: string) => {
      // eslint-disable-next-line array-callback-return
      const list = state.country.filter((item, index) => {
        if (item.capital !== '') {
          // A constante irá separar a state em quantidades iguais de listas
          const splitList = state.country.length / 3
          if (index >= splitList && index < splitList * 2) {
            return item
          }
        }
      })

      const listOrderner = sortObject(list, sort)
      return searchObject(listOrderner, search)
    }
  },
  getList3(state: StoreTypes) {
    return (search: RegExp, sort: string) => {
      // eslint-disable-next-line array-callback-return
      const list = state.country.filter((item, index) => {
        if (item.capital !== '') {
          // A constante irá separar a state em quantidades iguais de listas
          const splitList = state.country.length / 3
          if (index > splitList * 2) {
            return item
          }
        }
      })

      const listOrderner = sortObject(list, sort)
      return searchObject(listOrderner, search)
    }
  },
}
