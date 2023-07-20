//RETO2-CLASE5
//•Crea un directorio nuevo llamado proyectosJavascript.
// •Crea un subdirectorio llamado proyecto1.
// •Dentro de ese directorio:
// -Inicia el proyecto: npm init
// •Dentro de Visual Code Studio:
// -Crear un fichero index.js
// -Crear un fichero run.js
// •En el fichero index.js (fichero de librería):
// -Declarar las funciones de la calculadora por separado (suma, resta, producto, división)
function suma(op1,op2,op3){
    let result=op1+op2+op3;
    console.log(result);
}

function resta(op1,op2){
    let result=op1-op2;
    console.log(result);
}

function producto(op1,op2){
    let result=op1*op2;
    console.log(result);
}
function division(op1,op2){
    let result=op1/op2;
    console.log(result);
}
function cuadrado(op1,op2) {
    let result = Math.pow(op1,op2);
    console.log(result);
  }
  
suma(8,2,30);
resta(6,2);
producto(5,3);
division(18,9);
cuadrado(7,2)

// -Al final del documento index.js escribir la sentencia:module.exports =
// •A continuación escribir el nombre de las funciones entre {} separados por comas de la librería que se desean exportar.
module.exports={suma,resta,producto,division,cuadrado};
// •En el fichero run.js (fichero del programa principal) escribir la sentencia:-let myLib = require("./index");
// •Llamar a todas las funciones de la librería e imprimir sus resultados.
// -NOTA: Para llamar a la función hay que hacer myLib.función. Ej: myLib.suma(2,3)