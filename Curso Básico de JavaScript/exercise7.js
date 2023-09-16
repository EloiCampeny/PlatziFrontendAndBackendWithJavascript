// En este desafío debes ayudarnos a arreglar la función solution.

// Esta recibe un array cars y debería retornar el array filtrado 
// únicamente con los objetos que tengan la propiedad licensePlate.

// Pero no está funcionando.

// La función solo devuelve un objeto con el primer elemento que 
// cumple los requisitos, no estamos recibiendo los demás elementos 
// del array que también deberían pasar el filtro.

export function solution(cars) {
    return cars.filter(function (car) {
      return Boolean(car.licensePlate);
    });
  }