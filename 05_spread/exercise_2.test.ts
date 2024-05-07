type Pelicula = {
  titulo: string;
  autor: string;
};

const pelicula1: Pelicula = {
  titulo: "Origen",
  autor: "Cristopher Nolan",
};

let pelicula2: Pelicula;

//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

it("should mantain two instances of Pelicula", () => {
  expect(pelicula1).toEqual({
    titulo: "Origen",
    autor: "Cristopher Nolan",
  });

  expect(pelicula2).toEqual({
    titulo: "Origen",
    autor: "Leonardo Di Caprio",
  });
});
