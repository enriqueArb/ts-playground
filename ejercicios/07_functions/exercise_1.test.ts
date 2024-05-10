import { expect, it } from "vitest";

const numeros = [1, 2, 3, 4, 5];
type EvenOrOdd = "even" | "odd";

const isEvenOrOdd = (value: number): EvenOrOdd => {
  if (value % 2 === 0) {
    return "even";
  }

  return "odd";
};

//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

it("should return expected result", () => {
  const result = processData(numeros, isEvenOrOdd);

  expect(result).toStrictEqual(["odd", "even", "odd", "even", "odd"]);
});
