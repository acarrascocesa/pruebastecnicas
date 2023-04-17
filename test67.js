/*

Enunciado Ejercicio 67:
Dada una frase devuelve la longitud de la última palabra que tenga más de 4
caracteres y que contenga la vocal A.
 
Ejemplos:
longitudUltimaPalabra('El cielo está encapotado quien lo desencapotará hoy')
 
*/

// Solucion
const longitudUltimaPalabra = (frase) => {
  let palabrasCumplen = [];
  const palabras = frase.split(" ");
  for (let palabra of palabras) {
    palabra = palabra.toLowerCase();

    if (palabra.length >= 4 && palabra.includes("a")) {
      palabrasCumplen.push(palabra);
    }
  }
  return palabrasCumplen[palabrasCumplen.length - 1];
};

console.log(
  longitudUltimaPalabra("El cielo está encapotado quien lo desencapotará hoy")
);
