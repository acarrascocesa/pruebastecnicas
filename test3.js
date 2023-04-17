/*
 
Enunciado Ejercicio 3:
Dadas dos fechas, crea una función que me proporcione la diferencia de dias
entre ellas
 
Ejemplo:
diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023');  // Salida: 23
 
*/

// Solucion.

const diferenciaDeDias = (f1, f2) => {
    // Comprobar formato de ambas fechas.
    f1 = f1 instanceof Date ? f1 : new Date(f1);
    f2 = f2 instanceof Date ? f2 : new Date(f2);
    

    // Obtener la diferencia en milisegundos entre las 2 fechas.
    const diferenciaMilisegundos = Math.abs(f1.getTime() - f2.getTime());

    // Dividir la diferencia en milisegundos entre el numero de milisegundos que tiene un dia y redondear para sacar los dias de diferencia.
    const diaEnMili = 86400000;
    const division = Math.round(diferenciaMilisegundos / diaEnMili);

    return division
};

console.log(diferenciaDeDias('Dec 3, 2023', 'Dec 28, 2023'))
