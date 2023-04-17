/*

Enunciado Ejercicio 27:
Crea una función a la cual le pasemos una frase y una palabra,
y busque si la palabra existe en la frase. Indistinto de mayusculas y minusculas.
 
Ejemplos:
buscarPalabra('Hola como estas', 'Hola')  // Devuelve: true
*/

// Solucion.
const buscarPalabra = (frase, palabra) => {
     frase += frase.toLowerCase().split(" ")
    
    return frase.includes(palabra)
};

console.log(buscarPalabra('Hola como estas', 'hola'));