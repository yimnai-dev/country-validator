import { Continent, Country, CountryName, CountryCode, CountryDialCode, NameOrDialCode, NameOrCountryCode, CodeOrDialCode, NameOrCodeOrDialCode, NATION_STATES } from "./utils/types";
export declare const verifyCountryExistence: (country: CountryName) => boolean;
export declare const getCountryCode: (countryObj: NameOrDialCode) => CountryCode | undefined;
export declare const getCountryDialCode: (countryObj: NameOrCountryCode) => CountryDialCode | undefined;
export declare const getCountryName: (countryObj: CodeOrDialCode) => CountryName | undefined;
export declare const getCountryInfo: (countryObj: NameOrCodeOrDialCode) => Country | undefined;
export declare const verifyIfCountryInContinent: (countryObj: NameOrCodeOrDialCode, continent: Continent) => boolean;
export declare const getContinentOfCountry: (countryObj: NameOrCodeOrDialCode) => Continent | undefined;
export declare const getCountriesOfContinent: (continent: Continent, limit?: number) => Country[];
export declare const getAllCountries: (limit?: number) => Country[];
export declare const sortCountries: (sortObj?: {
    data?: Country[];
    limit?: number;
}) => Country[];
export declare const getCountryStates: (countryObj: NameOrCodeOrDialCode) => NATION_STATES | undefined;
