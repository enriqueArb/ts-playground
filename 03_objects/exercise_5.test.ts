//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

export const addTwoNumbers = (params) => {
  //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

  return params.first + params.second;
};

it("should return expected result", () => {
  const result = addTwoNumbers({ first: 1, second: 2 });

  expect(result).toEqual(3);
});
