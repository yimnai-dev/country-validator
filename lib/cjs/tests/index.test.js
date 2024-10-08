"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compare_util_js_1 = require("./../utils/compare.util.js");
const index_js_1 = require("../index.js");
const data_js_1 = require("../utils/data.js");
const vitest_1 = require("vitest");
const africanCountries = data_js_1.countries.filter((country) => country.continent === 'AFRICA');
const limitedAfricanCountries = africanCountries.slice(0, 5);
(0, vitest_1.test)('Cameroon should return a truthy value and Camersn should be falsy', () => {
    (0, vitest_1.expect)((0, index_js_1.verifyCountryExistence)('Cameroon')).toBeTruthy();
    //@ts-expect-error Passing wrong params should fail
    (0, vitest_1.expect)((0, index_js_1.verifyCountryExistence)('Camersn')).toBeFalsy();
});
(0, vitest_1.test)('{name: Cameroon} should return +237, {name: Cameroon, code: CM} should return +237 {code: CM} should return cameroon', () => {
    (0, vitest_1.expect)((0, index_js_1.getCountryDialCode)({ name: 'Cameroon' })).toMatch('+237');
    (0, vitest_1.expect)((0, index_js_1.getCountryDialCode)({ name: 'Cameroon', code: 'CM' })).toMatch('+237');
    (0, vitest_1.expect)((0, index_js_1.getCountryDialCode)({ code: 'CM' })).toMatch('+237');
});
(0, vitest_1.test)('{name: Cameroon} should return CM, {dial_code: +237} should return CM, {name: Cameroon, dial_code: +237} should return the same', () => {
    (0, vitest_1.expect)((0, index_js_1.getCountryCode)({ name: 'Cameroon', dial_code: '+237' })).toMatch('CM');
    (0, vitest_1.expect)((0, index_js_1.getCountryCode)({ name: 'Cameroon' })).toMatch('CM');
    (0, vitest_1.expect)((0, index_js_1.getCountryCode)({ dial_code: '+237' })).toMatch('CM');
});
(0, vitest_1.test)('{code: CM}, {code: CM, dial_code: +237}, {dial_code: +237} should all return Cameroon', () => {
    (0, vitest_1.expect)((0, index_js_1.getCountryName)({ code: 'CM', dial_code: '+237' })).toMatch('Cameroon');
    (0, vitest_1.expect)((0, index_js_1.getCountryName)({ code: 'CM' })).toMatch('Cameroon');
    (0, vitest_1.expect)((0, index_js_1.getCountryName)({ dial_code: '+237' })).toMatch('Cameroon');
});
(0, vitest_1.test)('{code: CM}, {dial_code: +237}, {name: Cameroon}, {code: CM, dial_code: +237, name: Cameroon} should all return {name: Cameroon, dial_code: +237, code: CM, continent: AFRICA}', () => {
    (0, vitest_1.expect)((0, index_js_1.getCountryInfo)({ code: 'CM', dial_code: '+237', name: 'Cameroon' })).toEqual({ name: 'Cameroon', code: 'CM', dial_code: '+237', continent: 'AFRICA' });
    (0, vitest_1.expect)((0, index_js_1.getCountryInfo)({ code: 'CM', dial_code: '+237' })).toEqual({ name: 'Cameroon', code: 'CM', dial_code: '+237', continent: 'AFRICA' });
    (0, vitest_1.expect)((0, index_js_1.getCountryInfo)({ dial_code: '+237', name: 'Cameroon' })).toEqual({ name: 'Cameroon', code: 'CM', dial_code: '+237', continent: 'AFRICA' });
    (0, vitest_1.expect)((0, index_js_1.getCountryInfo)({ code: 'CM', name: 'Cameroon' })).toEqual({ name: 'Cameroon', code: 'CM', dial_code: '+237', continent: 'AFRICA' });
});
(0, vitest_1.test)('({name: Cameroon, code: CM, dial_code: +237}, AFRICA), ({name: Cameroon, code: CM}, AFRICA), ({name: Cameroon, dial_code: CM}, AFRICA), ({name: Cameroon}, AFRICA), ({code: Cameroon}, AFRICA), ({dial_code: Cameroon}, AFRICA)', () => {
    (0, vitest_1.expect)((0, index_js_1.verifyIfCountryInContinent)({ name: 'Cameroon', code: 'CM', dial_code: '+237' }, 'AFRICA')).toBeTruthy();
    (0, vitest_1.expect)((0, index_js_1.verifyIfCountryInContinent)({ dial_code: '+237' }, 'AFRICA')).toBeTruthy();
    (0, vitest_1.expect)((0, index_js_1.verifyIfCountryInContinent)({ code: 'CM' }, 'AFRICA')).toBeTruthy();
    (0, vitest_1.expect)((0, index_js_1.verifyIfCountryInContinent)({ name: 'Cameroon' }, 'AFRICA')).toBeTruthy();
    (0, vitest_1.expect)((0, index_js_1.verifyIfCountryInContinent)({ name: 'Cameroon', code: 'CM' }, 'AFRICA')).toBeTruthy();
    (0, vitest_1.expect)((0, index_js_1.verifyIfCountryInContinent)({ name: 'Cameroon', dial_code: '+237' }, 'AFRICA')).toBeTruthy();
    (0, vitest_1.expect)((0, index_js_1.verifyIfCountryInContinent)({ code: 'CM', dial_code: '+237' }, 'AFRICA')).toBeTruthy();
});
(0, vitest_1.test)('{name: cameroon}, {code: CM}, {dial_code: +237} should return AFRICA', () => {
    //@ts-expect-error Passing wrong params should fail
    (0, vitest_1.expect)((0, index_js_1.getContinentOfCountry)({ name: 'cameroon' })).toMatch('AFRICA');
    (0, vitest_1.expect)((0, index_js_1.getContinentOfCountry)({ code: 'CM' })).toMatch('AFRICA');
    (0, vitest_1.expect)((0, index_js_1.getContinentOfCountry)({ dial_code: '+237' })).toMatch('AFRICA');
});
(0, vitest_1.test)('(AFRICA), (AFRICA, 5) should yield arrays of unequal lengths of african countries', () => {
    (0, vitest_1.expect)((0, index_js_1.getCountriesOfContinent)('AFRICA')).toEqual(africanCountries);
    (0, vitest_1.expect)((0, index_js_1.getCountriesOfContinent)('AFRICA', 5)).toEqual(limitedAfricanCountries);
});
(0, vitest_1.test)('() and (5) should yield arrays of unequal lengths of all countries', () => {
    (0, vitest_1.expect)((0, index_js_1.getAllCountries)()).toEqual(data_js_1.countries);
    (0, vitest_1.expect)((0, index_js_1.getAllCountries)(5)).toEqual(data_js_1.countries.slice(0, 5));
});
(0, vitest_1.test)('Depending on the params passed, there should be a sorted list of countries received', () => {
    (0, vitest_1.expect)((0, index_js_1.sortCountries)({ data: africanCountries })).toEqual(africanCountries.sort(compare_util_js_1.compareFunc));
    (0, vitest_1.expect)((0, index_js_1.sortCountries)({ data: africanCountries, limit: 5 })).toEqual(africanCountries.sort(compare_util_js_1.compareFunc).slice(0, 5));
    //@ts-expect-error Passing wrong params should fail
    (0, vitest_1.expect)((0, index_js_1.sortCountries)({ limit: 5 })).toEqual(data_js_1.countries.sort(compare_util_js_1.compareFunc).slice(0, 5));
    //@ts-expect-error Passing wrong params should fail
    (0, vitest_1.expect)((0, index_js_1.sortCountries)()).toEqual(data_js_1.countries.sort(compare_util_js_1.compareFunc));
});
(0, vitest_1.test)('Get states of passed country', () => {
    (0, vitest_1.expect)((0, index_js_1.getCountryStates)({ name: 'Cameroon' })).toEqual(data_js_1.STATES['CAMEROON']);
    (0, vitest_1.expect)((0, index_js_1.getCountryStates)({ dial_code: '+237' })).toEqual(data_js_1.STATES['CAMEROON']);
    (0, vitest_1.expect)((0, index_js_1.getCountryStates)({ code: 'CM' })).toEqual(data_js_1.STATES['CAMEROON']);
    //@ts-expect-error Passing a wrong country code | name | dialcode should fail
    (0, vitest_1.expect)((0, index_js_1.getCountryStates)({ code: 'CMs' })).toEqual(undefined);
});
