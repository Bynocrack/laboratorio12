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

const ex06 = () => {
  const mayorDeTres = (a, b, c) => {
    a = a > b ? a : b;
    a = a > c ? a : c;
    return a;
  };
  let num1 = parseInt(prompt("Digite el valor de a"));
  let num2 = parseInt(prompt("Digite el valor de b"));
  let num3 = parseInt(prompt("Digite el valor de c"));
  alert(mayorDeTres(num1, num2, num3));
};

const ex07 = () => {
  function promedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
  }
  let nota1 = 0;
  let nota2 = 0;
  let nota3 = 0;
  let error = "";
  while (true) {
    nota1 = parseInt(prompt(`${error}Digite el valor de la primera nota`));
    nota2 = parseInt(prompt(`${error}Digite el valor de la segunda nota`));
    nota3 = parseInt(prompt(`${error}Digite el valor de la tercera nota`));
    if (
      0 <= nota1 &&
      nota1 <= 20 &&
      0 <= nota2 &&
      nota2 <= 20 &&
      0 <= nota3 &&
      nota3 <= 20
    ) {
      break;
    }
    error = "Las notas deben estar entre 0 y 20!\n";
  }
  alert(promedio(nota1, nota2, nota3));
};

const ex08 = () => {
  function converirAMayusculas(texto) {
    return texto.toUpperCase();
  }
  let ejemplo = prompt("Digite la frase para volverla mayusculas");
  alert(converirAMayusculas(ejemplo));
};

const ex09 = () => {
  function calcularDescuento(precio, porcentaje) {
    return precio * (1 - porcentaje / 100);
  }
  let precio = 0;
  let descuento = 0;
  let error = "";

  while (true) {
    precio = parseFloat(prompt(`${error}Digite el precio del producto`));
    if (precio >= 0) {
      break;
    }
    error = "El precio debe ser positio!\n";
  }
  error = "";

  while (true) {
    descuento = parseFloat(
      prompt(`${error}Digite el descuento que se le aplicara <0;100]`),
    );
    if (0 < descuento && descuento <= 100) {
      break;
    }
    error = "Debe ser entre 0 (no incluido) y 100 (incluido)\n";
  }

  alert(calcularDescuento(precio, descuento));
};

const ex10 = () => {
  const saludo = (nombre) => {
    return `Hola ${nombre}, como estás?`;
  };
  let nombre = prompt("Digite su nombre");

  alert(saludo(nombre));
};

const ex11 = () => {
  const esPositivo = (num) => {
    return num > 0 ? true : false;
  };
  let num = parseFloat(prompt("Digite un número"));

  alert(esPositivo(num));
};
