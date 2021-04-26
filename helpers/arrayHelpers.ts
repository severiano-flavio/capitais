import { CountryTypes } from '~/types'

export function searchObject(
  list: CountryTypes[],
  search: RegExp
): CountryTypes[] {
  // eslint-disable-next-line array-callback-return
  const filter = list.filter((item) => {
    const fixSearch = search
    const regExp = new RegExp(fixSearch, 'gi')
    const result = item.capital.match(regExp)
    if (result != null) {
      return item
    }
  })
  return filter
}

export function sortObject(list: CountryTypes[], sort: string): CountryTypes[] {
  const ordener = list.sort((a, b) => {
    if (sort === 'A-Z') {
      if (a.capital < b.capital) return -1
      if (a.capital > b.capital) return 1
    } else {
      if (a.capital > b.capital) return -1
      if (a.capital < b.capital) return 1
    }
    return 0
  })
  return ordener
}
