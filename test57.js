/*

Enunciado Ejercicio 57:
Crea una función que convierta cualquier frase a una SEO slug.
 
Una seo slug es un fragmento de url optimizado para posicionamiento web:
cursos-de-victor-robles-web
 
Ejemplos:
transformarURL("Cursos de Victor Robles WEB");
 
Devuelve:
cursos-de-victor-robles-web
 
*/

// Solucion.

const transformarURL = (frase) => {
    let fraseMinus = frase.toLowerCase()
    let fraseAConvertir = fraseMinus.split(" ");
    let slugUrl = fraseAConvertir.join("-")
    return slugUrl;
};

console.log(transformarURL("curso de python desde cero"));