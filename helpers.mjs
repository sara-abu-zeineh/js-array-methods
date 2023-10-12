export const generateUniqueId = (allCountries) => {
    const uniqueId = Math.floor((Math.random() * 99) + 1).toString() + new Date().getMilliseconds();
    const isUsedBefore = allCountries.some(item => item.id === uniqueId);

    if (isUsedBefore) {
        return generateUniqueId();
    } else {
        return uniqueId;
    }
}