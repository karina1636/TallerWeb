while (true) {
    console.log("Menú de Opciones:");
    console.log("1. Contador de Números Pares e Impares");
    console.log("2. Calculadora de Factorial");
    console.log("3. Validación de Contraseña");
    console.log("4. Generador de Tablas de Multiplicar");
    console.log("5. Suma de Números Primos");
    console.log("6. Secuencia de Fibonacci");
    console.log("7. Convertidor de Temperatura");
    console.log("8. Calculadora de Potencia");
    console.log("9. Salir");

    let opcion = parseInt(prompt(" -------- Menú de opciones --------\n \n1. Contador números pares e impares\n2. Calculadora factorial \n3. Validación contraseña\n4. Generador de tablas de multiplicar\n5. Suma de números primos\n6. Secuencia fibonacci\n7. Convertidor de temperatura\n8. Calculadora de potencias\n9. SALIR\n \nDigite el número de su opción: "));

    switch (opcion) {
        case 1:
            let numero = parseInt(prompt("Ingrese un número:"));
            let pares = 0;
            let impares = 0;

            for (let i = 1; i <= numero; i++) {
                if (i % 2 === 0) {
                    pares++;
                } else {
                    impares++;
                }
            }

            console.log(`Cantidad de números pares: ${pares}`);
            console.log(`Cantidad de números impares: ${impares}`);
            break;

        case 2:
            let num = parseInt(prompt("Ingrese un número para calcular el factorial:"));
            let factorial = 1;

            for (let i = 1; i <= num; i++) {
                factorial *= i;
            }

            console.log(`El factorial de ${num} es: ${factorial}`);
            break;

        case 3:
            let contrasena = prompt("Ingrese la contraseña:");

            if (contrasena === "secreto123") {
                console.log("Acceso concedido");
            } else {
                console.log("Acceso denegado");
            }
            break;

        case 4:
            let tablaNumero = parseInt(prompt("Ingrese un número para generar la tabla de multiplicar:"));

            for (let i = 1; i <= 10; i++) {
                console.log(`${tablaNumero} x ${i} = ${tablaNumero * i}`);
            }
            break;

        case 5:
            let n = parseInt(prompt("Ingrese la cantidad de números primos a sumar:"));
            let sumaPrimos = 0;
            let contadorPrimos = 0;
            let numeroPrimo = 2;

            function esPrimo(num) {
                if (num <= 1) return false;
                if (num <= 3) return true;
                if (num % 2 === 0 || num % 3 === 0) return false;

                for (let i = 5; i * i <= num; i += 6) {
                    if (num % i === 0 || num % (i + 2) === 0) return false;
                }

                return true;
            }

            while (contadorPrimos < n) {
                if (esPrimo(numeroPrimo)) {
                    sumaPrimos += numeroPrimo;
                    contadorPrimos++;
                }
                numeroPrimo++;
            }

            console.log(`La suma de los primeros ${n} números primos es: ${sumaPrimos}`);
            break;

        case 6:
            let numTerminos = parseInt(prompt("Ingrese la cantidad de términos de la secuencia Fibonacci:"));
            let aFib = 0;
            let bFib = 1;

            console.log("Secuencia de Fibonacci:");

            for (let i = 0; i < numTerminos; i++) {
                console.log(aFib);
                let tempFib = aFib + bFib;
                aFib = bFib;
                bFib = tempFib;
            }
            break;

        case 7:
            let opcionTemp = prompt("Elija la dirección de la conversión: (1) Celsius a Fahrenheit, (2) Fahrenheit a Celsius");
            let temperaturaTemp;

            if (opcionTemp === "1") {
                temperaturaTemp = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));
                let fahrenheitTemp = (temperaturaTemp * 9/5) + 32;
                console.log(`La temperatura en grados Fahrenheit es: ${fahrenheitTemp}`);
            } else if (opcionTemp === "2") {
                temperaturaTemp = parseFloat(prompt("Ingrese la temperatura en grados Fahrenheit:"));
                let celsiusTemp = (temperaturaTemp - 32) * 5/9;
                console.log(`La temperatura en grados Celsius es: ${celsiusTemp}`);
            } else {
                console.log("Opción no válida");
            }
            break;

        case 8:
            let basePotencia = parseFloat(prompt("Ingrese la base:"));
            let exponentePotencia = parseInt(prompt("Ingrese el exponente:"));
            let resultadoPotencia = 1;

            for (let i = 0; i < Math.abs(exponentePotencia); i++) {
                resultadoPotencia *= basePotencia;
            }

            if (exponentePotencia < 0) {
                resultadoPotencia = 1 / resultadoPotencia;
            }

            console.log(`El resultado de ${basePotencia} elevado a la ${exponentePotencia} es: ${resultadoPotencia}`);
            break;

      
            

        default:
            console.log("Opción no válida. Por favor, seleccione una opción válida (1-9).");
    }
}
