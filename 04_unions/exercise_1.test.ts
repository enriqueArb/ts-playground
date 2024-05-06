//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

type Personaje = "Bueno";

type Nombre = "";

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

function getName(personaje: Personaje): Nombre {
  if (personaje === "Bueno") {
    return "";
  }

  if (personaje === "Malo") {
    return "";
  }

  if (personaje === "Feo") {
    return "";
  }
}

it("should return expected result", () => {
  expect(
    `Al bueno lo llamaban ${getName("Bueno")}, al malo ${getName(
      "Malo"
    )} y, al feo, ${getName("Feo")}`
  ).toStrictEqual(
    "Al bueno lo llamaban Rubio, al malo Sentencia y, al feo, Tuco"
  );
});
