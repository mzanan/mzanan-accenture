// Ejercicio 1 - Cargar de forma automática incremental, un array de números a partir de un largo dado por el usuario
const cargaIncremental = (largo) => {
    let arr = []
    for (let i = 1; i <= largo; i++) {
        arr.push(i)
    }
    return arr
}

console.log("Ej 1: ", cargaIncremental(10))

// Ejercicio 2 - Repetir el ejercicio anterior, ubicando 0 (ceros), en las posiciones pares y un valor que coincida con el índice en las posiciones impares.
const posicionesPares = (largo) => {
    let arr = []
    for (let i = 1; i <= largo; i++) {
        if (i % 2 === 0) {
            arr.push(0)
        }
        else {
            arr.push(i)
        }
    }
    return arr
}

console.log("Ej 2: ", posicionesPares(10))

// Ejercicio 3 - Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20], mostrar por pantalla el valor máximo
const mostrarMaximo = (arr) => {
    arr.sort((a, b) => b - a)

    return "El máximo valor es " + arr[0]
}

console.log("Ej 3: ", mostrarMaximo([10, 24, 36, 7, 98, 11, 14, 20]))

// Ejercicio 4 - Dado el arreglo de números del punto 3, mostrar por pantalla el valor máximo y su posición.
const maximaPosicion = (arr) => {
    let max = 0
    let pos = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            max = arr[i]
            pos = i
        }
    }
    return "El máximo valor es " + max + " y su posición es " + (pos + 1)
}

console.log("Ej 4: ", maximaPosicion([10, 24, 36, 7, 98, 11, 14, 20]))

// Ejercicio 5 - Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20,98,14,10], mostrar por pantalla el valor máximo y la cantidad de veces que se repite.
const numerosRepetidos = (arr) => {
    arr.sort((a, b) => b - a)

    let count = 1
    let max = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === max) {
            count++
        }
    }
    return "El máximo valor es " + max + " y se repite " + count + " veces"
}

console.log("Ej 5: ", numerosRepetidos([10, 24, 36, 7, 98, 11, 14, 20, 98, 14, 10]))

/*
    Ejercicio 6 – Dados los siguientes arreglos:
    X = ['a','l','f','a'];
    Y = ['a','l','f','a','j','o','r']
    Crear un bloque de código que permita determinar si:
    • Ambos arreglos son iguales
    • Cuál de los dos es más largo
    • Cuantas letras tienen en común
 */

const compararArrays = (arr1, arr2) => {
    let count = 0
    let mayor = 0
    let iguales = false

    if (arr1.length > arr2.length) {
        mayor = arr1.join('')
    }
    else if (arr1.length < arr2.length) {
        mayor = arr2.join('')
    }

    if (arr1.length === arr2.length) {
        for (let i = 0; i <= arr2.length; i++) {
            if (arr1[i] === arr2[i]) {
                count++
            }
        }
        if (count === arr2.length) {
            iguales = true
        }
        else { iguales = false }
    }
    else {
        for (let i = 0; i <= arr1.length; i++) {
            if (arr1[i] === arr2[i]) {
                count++
            }
        }

        if (count === arr2.length) {
            iguales = true
        }
        else { iguales = false }
    }

    if (iguales) {
        return "Los arreglos son iguales, y tienen " + count + " letras en comun"
    }
    else {
        return "Los arreglos no son iguales, el mayor es el array '" + mayor + "' y tienen " + count + " letras en comun"
    }
}

console.log("Ej 6: ", compararArrays(['a', 'l', 'f', 'a'], ['a', 'l', 'f', 'a', 'j', 'o', 'r']))

/*
    Ejercicio 7 – Dado el siguiente array datos1 = ['Fido','Gomez',26,15000.78,true] y datos2 = ['Gervasio','Fernandez',32,28.550,false]
    Determinar:
    • ¿Cuál de los dos personajes es más viejo?
    • ¿Cuál de los dos personajes está casado?
    • Si Fido recibirá un aumento equivalente al 12.5% del sueldo de Gervasio, cuanto será el monto a cobrar?
*/

const fidoGerva = (fido, gerva) => {
    let mayor = ""
    let casado = ""
    let aumento = 0.0
    let sueldoConAumento = 0.0

    if (fido[2] > gerva[2]) {
        mayor = "Fido"
    }
    else { mayor = "Gervasio" }

    if (fido[4]) {
        casado = "Fido"
    }
    else if (gerva[4]) {
        casado = "gervasio"
    }
    else { casado = "ambos" }

    aumento = Math.floor(gerva[3] * 12.5) / 100
    sueldoConAumento = fido[3] + aumento

    return mayor + " es el más viejo, " + casado + " está casado, y el sueldo de Fido sería " + sueldoConAumento
}

console.log("Ej 7: ", fidoGerva(['Fido', 'Gomez', 26, 15000.78, true], ['Gervasio', 'Fernandez', 32, 28.550, false]))