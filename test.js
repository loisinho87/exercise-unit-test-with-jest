// Importo las funciones desde app.js
const { oneEuroIs, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("Un euro debería ser 1.07 dólares", function() {
    // Uso la función para convertir de euros a dólares, osea la importo de app.js
    const dollars = fromEuroToDollar(1);
    // Si 1 euro son 1.07 dólares, entonces 1 euro debe ser (1 * 1.07)
    const expected = 1 * 1.07; // const expected = 1 * oneEuroIs.USD;

    // Hago mi comparación del resultado de la función con el valor esperado.
    expect(dollars).toBe(expected);
});

test("10 dollares deberían ser 1461.68 yenes", function() {
    // Uso la función de dollar a yen de app.js (importo)
    const yenes = fromDollarToYen(10); // convertir a yenes esos 10 dólares. ¿como?
    // Primero convierto 10 dólares a euros, luego de euros a yenes
    const expected = (10 / oneEuroIs.USD) * oneEuroIs.JPY; //const expected = (10 / 1.07) * 156.5;
    
    expect(yenes).toBe(expected);
});

test("1000 yenes deberían ser 5.56 pounds", function() {
    // Uso la función como debe ser usada
    const pounds = fromYenToPound(1000);
    // Primero convierto de yenes a euros, luego de euros a libras
    const expected = (1000 / oneEuroIs.JPY) * oneEuroIs.GBP; //const expected = (1000 / 156.5) * 0.87;

    // Hago mi comparación (la prueba)
    expect(pounds).toBe(expected);
});
