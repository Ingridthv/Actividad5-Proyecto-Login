function validarCorreo(correo) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
}
 
function soloLetras(texto) {
  var regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  return regex.test(texto.trim()) && texto.trim().length > 0;
}
 
function validarLongitud(numero, maxLongitud) {
  var texto = String(numero);
  if (texto.length <= maxLongitud) {
    return true;
  } else {
    return false;
  }
}
 
function validarNumeroControl(numero) {
  var texto = String(numero);
  return /^[0-9]+$/.test(texto) && texto.length === 6;
}
 
function calcularEdad(fechaNacimiento) {
  var nacimiento = new Date(fechaNacimiento);
  var hoy = new Date();
  var edad = hoy.getFullYear() - nacimiento.getFullYear();
  var mes = hoy.getMonth() - nacimiento.getMonth();
 
  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad = edad - 1;
  }
 
  return edad;
}
 
function esMayorDeEdad(fechaNacimiento) {
  var edad = calcularEdad(fechaNacimiento);
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}
 
function validarPassword(password) {
  var tieneMinuscula = /[a-z]/.test(password);
  var tieneMayuscula = /[A-Z]/.test(password);
  var tieneNumero = /[0-9]/.test(password);
  var tieneEspecial = /[^A-Za-z0-9]/.test(password);
 
  if (tieneMinuscula && tieneMayuscula && tieneNumero && tieneEspecial && password.length >= 8) {
    return true;
  } else {
    return false;
  }
}
 
function validarTelefono(numero) {
  var limpio = numero.split(" ").join("").split("-").join("");
 
  if (limpio.length !== 10) {
    return false;
  }
 
  for (var i = 0; i < limpio.length; i++) {
    if (limpio[i] < "0" || limpio[i] > "9") {
      return false;
    }
  }
 
  return true;
}
 
function capitalizarTexto(texto) {
  var palabras = texto.toLowerCase().split(" ");
  var resultado = "";
 
  for (var i = 0; i < palabras.length; i++) {
    var palabra = palabras[i];
    if (palabra.length > 0) {
      var primeraLetra = palabra.charAt(0).toUpperCase();
      var resto = palabra.slice(1);
      resultado = resultado + primeraLetra + resto;
      if (i < palabras.length - 1) {
        resultado = resultado + " ";
      }
    }
  }
 
  return resultado;
}