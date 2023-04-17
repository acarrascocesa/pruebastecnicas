/*
 
Enunciado Ejercicio 69:
Crea una función que dado un texto, sea capaz de censurar palabras.
 
Ejemplos:
censurar("Texto de prueba", "texto") // ***** de prueba
 
*/

// Solucion
const censurar = (texto, excluida) => {
  // Convertir texto a minuscula.
  let palabraRemplazada = texto.toLowerCase();

  // Usar ciclo while para comprobar si la palabra excluida se encuentra en el texto dado.
  while (palabraRemplazada.includes(excluida)) {
    // Usar replace para reemplazar la palabra que se quiere excluir en el texto
    palabraRemplazada = palabraRemplazada.replace(excluida, "!!!!!");
  }
  return palabraRemplazada;
};

console.log(censurar("Texto de prueba, texto", "texto"));
