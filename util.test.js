const puppeteer = require("puppeteer");

//unit tests para as diferentes funcións de util.js. Sintaxis antigua
//para iniciar configurar o script de test para jest
const { generateText, checkAndGenerate } = require("./util");

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

//integration test que abarca validateInput e generateText
test("debe devolver un texto válido", () => {
  const text = checkAndGenerate("Pepe", 50);
  expect(text).toBe("Pepe (50 years old)");
});

//end to end. poñemos máximo de 10s xa que por defecto jest da 5 e este test será mais largo e dará erro
test("debe crear un elemento ca clase .user-item co texto válido", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ["window-size=1920, 1080"],
  });
  const page = await browser.newPage();
  await page.goto(
    "C:/Users/Diego/Desktop/Proyectos/javascript-testing/index.html"
  );
  await page.click("input#name");
  await page.type("input#name", "María");
  await page.click("input#age");
  await page.type("input#age", "90");
  await page.click("#btnAddUser");
  const finalText = await page.$eval(".user-item", (el) => el.textContent);
  expect(finalText).toBe("María (90 years old)");
}, 10000);
