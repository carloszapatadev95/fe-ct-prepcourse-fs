function esPositivo(num) {
  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  switch (num) {
    case 1:
      console.log("es positivo");
      break;
      case -1:
        console.log("es negativo");
        break;
    default:
      console.log("no esta definido");
      break;
  }
}
esPositivo(1);
module.exports = esPositivo;