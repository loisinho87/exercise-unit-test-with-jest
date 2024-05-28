test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(1);

    // Si 1 euro son 1.07 dólares, entonces 1 euro debe ser (1 * 1.07)
    const expected = 1 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected);
})
