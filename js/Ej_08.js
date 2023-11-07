// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……



const n = parseInt(prompt("ingrese un numero (no mayor a 50)"));

if (n<=50){
    
for (let i = 1; i <= n; i++) {
    let linea = '';
    for (let j = 1; j <= i; j++) {
        linea += j;
    }
    console.log(linea);
}
}else{
    alert("numero ingresado mayor a 50")
}