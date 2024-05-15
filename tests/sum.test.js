import sum from "../normal/sum";

// Definimos un conjunto de casos de prueba
// Importamos la función que queremos probar

test('sums two positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

//Con Parametros ---------------------
const fields = [
  [2, 3, 5],
  [1, 2, 3],
  [5, 7, 12],
  [-2, 3, 1],
];

test.each(fields)('sums two numbers %i and %i', (a, b, expected) => {
  expect(sum(a, b)).toBe(expected);
});
//----------------------



// Definimos un conjunto de casos de prueba
describe('Opciones de testeo y formas ', () => {
    // Caso de prueba 1
    test('sums two positive numbers', () => {
      expect(sum(2, 3)).toBe(5);
    });
  
    // Caso de prueba 2
    test('sums two negative numbers', () => {
      expect(sum(-2, -3)).toBe(-5);
    });
  
    // Caso de prueba 3
    test('sums a positive and a negative number', () => {
      expect(sum(2, -3)).toBe(-1);
    });
  
    // Caso de prueba 4
    test('sums zero and a number', () => {
      expect(sum(0, 5)).toBe(5);
    });


    // Caso de prueba 5 object
    test('object assigment', () => {
      const obj = { one: 1 };
      obj['two'] = 2;
      expect(obj).toEqual({ one: 1, two: 2 });
    })

    // Caso de prueba 6 Truthy
    test('one is truthy', () => {
        const n=1;
        expect(n).toBeTruthy();
    })





  });