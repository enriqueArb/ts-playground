/*
  Hemos copiado y pegado un código que teníamos en Javascript y queremos 
  migrarlo a TypeScript. ¿Nos ayudas a conseguirlo? Aprovecha para probar
  todo lo que quieras sobre este lenguaje de programación
*/

const createPokemon = (nombre, numero, ataques) => {
  return { nombre, numero, ataques };
};

const ataque = (pokemon, numero) => {
  if (pokemon.ataques.length >= numero && 0 < numero) {
    console.log(
      pokemon.nombre + " utiliza el ataque " + pokemon.ataques[numero - 1]
    );
  } else {
    console.log(
      "Inserte un valor de ataque valido (valor entre 1 y " +
        pokemon.ataques.length +
        ")"
    );
  }
};

const pokemon1 = createPokemon("Pikachu", 25, ["placaje", "rayo", "gruñido"]);
ataque(pokemon1, 2);

/*
  ¿Te atreves?

  Desarrollemos un sistema simplificado de combate.
  Ahora los Pokemon tendrán una nueva característica: hp (que representa la vida) y los ataques tendrán 2 carácterísticas más: potencia y precisión.

  La función `ataque` evoluciona, ahora también habrá que pasarle el pokemon que recibe el ataque.
  Habrá que tener en cuenta la precisión y la potencia del ataque seleccionado y el hp del pokemon atacado. 
  Se mostrará el ataque elegido, si acierta o no, el daño que hace en caso de que acierte y la vida restante del pokemon atacado.
  ¡Recuera avisar cuando el pokemon se haya debilitado!
*/
