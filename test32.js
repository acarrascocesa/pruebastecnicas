/*

Enunciado Ejercicio 32:
Dado un texto, crea una función que sea capaz de generar
un nuevo texto que incluya solo las palabras de 4 caracteres o más.
 
Ejemplos:
fraseFiltrada("Hola soy Victor Robles, hoy hace frio"); 
 
// Devuelve: Hola Victor Robles, hace frio
*/

// Solucion.
const fraseFiltrada = (texto) => {
  let textoNuevo = [];
  let palabrasTexto = texto.split(" ");
  palabrasTexto.filter((palabras) => {
    if (palabras.length >= 4) {
      textoNuevo.push(palabras);
    }
  });
  let textoModificado = textoNuevo.join(" ")
  return textoModificado

};

console.log(fraseFiltrada("Hola soy Victor Robles, hoy hace frio"));
