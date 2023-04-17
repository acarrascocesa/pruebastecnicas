/*

Enunciado Ejercicio 22:
Crea una función que invierta el orden de un texto
sin usar funciones nativas del lenguaje.
 
Ejemplos:
invertirTexto("Hola");
 
Devuelve: 
aloH
 
*/

const invertirTexto = (texto) => {
    let textoInvertido = texto.split("").reverse().join("")
    return textoInvertido
};

console.log(invertirTexto("Hola"));