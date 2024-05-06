type Persona = {
  name: string;
  animal: AnimalDomestico;
};

type AnimalDomestico = {
  type: string;
  name?: string;
};

const persona: Persona = {
  name: "Alicia",
  animal: {
    type: "Perro",
  },
};

// Modifica el código bajo esta línea

const getAnimalName = (animal?: Animal) => animal.name;

// Modifica el código sobre esta línea

console.log(
  `${persona.name} tiene un ${persona.animal.type} que se llama ${getAnimalName(
    persona.animal
  )}`
);
