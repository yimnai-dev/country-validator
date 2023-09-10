"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountryStates = exports.sortCountries = exports.getAllCountries = exports.getCountriesOfContinent = exports.getContinentOfCountry = exports.verifyIfCountryInContinent = exports.getCountryInfo = exports.getCountryName = exports.getCountryDialCode = exports.getCountryCode = exports.verifyCountryExistence = void 0;
const compare_util_1 = require("./utils/compare.util");
const data_1 = require("./utils/data");
const verifyCountryExistence = (country) => {
    const searchedCountry = data_1.countries.find((place) => place.name === (0, compare_util_1.capitalize)(country));
    return Boolean(searchedCountry);
};
exports.verifyCountryExistence = verifyCountryExistence;
const getCountryCode = (countryObj) => {
    var _a, _b;
    if (countryObj.name)
        return (_a = data_1.countries.find((country) => country.name === (0, compare_util_1.capitalize)(countryObj.name))) === null || _a === void 0 ? void 0 : _a.code;
    if (countryObj.dial_code)
        return (_b = data_1.countries.find((country) => country.dial_code === countryObj.dial_code)) === null || _b === void 0 ? void 0 : _b.code;
    return undefined;
};
exports.getCountryCode = getCountryCode;
const getCountryDialCode = (countryObj) => {
    var _a, _b;
    if (countryObj.name)
        return (_a = data_1.countries.find((country) => country.name === (0, compare_util_1.capitalize)(countryObj.name))) === null || _a === void 0 ? void 0 : _a.dial_code;
    if (countryObj.code)
        return (_b = data_1.countries.find((country) => country.code === (0, compare_util_1.capitalize)(countryObj.code))) === null || _b === void 0 ? void 0 : _b.dial_code;
    return undefined;
};
exports.getCountryDialCode = getCountryDialCode;
const getCountryName = (countryObj) => {
    var _a, _b;
    if (countryObj.code)
        return (_a = data_1.countries.find((country) => country.code === (0, compare_util_1.capitalize)(countryObj.code))) === null || _a === void 0 ? void 0 : _a.name;
    if (countryObj.dial_code)
        return (_b = data_1.countries.find((country) => country.dial_code === countryObj.dial_code)) === null || _b === void 0 ? void 0 : _b.name;
    return undefined;
};
exports.getCountryName = getCountryName;
const getCountryInfo = (countryObj) => {
    if (countryObj.name)
        return data_1.countries.find((country) => country.name === (0, compare_util_1.capitalize)(countryObj.name));
    if (countryObj.code)
        return data_1.countries.find((country) => country.code === (0, compare_util_1.capitalize)(countryObj.code));
    if (countryObj.dial_code)
        return data_1.countries.find((country) => country.dial_code === countryObj.dial_code);
    return undefined;
};
exports.getCountryInfo = getCountryInfo;
const verifyIfCountryInContinent = (countryObj, continent) => {
    if (countryObj.name)
        return data_1.countries.some((country) => country.name === (0, compare_util_1.capitalize)(countryObj.name) && country.continent === continent);
    if (countryObj.code)
        return data_1.countries.some((country) => country.code === (0, compare_util_1.capitalize)(countryObj.code) && country.continent === continent);
    if (countryObj.dial_code)
        return data_1.countries.some((country) => country.dial_code === countryObj.dial_code && country.continent === continent);
    return false;
};
exports.verifyIfCountryInContinent = verifyIfCountryInContinent;
const getContinentOfCountry = (countryObj) => {
    var _a, _b, _c;
    if (countryObj.name)
        return (_a = data_1.countries.find((country) => country.name === (0, compare_util_1.capitalize)(countryObj.name))) === null || _a === void 0 ? void 0 : _a.continent;
    if (countryObj.code)
        return (_b = data_1.countries.find((country) => country.code === (0, compare_util_1.capitalize)(countryObj.code))) === null || _b === void 0 ? void 0 : _b.continent;
    if (countryObj.dial_code)
        return (_c = data_1.countries.find((country) => country.dial_code === countryObj.dial_code)) === null || _c === void 0 ? void 0 : _c.continent;
    return undefined;
};
exports.getContinentOfCountry = getContinentOfCountry;
const getCountriesOfContinent = (continent, limit) => {
    const requestedCountries = data_1.countries.filter((country) => country.continent === continent.toUpperCase());
    return limit ? requestedCountries.slice(0, limit) : requestedCountries;
};
exports.getCountriesOfContinent = getCountriesOfContinent;
const getAllCountries = (limit) => {
    const requestedCountries = (limit ? data_1.countries.slice(0, limit) : data_1.countries);
    return requestedCountries;
};
exports.getAllCountries = getAllCountries;
const sortCountries = (sortObj) => {
    var _a;
    const clonedCountries = [...data_1.countries];
    const sortedCountries = (sortObj === null || sortObj === void 0 ? void 0 : sortObj.data) ? (_a = sortObj.data) === null || _a === void 0 ? void 0 : _a.sort(compare_util_1.compareFunc) : clonedCountries.sort(compare_util_1.compareFunc);
    const result = !(sortObj === null || sortObj === void 0 ? void 0 : sortObj.limit) ? sortedCountries : sortedCountries.slice(0, sortObj.limit);
    return result;
};
exports.sortCountries = sortCountries;
const getCountryStates = (countryObj) => {
    var _a, _b, _c, _d;
    const name = (_c = (_a = countryObj.name) !== null && _a !== void 0 ? _a : (_b = data_1.countries.find(country => country.code === countryObj.code)) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : (_d = data_1.countries.find(country => country.dial_code === countryObj.dial_code)) === null || _d === void 0 ? void 0 : _d.name;
    if (!name)
        return undefined;
    const searchBy = name.toUpperCase();
    return data_1.STATES[searchBy];
};
exports.getCountryStates = getCountryStates;
