// 15- Realiza un script que cuente el número de vocales que tiene un texto

const texto = prompt("ingrese un texto");

let convocal = 0;

const textoEnMinusculas = texto.toLowerCase();

for (let i = 0; i < textoEnMinusculas.length; i++) {
  // Verificar si el caracter es una vocal
  if (
    textoEnMinusculas[i] === "a" ||
    textoEnMinusculas[i] === "e" ||
    textoEnMinusculas[i] === "i" ||
    textoEnMinusculas[i] === "o" ||
    textoEnMinusculas[i] === "u"
  ) {
    convocal++;
  }
}

document.write("El texto ingresado tiene " + convocal + " vocal(es).");
