
// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad = parseInt(prompt("Ingrese su edad"));

if (edad>18){
    document.write("<h1>usted ya puede conducir porque es mayor de edad</h1>");
} else{   
     document.write("<h1>usted NO puede conducir porque es menor de edad</h1>");
}