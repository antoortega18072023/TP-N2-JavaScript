
// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos

let sumatoria=0;

do {

  let suma = parseInt(prompt("Ingrese un numero (o presione 'cancelar' para salir):")
  );

  if (isNaN(suma)) {
    alert("Introduce un número válido");
}
  sumatoria = parseInt(sumatoria) + parseInt(suma)

} while (confirm("¿Desea ingresar otra cadena de texto?"));

alert("suma total de los numeros ingresados: " + sumatoria);