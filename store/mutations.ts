import { CountryTypes, LanguageTypes, StoreTypes } from "~/types";

export default {
  SET_COUNTRY(state: StoreTypes, payload: CountryTypes[]) {
      const countries = payload.map( country => {
        let languages: CountryTypes[] = [];
        country.languages.filter( (language: any) => {
          languages.push(language.name);
        })
        country.language = languages.join(", ")
        return country;
      })
    state.country = countries
  },
}
