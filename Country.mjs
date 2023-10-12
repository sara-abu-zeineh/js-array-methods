import {City} from "./City.mjs"

export class Country {
    constructor(id, countryName, numberOfPopulation, cities) {
        this.id = id;
        this.countryName = countryName;
        this.numberOfPopulation = numberOfPopulation;
        this.cities = this.addCities(cities);
    }

    addCities(cities) {
        return cities.map(city => {
            const {name, x, y} = city;
            return new City(name, x, y);
        });
    }

    addCity(city) {
        const {name, x, y} = city;
        const newCity = new City(name, x, y);
        this.cities.push(newCity);
    }

    deleteCity(cityToDelete) {
        const cityIndex = this.cities.findIndex(city => city.name.toLowerCase() === cityToDelete.toLowerCase());
        this.cities.splice(cityIndex, 1)
    }

}
