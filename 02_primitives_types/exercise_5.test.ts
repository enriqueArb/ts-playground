//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

const biblioteca: Biblioteca = [
  {
    titulo: "El nombre del viento",
    autor: "Patrick Rothfuss",
  },
  {
    titulo: "Clean code",
    autor: "Robert C. Martin",
  },
];

it("should return expected result", () => {
  expect(biblioteca).toEqual([
    {
      titulo: "El nombre del viento",
      autor: "Patrick Rothfuss",
    },
    {
      titulo: "Clean code",
      autor: "Robert C. Martin",
    },
  ]);
});
