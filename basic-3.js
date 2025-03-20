/**
 * Crea una función que dado un nombre y un idioma, devuelve un string saludando a la persona
 * 
 * el valor de language solo puede ser "spanish", o "french" (no hace falta que lo compruebes, nunca se va a ejecutar la función con otro idioma)
 * 
 */

function sayHi(name, language) {
    language = language.toLowerCase();
    if (language == "french") {
        return `Bonjour, ${name}!`;
    } else if (language == "spanish") {
        return `Hola, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

console.log(sayHi("Carlos", "spanish")); // "Hola, Carlos!", se espera un saludo en español
console.log(sayHi("Anne", "french"));    // "Bonjour, Anne!", se espera un saludo en francés
console.log(sayHi("John", "spanish"));   // "Hola, John!", se espera un saludo en español

// BONUS
// console.log(sayHi("Carmen", "SpAnIsH")); // modifica tu algoritmo para que también funcione para este caso. "Hola, Carmen!" . Pista: Busca como convertir un string a minúsculas
