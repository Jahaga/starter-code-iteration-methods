// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

const greenEyes1 = users.filter(user => user.eyeColor === "green")
printKata(0, greenEyes1)

const userActive = users.filter(user => user.isActive === true)
printKata(1, userActive)

const usersEmail = users.map(user => user.email)
printKata(2, usersEmail)

const userOvation = users.some(user => user.company === "OVATION")
printKata(3, userOvation)

const userOver38 = users.find(user => user.age >= "38")
printKata(4, userOver38)

const userOver38Active = users
    .filter(user => user.isActive === true)
    .find(user => user.age > "38")
printKata(5, userOver38Active)

const userBalance = users
    .filter(user => user.company === "ZENCO")
    .map(user => user.balance)
printKata(6, userBalance)

const userFugiat = users
    .filter(user => user.tags.includes("fugiat"))
    .map(user => user.age)
printKata(7, userFugiat)

function printKata(kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}