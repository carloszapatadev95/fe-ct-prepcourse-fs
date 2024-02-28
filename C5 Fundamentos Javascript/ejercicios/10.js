function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
   let dato = new Date
  
  if ( fecha === dato.getFullYear  ) {
  
    return true; 
  } else {
      
    return false;
  }
}
let fecha1 = new Date;

esFechaValida(fecha1.getFullYear);

module.exports = esFechaValida;