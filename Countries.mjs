import {countries} from "./CountriesArray.mjs";

const sortedArraysAscending = [...countries].sort(function (firstCountry, secondCountry) {
    if (firstCountry > secondCountry) {
        return -1;
    }
    if (secondCountry > firstCountry) {
        return 1;
    }
    return 0;
});

const sortedArrayDescending = [...countries].sort(function (firstCountry, secondCountry) {
    if (firstCountry > secondCountry) {
        return 1;
    }
    if (secondCountry > firstCountry) {
        return -1;
    }
    return 0;
});

const divideToChunks = (chunksNumber, arrayToDivide) => {
    const newChunked = [];

    for (let i = 0; i < arrayToDivide.length; i += chunksNumber) {
        const chunk = arrayToDivide.slice(i, i + chunksNumber);
        newChunked.push(chunk);
    }

    // console.log(... newChunked)
    return newChunked;
}

const searchByPartialName = (arrayToSearch, value) => {
    const searchResult = arrayToSearch.filter(item => item.toLowerCase().includes(value));

    return searchResult ? searchResult : `${value} is not found`;
}

const searchByExactName = (arrayToSearch, value) => {
    const searchResult = arrayToSearch.filter(item => item.toLowerCase() === value.toLowerCase());
    // or 
	const searchResultByFind = arrayToSearch.find(item => value.toLowerCase() === item.toLowerCase());
	// or by using indexOf but its case sensitive
	// const searchUsingIndexOf = arrayToSearch.indexOf(value) > -1 ?
	// 							console.log(`${value} is FOUND`) 
	// 							: console.log(`${value} is NOT FOUND`)

    return searchResult ? searchResult : `${value} is not found`;
}

const checkCountry = (toCheckCountry) => {
	const isStateAvailable = countries.some(country => country.toLocaleLowerCase() === toCheckCountry.toLocaleLowerCase());
	
	isStateAvailable ? console.log(`${toCheckCountry} is FOUND`) : console.log(`${toCheckCountry} is NOT FOUND`)
}

const concatChunks = (...chunkArrays) => {
	const concatenatedChunks = [].concat(...chunkArrays);
	
    return concatenatedChunks;
}

countries.push("My Home");
countries.pop();
countries.unshift("My Home");
countries.shift();
countries.splice("My Home", 1);

const checkProvidedCountry = checkCountry("palestine");
const dividedCountries = divideToChunks(50, countries);
const concatCountries = concatChunks([2, 5], [3], [1]);
const indexOfState = countries.indexOf("Palestine");
const isStateAvailable = countries.includes("Palestine");
const containsValue = searchByPartialName(countries, "pal");
const searchByFullName = searchByExactName(countries, "palestine");
// console.log(searchByFullName)
