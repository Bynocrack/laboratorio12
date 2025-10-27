const ex03 = () => {
  const esPar = (num) => {
    return num % 2 == 0 ? true : false;
  };
  let numero = parseInt(prompt("Digite un número"));
  alert(esPar(numero));
};

const ex04 = () => {
  const areaRectanguloBase = (altura, base) => {
    return altura * base;
  };
  let error = "";
  let altura = 0;
  let base = 0;
  while (true) {
    base = parseFloat(prompt(`${error}Digite la base del rectángulo`));
    if (base > 0) {
      break;
    }
    error = "Tiene que ser mayor a 0!\n";
  }
  error = "";
  while (true) {
    altura = parseFloat(prompt(`${error}Digite la altura del rectángulo`));
    if (altura > 0) {
      break;
    }
    error = "Tiene que ser mayor a 0!\n";
  }
  alert(areaRectanguloBase(altura, base));
};

const ex05 = () => {
  const esMultiplo = (a, b) => {
    return a % b == 0 ? true : false;
  };
  let num1 = parseInt(prompt("Digite el valor de a"));
  let num2 = parseInt(prompt("Digite el valor de b"));
  alert(esMultiplo(num1, num2));
};
