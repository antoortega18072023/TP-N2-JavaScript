// 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

// El algoritmo para calcular la letra del dni es el siguiente :

// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

// Ejemplo: 



do {
    let num = parseInt(prompt("ingrese su documento"));

    if (isNaN(num) || num === null) {
        alert("Por favor, introduce un número válido.");
    }

    if (num < 0 || num > 99999999) {
        alert("El número de DNI debe estar entre 0 y 99999999.");
    }

   const letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";
   let resto = num%23;
   let letracalculada=letrasDNI.charAt(resto);

   alert("la letra del DNI " + num + " es: " + letracalculada);

  } while (confirm("¿desea ingresar otro DNI?"))

