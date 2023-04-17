/*
 
Enunciado Ejercicio 2:
Dada una ruta absoluta de un archivo (de un sistema linux o basado en unix)
crear una función que la simplifique
 
Ejemplo:
simplificarRuta("/home/");             // Salida: /home
simplificarRuta("/x/./y/../../z/");    // Salida: /z
simplificarRuta("/../");               // Salida: /
simplificarRuta("/home//pruebas/");    // Salida: /home/pruebas
 
*/

// Solucion
const simplificarRuta = (ruta) => {
  // Crear variable para almacenar partes de la ruta.
  let pila = [];

  // Dividir la ruta en diferentes partes utilizando separador /.
  const partes = ruta.split("/");

  // Recorrer cada parte.
  for (const parte of partes) {
    // Si la parte es .. quitar ultimo elemento.
    if (parte === "..") {
      pila.pop();
    }

    // Si la parte es diferente a "." o cadena vacia, guardar en pila.
    else if (parte !== "." && parte !== "") {
      pila.push(parte);
    }
  }

  return "/" + pila;
};

console.log(simplificarRuta("/x/./y/../../z/"));
