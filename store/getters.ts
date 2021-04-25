export default {
  getList1(state) {
    const getState = state.country
    const splitList = getState.filter((item, index: number) => {
      if (index < 100) {
        return item
      }
    })
    return splitList
  },
  getList2(state) {
    const getState = state.country
    const splitList = getState.filter((item, index: number) => {
      if ((index >= 100) & (index < 200)) {
        return item
      }
    })
    return splitList
  },
  getList3(state) {
    const getState = state.country
    const splitList = getState.filter((item, index: number) => {
      if (index >= 200) {
        return item
      }
    })
    return splitList
  },
  filterCountry(state) {
    const searchFilter = (keyword: string) => {
      return state.country.filter((item) => {
        if (keyword.length > 3) {
          const regex = new RegExp(keyword, 'gi')
          const search = item.name.match(regex) || []
          console.log(search)
          return search
        }
        return state
      })
    }
    return searchFilter
  },
}
