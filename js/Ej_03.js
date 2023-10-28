// Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
let cadenaConcatenada = "";

do {
  let nuevaCadena = prompt(
    "Ingrese una cadena de texto (o presione 'cancelar' para salir):"
  );

  cadenaConcatenada += nuevaCadena + "-";
} while (confirm("¿Desea ingresar otra cadena de texto?"));

alert("Cadenas concatenadas: " + cadenaConcatenada);
