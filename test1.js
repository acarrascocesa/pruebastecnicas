/*
Enunciado Ejercicio 1:
Dado un array o un objeto de superhéroes de Marvel, haz un programa que pueda
mostrar la información de un superheroe.
 
Y añade una capacidad de buscar la información de varios superhéroes a la vez.
 
Ejemplo:
mostrarInformacionSuperheroe('Iron Man');
 
Salida:
Nombre real: Tony Stark
Poderes: Tecnología avanzada, Movilidad aérea
Equipo: Los vengadores
 
Ejemplo 2: 
mostrarInformacionSuperheroes([array de nombres]]);
 
Salida:
Muestra la información de todos los superheroes
 
*/

// Crear array de objetos de superheroes marvel
const infoSuperheroes = {
  "Iron Man": {
    nombreReal: "Tony Stark",
    poderes: ["Tecnologia avanzada", "Movilidad aérea"],
    equipo: "Los vengadores",
  },
  "Capitán América": {
    nombreReal: "Steve Rogers",
    poderes: ["Fuerza sobrehumana", "Agilidad y reflejos sobresalientes"],
    equipo: "Los vengadores",
  },
  "Thor": {
    nombreReal: "Thor Odinson",
    poderes: ["Mjolnir", "Viento y trueno"],
    equipo: "Los vengadores",
  },
  "Spider-Man": {
    nombreReal: "Peter Parker",
    poderes: ["Balanceo", "Telarañas pegajosas", "Sentido aracnido"],
    equipo: "Los vengadores",
  },
  "Hulk": {
    nombreReal: "Bruce Banner",
    poderes: ["Fuerza sobrehumana", "Invulnerabilidad"],
    equipo: "Los vengadores",
  },
};


// Solucion
const mostrarInformacionSuperheroe = (aka) => {
// Comprobar si el superheroe existe dentro del arreglo de objetos.
if (aka in infoSuperheroes) {
// Conseguir informacion del superheroe.
const informacion = infoSuperheroes[aka]

// Mostart la informacion del superheroe.
console.log(aka);
console.log(`Nombre real: ${informacion.nombreReal}`);
console.log(`Poderes: ${informacion.poderes}`);
console.log(`Equipo: ${informacion.equipo}`);
console.log(" ");
} else {
  console.log(`${aka} no existe.`);
}

};

const mostrarInformacionSuperheroes = (akas) => {
// Recorrer todos los elementos del array.
akas.forEach(aka => {

// Monstrar la informacion(usar funtion anterior).
mostrarInformacionSuperheroe(aka)
})

};

console.log(mostrarInformacionSuperheroes(["Iron Man", "Thor", "Batman"]));