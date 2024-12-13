// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// funcion para convertir de dolares a yenes
const fromDollarToYen = (dollars) =>{
    const euros = dollars / oneEuroIs.USD;
    const yenes = euros / oneEuroIs.JPY;
    return yenes;
}

// funcion para convertir de euros a dolares
const fromEuroToDollar = (euros) =>{
    return euros * oneEuroIs.USD;   
}

// funcion para vonvertir de yenes a libras
const fromYenToPound = (yenes) => {
    const euros = yenes / oneEuroIs.JPY;
    const pounds = euros * oneEuroIs.GBP;
    return pounds;
}

module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound}