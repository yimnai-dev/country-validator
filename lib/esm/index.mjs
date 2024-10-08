import { capitalize, compareFunc } from './utils/compare.util';
import { countries, STATES } from './utils/data';
export const verifyCountryExistence = (country) => {
    const searchedCountry = countries.find((place) => place.name === capitalize(country));
    return Boolean(searchedCountry);
};
export const getCountryCode = (countryObj) => {
    if (countryObj.name)
        return countries.find((country) => country.name === capitalize(countryObj.name))?.code;
    if (countryObj.dial_code)
        return countries.find((country) => country.dial_code === countryObj.dial_code)?.code;
    return undefined;
};
export const getCountryDialCode = (countryObj) => {
    if (countryObj.name)
        return countries.find((country) => country.name === capitalize(countryObj.name))?.dial_code;
    if (countryObj.code)
        return countries.find((country) => country.code === capitalize(countryObj.code))?.dial_code;
    return undefined;
};
export const getCountryName = (countryObj) => {
    if (countryObj.code)
        return countries.find((country) => country.code === capitalize(countryObj.code))?.name;
    if (countryObj.dial_code)
        return countries.find((country) => country.dial_code === countryObj.dial_code)?.name;
    return undefined;
};
export const getCountryInfo = (countryObj) => {
    if (countryObj.name)
        return countries.find((country) => country.name === capitalize(countryObj.name));
    if (countryObj.code)
        return countries.find((country) => country.code === capitalize(countryObj.code));
    if (countryObj.dial_code)
        return countries.find((country) => country.dial_code === countryObj.dial_code);
    return undefined;
};
export const verifyIfCountryInContinent = (countryObj, continent) => {
    if (countryObj.name)
        return countries.some((country) => country.name === capitalize(countryObj.name) && country.continent === continent);
    if (countryObj.code)
        return countries.some((country) => country.code === capitalize(countryObj.code) && country.continent === continent);
    if (countryObj.dial_code)
        return countries.some((country) => country.dial_code === countryObj.dial_code && country.continent === continent);
    return false;
};
export const getContinentOfCountry = (countryObj) => {
    if (countryObj.name)
        return countries.find((country) => country.name === capitalize(countryObj.name))?.continent;
    if (countryObj.code)
        return countries.find((country) => country.code === capitalize(countryObj.code))?.continent;
    if (countryObj.dial_code)
        return countries.find((country) => country.dial_code === countryObj.dial_code)?.continent;
    return undefined;
};
export const getCountriesOfContinent = (continent, limit) => {
    const requestedCountries = countries.filter((country) => country.continent === continent.toUpperCase());
    return limit ? requestedCountries.slice(0, limit) : requestedCountries;
};
export const getAllCountries = (limit) => {
    const requestedCountries = (limit ? countries.slice(0, limit) : countries);
    return requestedCountries;
};
export const sortCountries = (sortObj) => {
    const clonedCountries = [...countries];
    const sortedCountries = sortObj?.data ? sortObj.data?.sort(compareFunc) : clonedCountries.sort(compareFunc);
    const result = !sortObj?.limit ? sortedCountries : sortedCountries.slice(0, sortObj.limit);
    return result;
};
export const getCountryStates = (countryObj) => {
    const name = countryObj.name ?? countries.find(country => country.code === countryObj.code)?.name ?? countries.find(country => country.dial_code === countryObj.dial_code)?.name;
    if (!name)
        return undefined;
    const searchBy = name.toUpperCase();
    return STATES[searchBy];
};
