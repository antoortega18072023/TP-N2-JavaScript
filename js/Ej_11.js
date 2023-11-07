
// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

const edad1 = parseInt(prompt("Ingrese la primera edad:"));
const nombre1 = prompt("Ingrese el primer nombre:");
        
const edad2 = parseInt(prompt("Ingrese la segunda edad:"));
const nombre2 = prompt("Ingrese el segundo nombre:");
        
const edad3 = parseInt(prompt("Ingrese la tercera edad:"));
const nombre3 = prompt("Ingrese el tercer nombre:");

       
 if (isNaN(edad1) || isNaN(edad2) || isNaN(edad3)) {
 console.log("Por favor, ingrese edades válidas.");
} else {
            // Encontrar la edad máxima usando Math.max
        const edadMaxima = Math.max(edad1, edad2, edad3);

            // Determinar el nombre correspondiente a la edad máxima
let nombreDelMayor;

            if (edadMaxima === numEdad1) {
                nombreDelMayor = nombre1;
            } else if (edadMaxima === numEdad2) {
                nombreDelMayor = nombre2;
            } else {
                nombreDelMayor = nombre3;
            }

            // Mostrar el nombre del mayor
            alert("El nombre del mayor es: " + nombreDelMayor);
        }