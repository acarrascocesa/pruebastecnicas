/*

Enunciado Ejercicio 37:
Crea dos funciones que comprueben si dado un array de números,
todos ellos son pares.
 
Una función usando metodos del lenguaje y otra solo usando estructuras de control.
 
Ejemplos:
todosPares([1, 2, 3, 4]); // false
todosPares([2, 6, 8, 12]); // true
*/

// Solucion.
const todosPares = (array) => {
    for (const num of array) {
        if (num % 2 !== 0) { 
            return false       
        }
        return true
    }
};

console.log(todosPares([2, 6, 8, 12])); 
console.log(todosPares([1, 2, 3, 4]));
