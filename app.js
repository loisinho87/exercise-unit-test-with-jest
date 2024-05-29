// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87  // british pound
}

// Función para convertir de euros a dólares
function fromEuroToDollar(euroAmount) {
    return euroAmount * oneEuroIs.USD;
}

// Función para convertir de dólares a yenes
function fromDollarToYen(dollarAmount) {
    let euroAmount = dollarAmount / oneEuroIs.USD;
    return euroAmount * oneEuroIs.JPY;
}

// Función para convertir de yenes a libras
function fromYenToPound(yenAmount) {
    let euroAmount = yenAmount / oneEuroIs.JPY;
    return euroAmount * oneEuroIs.GBP;
}

// Exportar las funciones y el objeto oneEuroIs
module.exports = {
    oneEuroIs,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};