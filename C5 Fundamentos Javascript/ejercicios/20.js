function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  let letras = letra;

  switch (letras) {
      case "a":
      console.log("es vocal ", letras);
      break;
      case "e":
      console.log("es vocal ", letras);
      break;
      case "i":
      console.log("es vocal ", letras);
      break;
      case "o":
      console.log("es vocal ", letras);
      break;
      case "u":
      console.log("es vocal ", letras);
      break;
  
    default:
      console.log("dato incorrecto");
      break;
  }

}
esVocal("a")


module.exports = esVocal;
