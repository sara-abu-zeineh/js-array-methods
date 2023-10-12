import {countries} from "./CountriesArray.mjs";

const sortedArraysAscending = [...countries].sort(function (firstCountry, secondCountry) {
    if (firstCountry.countryName > secondCountry.countryName) {
        return -1;
    }
    if (secondCountry.countryName > firstCountry.countryName) {
        return 1;
    } else {
        return 0;
    }
});

const sortedArrayDescending = [...countries].sort(function (firstCountry, secondCountry) {
    if (firstCountry.countryName > secondCountry.countryName) {
        return 1;
    }
    if (secondCountry.countryName > firstCountry.countryName) {
        return -1;
    } else {
        return 0;
    }
});

const sortedArrayUsingReverse = (arrayToReverse) => {
    return [...arrayToReverse].reverse();
}

const divideToChunks = (chunksNumber, arrayToDivide) => {
    const newChunked = [];

    for (let i = 0; i < arrayToDivide.length; i += chunksNumber) {
        const chunk = arrayToDivide.slice(i, i + chunksNumber);
        newChunked.push(chunk);
    }

    return newChunked;
}

const searchByPartialName = (arrayToSearch, value) => {
    const searchResult = arrayToSearch.filter(item => item.countryName.toLowerCase().includes(value));

    return searchResult ? searchResult : `${value} is not found`;
}

const searchByExactName = (arrayToSearch, value) => {
    const searchResult = arrayToSearch.filter(item => item.countryName.toLowerCase() === value.toLowerCase());
    // or
    const searchResultByFind = arrayToSearch.find(item => item.countryName.toLowerCase() === value.toLowerCase());
    // or by using indexOf but its case sensitive

    return searchResult ? searchResult : `${value} is not found`;
}

const checkCountry = (toCheckCountry) => {
    const isStateAvailable = countries.some(country => country.countryName.toLocaleLowerCase() === toCheckCountry.toLocaleLowerCase());

    isStateAvailable ? console.log(`${toCheckCountry} is FOUND`) : console.log(`${toCheckCountry} is NOT FOUND`);
}

const concatChunks = (...chunkArrays) => {
    const concatenatedChunks = [].concat(...chunkArrays);

    return concatenatedChunks;
}

const deleteCountry = (value, arrayToUse) => {
    const indexToDelete = arrayToUse.findIndex(item => item.countryName.toLowerCase() === value.toLowerCase());
    if (indexToDelete != -1) {
        arrayToUse.splice(indexToDelete, 1);
        console.log(`${value} deleted successfully`);
    } else {
        console.log(`${value} is not found`);
    }
}

const getLength = (arrayToUse) => {
    return arrayToUse.length;
}

const generateUniqueId = () => {
    const uniqueId = Math.floor((Math.random() * 99) + 1).toString() + new Date().getMilliseconds();
    const isUsedBefore = countries.some(item => item.id === uniqueId);

    if (isUsedBefore) {
        return generateUniqueId();
    } else {
        return uniqueId;
    }
}

const newCountry = {
    "countryName": "Palestine",
    "numberOfPopulation": 4030032477,
    "cities": ["Alquds", "Ramallah", "Hebron", "Gaza"]
}
const newCountryWithId = {
    id: + generateUniqueId(),
    ... newCountry
};

countries.push(newCountryWithId);
countries.pop();
countries.unshift(newCountryWithId);
// countries.shift();
// countries.splice(newCountryWithId, 1);

// const checkProvidedCountry = checkCountry("Israel");
// const dividedCountries = divideToChunks(100, countries);
// const concatCountries = concatChunks([
//     2, 5
// ], [3], [1]);
const indexOfState1 = countries.indexOf(newCountryWithId);
const indexOfState2 = countries.map(country => country.countryName).indexOf("Palestine");

const isStateAvailable1 = countries.includes(newCountryWithId);
const isStateAvailable2 = countries.map(country => country.countryName).includes("Palestine");

// const containsValue = searchByPartialName(countries, "af");

// const searchByExactCountryName = searchByExactName(countries, "palestine");
// const deleteByValue = deleteCountry("Israel", countries);
