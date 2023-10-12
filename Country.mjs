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
}
