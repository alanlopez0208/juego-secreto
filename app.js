let numeroSectreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextElemento(elemento, texto) {
  let elementoHtml = document.querySelector(elemento);
  elementoHtml.innerHTML = texto;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  // console.log(typeof(numeroDeUsuario));

  if (numeroDeUsuario == numeroSectreto) {
    asignarTextElemento(
      "p",
      `Acertaste el Numero en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //El usuario no acerto
    if (numeroDeUsuario > numeroSectreto) {
      asignarTextElemento("p", `El numero secreto es menor en  `);
    } else {
      asignarTextElemento("p", "El numero secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;

  // console.log(numeroSectreto);
  // console.log(typeof(numeroSectreto));
  // console.log(numeroDeUsuario);
  // console.log(numeroDeUsuario === numeroSectreto);
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = ``;
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(listaNumeroSorteados);
  //Si ya sorteamos todos los numeros
  if (listaNumeroSorteados.length == numeroMaximo) {
    asignarTextElemento("p", "Ya se sortearon todos los numeros posibles");
  } else {
    //Si el numero generado incluido en la lista
    if (listaNumeroSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumeroSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextElemento("h1", "Juego del numero secreto");
  asignarTextElemento("p", `Inidica un numero del 1 al 10 ${numeroMaximo}`);
  //Generar el numero aletorio
  numeroSectreto = generarNumeroSecreto();
  //Inicializar el numero intents
  intentos = 1;
}

function reiniciarJuego() {
  limpiarCaja();

  condicionesIniciales();

  document.getElementById("reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
