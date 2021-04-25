export interface LanguageTypes {
    name: string;
}
export interface CountryTypes {
    name: string;
    capital: string;
    flag: string;
    languages: Array<string>;
    language: string
}

export interface StoreTypes {
    country: Array<CountryTypes>
}
