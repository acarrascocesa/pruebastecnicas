/*

Enunciado Ejercicio 9:
Crea una función que reciba un array de números y calcule
la suma de todos los números pares del array
 
Ejemplos:
sumarPares([2, 13, 6, 15]);  // Resultado: 8
 
*/

// Solucion.
const sumarPares = (array) => {
    let numPares = []
    for (const num of array) {
        if (num % 2 == 0) {
            numPares.push(num);
        }
    }
    const sumaPar = numPares.reduce((vp, va) => {
        return vp + va
    }, 0)
    return sumaPar
};

console.log(sumarPares([2, 13, 6, 15, 16]));
