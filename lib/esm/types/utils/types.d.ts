import { countries, STATES } from './data.js';
export type Country = {
    name: string;
    dial_code: string;
    code: string;
    continent: Continent;
};
export type Continent = 'AFRICA' | 'EUROPE' | 'ASIA' | 'SOUTH AMERICA' | 'NORTH AMERICA' | 'OCEANIA' | 'ANTARTICA';
export type CountryName = typeof countries[number]['name'];
export type CountryCode = typeof countries[number]['code'];
export type CountryDialCode = typeof countries[number]['dial_code'];
export type NameOrCountryCode = Partial<{
    name: CountryName;
    code: CountryCode;
}>;
export type NameOrDialCode = Partial<{
    name: CountryName;
    dial_code: CountryDialCode;
}>;
export type CodeOrDialCode = Partial<{
    code: CountryCode;
    dial_code: CountryDialCode;
}>;
export type NameOrCodeOrDialCode = Partial<{
    name: CountryName;
    code: CountryCode;
    dial_code: CountryDialCode;
}>;
export type NATION_STATES = typeof STATES[keyof typeof STATES];
export type STATE = keyof typeof STATES;
//# sourceMappingURL=types.d.ts.map