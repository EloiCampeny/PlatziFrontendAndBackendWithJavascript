// En este desafío tu función solution recibirá 3 parámetros:

// estudiantes: un array de strings con varios nombres de estudiantes.
// deathCount: un número entero.
// nuevo: un string con el nombre de un nuevo estudiante (que no aparecía antes en el array).

// Tu función debe retornar un array de elementos con las siguientes indicaciones:

// Si el parámetro deathCount es igual a 0, debes retornar un array con los mismos 
// elementos que tenía el array de estudiantes y agregando el elemento nuevo al final.

// Si el parámetro deathCount es mayor a 0, debes retornar un array con los 
// mismos elementos del array estudiantes pero eliminando la cantidad de estudiantes
// que indica el número deathCount y agregando el elemento nuevo al final.

// 💡 Aclaración: NO debes eliminar TODOS los elementos del array original de estudiantes, 
// sino eliminar la cantidad de estudiantes que indica el número deathCount.

export function solution(estudiantes, deathCount, nuevo) {
    if (deathCount === 0) {
      estudiantes.push(nuevo);
      return estudiantes;
    } else if (deathCount > 0) {
      for (let i = 0; i < deathCount; i++) {
        estudiantes.pop();
      }
      estudiantes.push(nuevo);
      return estudiantes;
    }
  }