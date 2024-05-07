type Persona = {
  name: string;
  animal?: AnimalDomestico;
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

//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

const getAnimalName = (animal?: AnimalDomestico): string => animal.name;

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

it("should return expected result", () => {
  expect(
    `${persona.name} tiene un ${
      persona.animal.type
    } que se llama ${getAnimalName(persona.animal)}`
  ).toEqual("Alicia tiene un Perro que se llama Txakur");
});
