import { CountryTypes, StoreTypes } from "~/types";

export default {

  filterCountry(state: StoreTypes) {
    return (keyword: string) => {
      const countries = state.country

      if (keyword.length == 0) {
        return countries;
      }
      return countries.filter((item: CountryTypes) => {
          const regex = new RegExp(keyword, 'gi')
          const search = item.name.match(regex) || item.capital.match(regex)
          if (search !== null) {
            return search
          }
      })
    }
  },
}
