import {countries} from "./CountriesArray.mjs";
import {Country} from "./Country.mjs";

class Countries {
    constructor() {
        this.countries = [];
    }

    addCountryAtEnd(country) {
        this.countries.push(country)
    }

    addCountryAtTop(country) {
        this.countries.unshift(country)
    }
    getAllCountriesIds() {}
}

const allCountries = new Countries();

countries.forEach(country => {
    const {id, countryName, numberOfPopulation, cities} = country;
    country = new Country(id, countryName, numberOfPopulation, cities)
    allCountries.addCountryAtTop(country);
})
