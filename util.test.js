//unit tests para as diferentes funcións de util.js. Sintaxis antigua
//para iniciar configurar o script de test para jest
const { generateText } = require("./util");

//usar valores límite, problemáticos, etc
//double check (valores límite?), contrario,..
test("debe devolver un nome e idade", () => {
  const text = generateText("Pepe", 50);
  expect(text).toBe("Pepe (50 years old)");
  const text2 = generateText("María", 20);
  expect(text2).toBe("María (20 years old)");
});

test("debe devolver o texto sin datos", () => {
  const text = generateText("", null);
  expect(text).toBe(" (null years old)");
});
