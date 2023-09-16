// En este desafío vas a recibir un parámetro arraySecreto
// en la función solution. Debes retornar true si el primer
// elemento del arraySecreto es de tipo string ydebes retornar
// false si es de cualquier otro tipo.

export function solution(arraySecreto) {
    return typeof(arraySecreto[0]) === "string"
}