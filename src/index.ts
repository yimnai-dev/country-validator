import { capitalize, compareFunc } from './utils/compare.util';
import { countries, STATES } from './utils/data';
import { Continent, Country, CountryName, CountryCode, CountryDialCode, NameOrDialCode, NameOrCountryCode, CodeOrDialCode, NameOrCodeOrDialCode, NATION_STATES, STATE } from "./utils/types"

export const verifyCountryExistence = (country: CountryName) => {
    const searchedCountry = countries.find((place: Country) => place.name === capitalize(country));
    return Boolean(searchedCountry);
}

export const getCountryCode = (countryObj: NameOrDialCode): CountryCode | undefined => {
    if(countryObj.name) return countries.find((country: Country) => country.name === capitalize(countryObj.name))?.code;
    if(countryObj.dial_code) return countries.find((country: Country) => country.dial_code === countryObj.dial_code)?.code;
    return undefined;
}

export const getCountryDialCode = (countryObj: NameOrCountryCode): CountryDialCode | undefined => {
    if(countryObj.name) return countries.find((country: Country) => country.name === capitalize(countryObj.name))?.dial_code;
    if(countryObj.code) return countries.find((country: Country) => country.code === capitalize(countryObj.code))?.dial_code;
    return undefined;
}

export const getCountryName = (countryObj: CodeOrDialCode): CountryName | undefined => {
    if(countryObj.code) return countries.find((country: Country) => country.code === capitalize(countryObj.code))?.name;
    if(countryObj.dial_code) return countries.find((country: Country) => country.dial_code === countryObj.dial_code)?.name;
    return undefined;
}

export const getCountryInfo = (countryObj: NameOrCodeOrDialCode): Country | undefined => {
    if(countryObj.name) return countries.find((country: Country) => country.name === capitalize(countryObj.name));
    if(countryObj.code) return countries.find((country: Country) => country.code === capitalize(countryObj.code));
    if(countryObj.dial_code) return countries.find((country: Country) => country.dial_code === countryObj.dial_code);
    return undefined;
}

export const verifyIfCountryInContinent = (countryObj: NameOrCodeOrDialCode, continent: Continent): boolean => {
    if(countryObj.name) return countries.some((country: Country) => country.name === capitalize(countryObj.name) && country.continent === continent);
    if(countryObj.code) return countries.some((country: Country) => country.code === capitalize(countryObj.code) && country.continent === continent);
    if(countryObj.dial_code) return countries.some((country: Country) => country.dial_code === countryObj.dial_code && country.continent === continent);
    return false;
}

export const getContinentOfCountry = (countryObj: NameOrCodeOrDialCode): Continent | undefined => {
    if(countryObj.name) return countries.find((country: Country) => country.name === capitalize(countryObj.name))?.continent;
    if(countryObj.code) return countries.find((country: Country) => country.code === capitalize(countryObj.code))?.continent;
    if(countryObj.dial_code) return countries.find((country: Country) => country.dial_code === countryObj.dial_code)?.continent;
    return undefined;
}

export const getCountriesOfContinent = (continent: Continent, limit?: number): Country[] => {
    const requestedCountries = countries.filter((country: Country) => country.continent === continent.toUpperCase())
    return limit ? requestedCountries.slice(0, limit) : requestedCountries
}

export const getAllCountries = (limit?: number): Country[] => {
    const requestedCountries: Country[] = (limit ? countries.slice(0, limit) : countries) as Country[]
    return requestedCountries
}

export const sortCountries = (sortObj?: {data?: Country[], limit?: number}): Country[] => {
    const clonedCountries = [...countries]
    const sortedCountries = sortObj?.data ? sortObj.data?.sort(compareFunc) : clonedCountries.sort(compareFunc)
    const result = !sortObj?.limit ? sortedCountries : sortedCountries.slice(0, sortObj.limit)
    return result
}

export const getCountryStates = (countryObj: NameOrCodeOrDialCode): NATION_STATES | undefined => {
    const name = countryObj.name ?? countries.find(country => country.code === countryObj.code)?.name ?? countries.find(country => country.dial_code === countryObj.dial_code)?.name
    if(!name)return undefined
    const searchBy = name.toUpperCase() as STATE
    return STATES[searchBy]
}