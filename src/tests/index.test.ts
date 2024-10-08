import { compareFunc } from './../utils/compare.util';
import { 
    verifyCountryExistence,
    getCountryCode,
    getCountryDialCode,
    getCountryName,
    getCountryInfo,
    verifyIfCountryInContinent,
    getContinentOfCountry,
    getCountriesOfContinent,
    getAllCountries,
    sortCountries,
    getCountryStates,
 } from "../index";

 import { STATES, countries } from "../utils/data";
import { Country } from "../utils/types";
import { expect, test } from 'vitest'

 const africanCountries = countries.filter((country: Country) => country.continent === 'AFRICA')
 const limitedAfricanCountries = africanCountries.slice(0, 5)
 


 test('Cameroon should return a truthy value and Camersn should be falsy', () => {
    expect(verifyCountryExistence('Cameroon')).toBeTruthy()
    //@ts-expect-error Passing wrong params should fail
    expect(verifyCountryExistence('Camersn')).toBeFalsy()
 })

 test('{name: Cameroon} should return +237, {name: Cameroon, code: CM} should return +237 {code: CM} should return cameroon', () => {
    expect(getCountryDialCode({name: 'Cameroon'})).toMatch('+237')
    expect(getCountryDialCode({name: 'Cameroon', code: 'CM'})).toMatch('+237')
    expect(getCountryDialCode({code: 'CM'})).toMatch('+237')
 })

 test('{name: Cameroon} should return CM, {dial_code: +237} should return CM, {name: Cameroon, dial_code: +237} should return the same', () => {
     expect(getCountryCode({name: 'Cameroon', dial_code: '+237'})).toMatch('CM')
     expect(getCountryCode({name: 'Cameroon'})).toMatch('CM')
     expect(getCountryCode({dial_code: '+237'})).toMatch('CM')
 })

 test('{code: CM}, {code: CM, dial_code: +237}, {dial_code: +237} should all return Cameroon', () => {
    expect(getCountryName({code: 'CM', dial_code: '+237'})).toMatch('Cameroon')
    expect(getCountryName({code: 'CM'})).toMatch('Cameroon')
    expect(getCountryName({dial_code: '+237'})).toMatch('Cameroon')
 })

 test('{code: CM}, {dial_code: +237}, {name: Cameroon}, {code: CM, dial_code: +237, name: Cameroon} should all return {name: Cameroon, dial_code: +237, code: CM, continent: AFRICA}', () => {
    expect(getCountryInfo({code: 'CM', dial_code: '+237', name: 'Cameroon'})).toEqual({name: 'Cameroon', code: 'CM', dial_code: '+237', continent: 'AFRICA'})
    expect(getCountryInfo({code: 'CM', dial_code: '+237'})).toEqual({name: 'Cameroon', code: 'CM', dial_code: '+237', continent: 'AFRICA'})
    expect(getCountryInfo({dial_code: '+237', name: 'Cameroon'})).toEqual({name: 'Cameroon', code: 'CM', dial_code: '+237', continent: 'AFRICA'})
    expect(getCountryInfo({code: 'CM', name: 'Cameroon'})).toEqual({name: 'Cameroon', code: 'CM', dial_code: '+237', continent: 'AFRICA'})
 })

 test('({name: Cameroon, code: CM, dial_code: +237}, AFRICA), ({name: Cameroon, code: CM}, AFRICA), ({name: Cameroon, dial_code: CM}, AFRICA), ({name: Cameroon}, AFRICA), ({code: Cameroon}, AFRICA), ({dial_code: Cameroon}, AFRICA)', () => {
    expect(verifyIfCountryInContinent({name: 'Cameroon', code: 'CM', dial_code: '+237'}, 'AFRICA')).toBeTruthy()
    expect(verifyIfCountryInContinent({dial_code: '+237'}, 'AFRICA')).toBeTruthy()
    expect(verifyIfCountryInContinent({code: 'CM'}, 'AFRICA')).toBeTruthy()
    expect(verifyIfCountryInContinent({name: 'Cameroon'}, 'AFRICA')).toBeTruthy()
    expect(verifyIfCountryInContinent({name: 'Cameroon', code: 'CM'}, 'AFRICA')).toBeTruthy()
    expect(verifyIfCountryInContinent({name: 'Cameroon', dial_code: '+237'}, 'AFRICA')).toBeTruthy()
    expect(verifyIfCountryInContinent({code: 'CM', dial_code: '+237'}, 'AFRICA')).toBeTruthy()
 })

 test('{name: cameroon}, {code: CM}, {dial_code: +237} should return AFRICA', () => {
   //@ts-expect-error Passing wrong params should fail
    expect(getContinentOfCountry({name: 'cameroon'})).toMatch('AFRICA')
    expect(getContinentOfCountry({code: 'CM'})).toMatch('AFRICA')
    expect(getContinentOfCountry({dial_code: '+237'})).toMatch('AFRICA')
 })

 test('(AFRICA), (AFRICA, 5) should yield arrays of unequal lengths of african countries', () => {
    expect(getCountriesOfContinent('AFRICA')).toEqual(africanCountries)
    expect(getCountriesOfContinent('AFRICA', 5)).toEqual(limitedAfricanCountries)
 })

 test('() and (5) should yield arrays of unequal lengths of all countries', () => {
    expect(getAllCountries()).toEqual(countries)
    expect(getAllCountries(5)).toEqual(countries.slice(0, 5))
 })

 test('Depending on the params passed, there should be a sorted list of countries received', () => {
    expect(sortCountries({data: africanCountries})).toEqual(africanCountries.sort(compareFunc))
    expect(sortCountries({data: africanCountries, limit: 5})).toEqual(africanCountries.sort(compareFunc).slice(0, 5))
    //@ts-expect-error Passing wrong params should fail
    expect(sortCountries({limit: 5})).toEqual(countries.sort(compareFunc).slice(0, 5))
    //@ts-expect-error Passing wrong params should fail
    expect(sortCountries()).toEqual(countries.sort(compareFunc))
 })

 test('Get states of passed country', () => {
   expect(getCountryStates({name: 'Cameroon'})).toEqual(STATES['CAMEROON'])
   expect(getCountryStates({dial_code: '+237'})).toEqual(STATES['CAMEROON'])
   expect(getCountryStates({code: 'CM'})).toEqual(STATES['CAMEROON'])
   //@ts-expect-error Passing a wrong country code | name | dialcode should fail
   expect(getCountryStates({code: 'CMs'})).toEqual(undefined)
})
