// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let texto = prompt("ingrese una frase");
let textoinvertido="";
for (let i = texto.length - 1; i >= 0; i--) {
    // Concatenar cada caracter al resultado
 textoinvertido += texto[i];
}

alert("el texto ingresado al revez es: " + textoinvertido);

