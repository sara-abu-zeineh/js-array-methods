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

    getSortedArrayAscending() {
        const sortedArray = [...this.countries].sort(function (firstCountry, secondCountry) {
            if (firstCountry.countryName > secondCountry.countryName) {
                return 1;
            }
            if (secondCountry.countryName > firstCountry.countryName) {
                return -1;
            } else {
                return 0;
            }
        });
        return sortedArray
    }

    sortedArrayDescending() {
        const sortedArray = [...this.countries].sort(function (firstCountry, secondCountry) {
            if (firstCountry.countryName > secondCountry.countryName) {
                return -1;
            }
            if (secondCountry.countryName > firstCountry.countryName) {
                return 1;
            } else {
                return 0;
            }
        });
        return sortedArray
    }

    sortedArrayUsingReverse() {
        return [...this.getSortedArrayAscending()].reverse();
    }

    divideToChunks(chunksNumber) {
        const newChunked = [];

        for (let i = 0; i < this.countries.length; i += chunksNumber) {
            const chunk = this.countries.slice(i, i + chunksNumber);
            newChunked.push(chunk);
        }
        return newChunked;
    }

    concatChunks() {
        const concatenatedChunks = [].concat(...this.divideToChunks(3));

        return concatenatedChunks;
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


console.log(allCountries.concatChunks());