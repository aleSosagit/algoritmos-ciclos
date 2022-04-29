// ================================  CICLO FOR ================================================================

// EJERCICIO 1      TURNOS -------------

/* 
for (let i = 1; i <= 20; i++) {
    let ingresaNombre = prompt("Ingresa tu nombre");
    alert("TURNO N° " + i + " Nombre: " + ingresaNombre);
    } */


// EJERCICIO 2      NÚMEROS IMPARES------------

/* for (let i = 1; i < 11; i + 2) {
    let pares = prompt("Cuántos números impares hay del 1 al 10?");
    if (pares != 5) {
        alert("No no, pensalo bien y volvé a ingresar");       
    } else {
        alert("Excelente!");
        break; 
    }
}

 */




// ================================  CICLO WHILE ===================================================================

// EJERCICIO 3       ADIVINA EL NÚMERO------------------------

let ingresaNumero = prompt("Adivina el número de la suerte. Elige un número del 1 al 10");

while (ingresaNumero != 8) {

     if ((ingresaNumero == 6) || (ingresaNumero == 7)) {
        alert("Eso estuvo cerca!");

    } else if ((ingresaNumero < 6) && (ingresaNumero > 0)) {
        alert("Frío frío como el agua del río");

    } else if ((ingresaNumero == 9) || (ingresaNumero == 10)) {
        alert("Esta vez te pasaste");

    } else if ((ingresaNumero > 10) || (ingresaNumero < 1)) {
    alert("Sólo números entre el 1 y el 10");
    }
    
    ingresaNumero = prompt("Prueba de nuevo");

}

alert("EXCELENTE!! SÍ ERA EL 8!... no te ganaste nada pero es tu día de suerte!");




// ==============================  CICLO DO WHILE ===================================================================

// EJERCICIO 4       INGRESA UN NÚMERO------------


/* let num = 0;

do {
    num = prompt("Ingresar un número");
} while (parseInt(num));
 */