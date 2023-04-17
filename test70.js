/*
 
Enunciado Ejercicio 70:
Crea una función que dado un texto que contenga varias frases en minusculas,
logre poner en mayusculas las letras correctas del texto. 
 
Ejemplos:
capitalizarFrase("hola. como estas. soy Víctor Robles. me gusta programar.");
 
Devuelve:
Hola. Como estas. Soy Victor Robles. Me gusta programar.
*/

// Solucion.
const capitalizarFrase = (frase) => {
    //
    let capitalizado = [];

    // Separar las palabras
    let palabras = frase.split(".");
    capitalizado.push(palabras)
    let mayuscula = capitalizado.toString().capitalize()
    console.log(mayuscula);
    
    
    //
    
}

console.log(capitalizarFrase("hola. como estas. soy Víctor Robles. me gusta programar."));