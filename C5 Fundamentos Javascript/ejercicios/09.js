function esNuloOIndefinido(valor) {
  // La función recibe un argumento "valor".
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Tu código:

  let numero1 = valor;
  if (numero1 !== null) {
    return true; 
  } else {
    
    return false;
  }
}
esNuloOIndefinido(2)

module.exports = esNuloOIndefinido;