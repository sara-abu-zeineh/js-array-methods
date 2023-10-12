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

    searchByExactName(value) {
        const searchResult = this.countries.filter(item => item.countryName.toLowerCase() === value.toLowerCase());
        // or
        // const searchResultByFind = this.countryName.find(item => item.countryName.toLowerCase() === value.toLowerCase());
        // or by using indexOf but its case sensitive

        return searchResult ? searchResult : `${value} is not found`;
    }

    searchByPartialName(value) {
        const searchResult = this.countries.filter(item => item.countryName.toLowerCase().includes(value.toLowerCase()));

        return searchResult ? searchResult : `${value} is not found`;
    }

    deleteCountry(value) {
        const indexToDelete = this.countries.findIndex(item => item.countryName.toLowerCase() === value.toLowerCase());
        if (indexToDelete != -1) {
            this.countries.splice(indexToDelete, 1);
            return `${value} deleted successfully`;
        } else {
            return `${value} is not found`;
        }
    }

    addCityToCountry(country, city) {
        const countryIndex = this.indexOfCountry(country);
        if (countryIndex !== -1) {
            this.countries[countryIndex].cities.push(city);
            console.log(this.countries[countryIndex].cities);
            return `${city} added to ${country} successfully`
        } else {
            return `Please Enter the Country Name Correctly`
        }
    }
    
    indexOfCountry(value) {
        return this.countries.map(country => country.countryName.toLowerCase()).indexOf(value.toLowerCase());
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


console.log(allCountries.addCityToCountry("Liechtenstein", "Schaan"));
