// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string) {
    return drivers.filter( function(driver){
        return driver.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(drivers, char) {
    return drivers.filter( function(driver) {
        return driver.startsWith(char)
    })
}

function matchName(drivers, name) {
    return drivers.filter( function(driver) {
        return driver.name === name
    })
}