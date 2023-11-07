// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

// Ejemplo:



// Input: Hola mundo

// Output: la vocal ‘o’ está en la posición 1


const texto = prompt("ingrese un texto");

let posicionPrimeraVocal = -1;

const textoEnMinusculas = texto.toLowerCase();

for (let i = 0; i < textoEnMinusculas.length; i++) {
    const caracterActual = textoEnMinusculas[i];
    if (caracterActual === 'a' || caracterActual === 'e' || caracterActual === 'i' || caracterActual === 'o' || caracterActual === 'u') {
        posicionPrimeraVocal = i;
        break; // Detener el bucle al encontrar la primera vocal
    }
}

// Mostrar el resultado
if (posicionPrimeraVocal !== -1) {
    console.log("La primera vocal está en la posición " + posicionPrimeraVocal);
    alert("La primera vocal está en la posición " + posicionPrimeraVocal)
} else {
    console.log("No se encontraron vocales en el texto.");
    alert("No se encontraron vocales en el texto.")
}