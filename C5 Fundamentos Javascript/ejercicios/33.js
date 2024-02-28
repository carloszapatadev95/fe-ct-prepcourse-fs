function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  
   
  for (let i = 2; i < numero; i++) {
    let Nnp;
    if (numero % i === 0) {
      //console.log("no es primo",i);
       Nnp = false
    
    
    }
    else if (numero % i !== 0) {
         
    }
    if (Nnp === false) {
      return false;
    } else {
      return true;
    }
    
  }
  

}
esNumeroPrimo(103)

module.exports = esNumeroPrimo;
