// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

const filas=parseInt(prompt("ingese un numero de filas"))
const columnas=parseInt(prompt("ingrese un numero de columnas"))

const totalceldas=filas*columnas;

document.write(`<table><tbody>`);
for (let indicefilas=0;indicefilas<filas;indicefilas++){
    document.write(`<tr>`);
for (let indicecolumnas=0;indicecolumnas<columnas;indicecolumnas++){
    document.write(`<td>${totalceldas}</td>`);
} 
document.write(`</tr>`);
}
document.write(`</tbody></table>`);





)