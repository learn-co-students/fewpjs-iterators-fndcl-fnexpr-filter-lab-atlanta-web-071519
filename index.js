// Code your solution here
const findMatching = (driverArray, string) => {
    return driverArray.filter((driver) => {
        return driver.toLowerCase() === string.toLowerCase(); 
    })
}

const fuzzyMatch = (driverArray, string) => {
    return driverArray.filter((driver) => {
        return driver.charAt(0) === string.charAt(0); 
    })
}

const matchName = (driverArray, string) => {
    return driverArray.filter((driver) => {
        return driver.name.toLowerCase() === string.toLowerCase(); 
    })
}