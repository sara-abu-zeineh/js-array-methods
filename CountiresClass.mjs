import {countries} from "./CountriesArray.mjs";
import {Country} from "./Country.mjs";
import {generateUniqueId} from "./helpers.mjs"

class Countries {
    constructor() {
        this.countries = [];
    }

    addCountryAtEnd(country) {
        this.countries.push(country);
    }

    addCountryAtTop(country) {
        this.countries.unshift(country);
    }

    getCountries() {
        return this.countries;
    }
}

const allCountries = new Countries();

countries.forEach(country => {
    const {id, countryName, numberOfPopulation, cities} = country;
    country = new Country(id, countryName, numberOfPopulation, cities)
    allCountries.addCountryAtTop(country);
})

const newCountry = {
    "countryName": "Palestine",
    "numberOfPopulation": 4030032477,
    "cities": ["Alquds", "Ramallah", "Hebron", "Gaza"]
}

const newCountryWithId = {
    id: + generateUniqueId(allCountries.getCountries()),
    ... newCountry
};

allCountries.addCountryAtTop(newCountryWithId);
