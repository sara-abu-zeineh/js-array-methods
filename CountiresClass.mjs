import {countries} from "./CountriesArray.mjs";
import {Country} from "./Country.mjs";
import {generateUniqueId} from "./helpers.mjs"

class Countries {
    constructor() {
        this.countries = [];
    }

    // Push country to the end of the array
    addCountryAtEnd(country) {
        this.countries.push(country);
    }

    // Push country to the top of the array
    addCountryAtTop(country) {
        this.countries.unshift(country);
    }

    // Get all Countries
    getCountries() {
        return this.countries;
    }

    // Get sorted Array in Ascending order
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
        return sortedArray;
    }

    // Get sorted Array in Descending order
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
        return sortedArray;
    }

    // Get sorted Array in Ascending order
    sortedArrayUsingReverse() {
        return [...this.getSortedArrayAscending()].reverse();
    }

    // Divide the countries to chunks
    divideToChunks(chunksNumber) {
        const newChunked = [];

        for (let i = 0; i < this.countries.length; i += chunksNumber) {
            const chunk = this.countries.slice(i, i + chunksNumber);

            newChunked.push(chunk);
        }
        return newChunked;
    }

    // Concat the countries to one chunks
    concatChunks() {
        const concatenatedChunks = [].concat(...this.divideToChunks(3));

        return concatenatedChunks;
    }

    // Search for a country by its exact name
    searchByExactName(value) {
        const searchResult = this.countries.filter(item => item.countryName.toLowerCase() === value.toLowerCase());
        // or
        // const searchResultByFind = this.countryName.find(item => item.countryName.toLowerCase() === value.toLowerCase());
        // or by using indexOf but its case sensitive

        return searchResult ? searchResult : `${value} is not found`;
    }

    // Search for a country by its partial name
    searchByPartialName(value) {
        const searchResult = this.countries.filter(item => item.countryName.toLowerCase().includes(value.toLowerCase()));

        return searchResult ? searchResult : `${value} is not found`;
    }

    // Delete a country by its name
    deleteCountry(value) {
        const indexToDelete = this.countries.findIndex(item => item.countryName.toLowerCase() === value.toLowerCase());

        if (indexToDelete != -1) {
            this.countries.splice(indexToDelete, 1);

            return `${value} deleted successfully`;
        } else {
            return `${value} is not found`;
        }
    }

    // Add city to a country
    addCityToCountry(country, city) {
        const countryIndex = this.indexOfCountry(country);

        if (countryIndex !== -1) {
            this.countries[countryIndex].addCity(city);

            return `${
                city.name
            } added to ${country} successfully`;
        } else {
            return `Please Enter the Country Name Correctly`;
        }
    }

    // Delete city from a country
    deleteCityFromCountry(country, city) {
        const countryIndex = this.indexOfCountry(country);

        if (countryIndex !== -1) {
            const deleteCity = this.countries[countryIndex].deleteCity(city);

            return `${city} deleted to ${country} successfully`;
        } else {
            return `Please Enter the Country Name Correctly`;
        }
    }

    // Return the index of a specific country
    indexOfCountry(value) {
        return this.countries.map(country => country.countryName.toLowerCase()).indexOf(value.toLowerCase());
    }

    // Find country by passing the city name
    findCountryByCity(city) {
        const country = this.countries.filter(country => {
            return country.findCity(city);
        })[0];

        if (country) {
            return country.countryName;
        } else {
            return `Please Enter the city Name Correctly`;
        }
    }

    // Update city to a new city name
    updateCityInCountry(country, cityName, newCity) {
        const countryIndex = this.indexOfCountry(country);

        if (countryIndex !== -1) {
            this.countries[countryIndex].deleteCity(cityName);
            this.countries[countryIndex].addCity(newCity);

            return `${cityName} updated successfully to ${newCity}`;
        } else {
            return 'The City is not in that Country';
        }
    }
}


// Create a new instance of the Countries class
const allCountries = new Countries();

countries.forEach(country => {
    const {id, countryName, numberOfPopulation, cities} = country;
    country = new Country(id, countryName, numberOfPopulation, cities)
    allCountries.addCountryAtTop(country);
})

const newCountry = {
    "countryName": "Palestine",
    "numberOfPopulation": 4030032477,
    "cities": [
        {
            "name": "Alquds",
            "x": 31.7683,
            "y": 35.2137
        }, {
            "name": "Ramallah",
            "x": 31.9038,
            "y": 35.2034
        }, {
            "name": "Hebron",
            "x": 31.5293,
            "y": 35.0935
        }
    ]
}

const newCountryWithId = {
    id: + generateUniqueId(allCountries.getCountries()),
    ... newCountry
};

const {id, countryName, numberOfPopulation, cities} = newCountryWithId;
const newOne = new Country(id, countryName, numberOfPopulation, cities);

allCountries.addCountryAtTop(newOne);
const newCity = {
    "name": "Jenin",
    "x": 17.4549,
    "y": -46.5790
}
allCountries.updateCityInCountry("Palestine", "Ramallah", newCity);
