/*

Enunciado Ejercicio 5:
Dado un array de personas con nombres y apellidos
crear una función para ordenar el array por los apellidos
en orden alfabético
 
Ejemplo:
ordenarPorApellidos([
    "Víctor Robles",
    "Antonio Alcantara",
    "Al Pacino",
    "Robert DeNiro",
    "Brad Pitt",
    "Sylvester Stallone"
]);  
 
*/

// Solucion
const ordenarPorApellidos = (array) => {
  // Crear arreglo nuevo de los apellidos.
  let apellidos = array.map((persona) => persona.split(" ")[1]);

  // Ordenar apellidos.
  apellidos.sort();

  // Crear arreglo con los nombres y apellidos ordenados.
  let personasOrdenadas = apellidos.map((apellido) => {
    let nombreOriginal = array.find((nombreCompleto) => {
      return nombreCompleto.split(" ")[1] === apellido;
    });
    return nombreOriginal;
  });

  return personasOrdenadas;
};

console.log(
  ordenarPorApellidos([
    "Víctor Robles",
    "Antonio Alcantara",
    "Al Pacino",
    "Robert DeNiro",
    "Brad Pitt",
    "Sylvester Stallone",
  ])
);
