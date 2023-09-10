country-validator is a javascript library that helps in working with basic data about world countries such as names, country code, dial code and continent.


# installation
`npm install @yimnai-dev/country-validator --save`
**OR**
`pnpm install @yimnai-dev/country-validator`
**OR**
`yarn install@yimnai-dev/country-validator`


# GITHUB
- [country-validator](https://www.github.com/yimnai-dev/nation-validator)


## API Reference

#### Get all countries

```function
  getAllCountries(limit)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `limit` | `number` | **Optional**. The number of countries you want to get. The absence of a limit will return all countries |

#### Get sorted countries

```function
  sortCountries({name, code, dial_code, continent}, limit)
```

The absence  of any of the parameters listed above will simply return a sorted list of all countries. You can limit the number of countries  with the limit parameter. You do not need to pass all of the object parameters as any of them can be used to query the countries

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Optional** |
| `code`      | `string` | **Optional** |
| `dial_code`      | `string` | **Optional** |
| `continent`      | `string` | **Optional** |


#### Get Countries of a continent

```function
   getCountriesOfContinent(continent, limit)
```

Takes a continent and a limit and returns all countries that satisfy that condition.
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `continent`      | `string` | **Required** |
| `limit`      | `number` | **Required** |

#### Get the continent of a particular country

```function
   getContinentOfCountry({name, dial_code, code})
```

Passing either the name, dial_code or code of a country will return its continent if it exists. At least one of the parameters must be passed for it to work as intended
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Optional** |
| `dial_code`      | `string` | **Optional** |
| `code`      | `string` | **Optional** |


#### Verify if particular country is in passed continent

```function
   verifyIfCountryInContinent({name, dial_code, code}, continent)
```

Passing either the name, dial_code or code of a country and the continent against which you are testing it will return a boolean value indicating whether or not the country is in that particular continent. At least one of the parameters must be passed for it to work as intended
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Optional** |
| `dial_code`      | `string` | **Optional** |
| `code`      | `string` | **Optional** |
| `continent`      | `string` | **Required** |

#### Get information about a particular country

```function
   getCountryInfo({name, dial_code, code})
```

Passing either the name, dial_code or code of a country will return an object containing the basic information about that country
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Optional** |
| `dial_code`      | `string` | **Optional** |
| `code`      | `string` | **Optional** |

#### Get the name of a country

```function
   getCountryName({dial_code, code})
```

Passing either the dial_code or code of a country will return the name of the country if it exists. At least one parameter must be passed.
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `dial_code`      | `string` | **Optional** |
| `code`      | `string` | **Optional** |

#### Get the country code of a country

```function
   getCountryCode({dial_code, name})
```

Passing either the dial_code or name of a country will return the country Code of the country if it exists. At least one parameter must be passed.
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `dial_code`      | `string` | **Optional** |
| `name`      | `string` | **Optional** |

#### Get the dial code of a country

```function
   getCountryDialCode({name, code})
```

Passing either the name or code of a country will return the Dial Dial Code of the country if it exists. At least one parameter must be passed.
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Optional** |
| `code`      | `string` | **Optional** |


#### Verify if a country exists

```function
   verifyCountryExistence(country: string)
```

Passing the name of the country will return a boolean indicating whether or not the country exists or not.
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `country`      | `string` | **Required** |

#### Get list of states in country

```function
   getCountryStates(countryObj: NameOrCodeOrDialCode)
```

Passing any of these parameters will return an array of all the states in the country. Passing none of them will return undefined.
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Optional** |
| `code`      | `string` | **Optional** |
| `dial_code`      | `string` | **Optional** |


**Make sure to enter the full name of a country when checking with a name parameter. Also, empty objects will be returned if nothing could be found.**

## Appendix

This library was put together by Yimnai Nerus. If you want to contribute, you can always fork the project to do so. Constructive feedback and criticism is highly valued. Thank you for using our library.

## Authors

- [@yimnai-dev](https://www.github.com/yimnai-dev)

## 🚀 About Me
Web developer and software engineer