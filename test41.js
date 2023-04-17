/*

Enunciado Ejercicio 41:
Crea una función que invierta los números de un número entero.
 
Ejemplos:
invertirEntero(123)   // 321
invertirEntero(-123)  // -321
 
*/

// Solucion.
const invertirEntero = (num) => {
    let text = num.toString();
    let numeros = text.split("");
    
    
    return parseInt(numeros.reverse().join("").toString());
};

console.log(invertirEntero(123));
console.log(invertirEntero(-123));