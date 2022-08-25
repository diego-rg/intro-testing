//unit tests para as diferentes funcións de util.js. Sintaxis antigua
//para iniciar configurar o script de test para jest
const { generateText } = require("./util");

//usar valores límite, problemáticos, etc
test("debe devolver un nome e idade", () => {
  const text = generateText("Pepe", 50);
  expect(text).toBe("Pepe (50 years old)");
});
