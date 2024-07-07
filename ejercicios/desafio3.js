function imc(altura, peso) {
  return peso / (altura * altura);
}

function factorial(numero) {
  let resultado = 1;
  if (numero == 1 || numero == 0) {
    return 1;
  }

  for (let i = 2; i <= numero; i++) {
    resultado *= i;
  }

  return resultado;
}

function dolaresAPesos(pesos) {
  return pesos * 18.11;
}

function areaYPerimietroRecangular(altura, ancho) {
  let area = altura * ancho;
  let perimetro = 2 * altura + 2 * ancho;

  console.log(
    `El area del rectangulo es : ${area}\n El perimetro es ${perimetro}`
  );
}

function areaYPerimietroCirculo(radio) {
  let pi = 3.14;
  let area = pi * Math.pow(radio, 2);
  let perimetro = 2 * pi * radio;

  console.log(
    `El area del circulo es : ${area}\n El perimetro es ${perimetro}`
  );
}

function tablaMultiplicar(numero) {
  for (let i = 1; i <= 10; i++) {
    let multiplo = i * numero;
    console.log(`${i} * ${numero} = ${multiplo}`);
  }
}
