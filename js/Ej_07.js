// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1

const n = parseInt(prompt("ingrese un numero (no mayor a 50"));

if (n<=50){
    for (let i = n; i > 0; i--) {
        let linea = i.toString().repeat(i);
        console.log(linea);
    }
}else{
    alert("numero ingresado mayor a 50")
}

