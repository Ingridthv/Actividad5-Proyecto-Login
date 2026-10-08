// ----- Revisar que haya iniciado sesión -----
var usuario = localStorage.getItem("nombreUsuario");

if (usuario == null) {
  window.location.href = "login.html";
}

document.getElementById("nombreUsuario").textContent = usuario;


// ----- Sidebar (botón hamburguesa) -----
function abrirCerrarMenu() {
  document.getElementById("sidebar").classList.toggle("oculto");
  document.getElementById("contenido").classList.toggle("completo");
}


// ----- Cambiar de sección -----
function mostrarSeccion(nombre) {
  document.getElementById("seccion-inicio").classList.add("d-none");
  document.getElementById("seccion-captura").classList.add("d-none");
  document.getElementById("seccion-alumnos").classList.add("d-none");

  document.getElementById("seccion-" + nombre).classList.remove("d-none");
}


// ----- Cerrar sesión -----
function salir() {
  localStorage.removeItem("nombreUsuario");
  window.location.href = "login.html";
}


// ----- Formulario de usuario -----
function guardarUsuario(evento) {
  evento.preventDefault();

  var nombre = document.getElementById("nombreCaptura").value;
  var correo = document.getElementById("correoCaptura").value;
  var password = document.getElementById("passwordCaptura").value;

  document.getElementById("errorNombreCaptura").textContent = "";
  document.getElementById("errorCorreoCaptura").textContent = "";
  document.getElementById("errorPasswordCaptura").textContent = "";
  document.getElementById("mensajeUsuario").textContent = "";

  var todoBien = true;

  if (nombre.trim() == "") {
    document.getElementById("errorNombreCaptura").textContent = "Escribe un nombre de usuario.";
    todoBien = false;
  }

  if (validarCorreo(correo) == false) {
    document.getElementById("errorCorreoCaptura").textContent = "Correo no válido.";
    todoBien = false;
  }

  if (validarPassword(password) == false) {
    document.getElementById("errorPasswordCaptura").textContent =
      "Mínimo 8 caracteres, con mayúscula, minúscula, número y carácter especial.";
    todoBien = false;
  }

  if (todoBien == true) {
    document.getElementById("mensajeUsuario").textContent = "Usuario guardado correctamente.";
    document.getElementById("formUsuario").reset();
  }
}


// ----- Formulario de alumno -----
function guardarAlumno(evento) {
  evento.preventDefault();

  var nombre = document.getElementById("nombreAlumno").value;
  var numControl = document.getElementById("numeroControl").value;
  var fecha = document.getElementById("fechaNacimiento").value;

  document.getElementById("errorNombreAlumno").textContent = "";
  document.getElementById("errorNumeroControl").textContent = "";
  document.getElementById("errorFecha").textContent = "";

  var todoBien = true;

  if (soloLetras(nombre) == false) {
    document.getElementById("errorNombreAlumno").textContent = "Solo se permiten letras.";
    todoBien = false;
  }

  if (validarNumeroControl(numControl) == false) {
    document.getElementById("errorNumeroControl").textContent = "Debe tener exactamente 6 números.";
    todoBien = false;
  }

  if (fecha == "") {
    document.getElementById("errorFecha").textContent = "Selecciona la fecha de nacimiento.";
    todoBien = false;
  }

  if (todoBien == true) {
    var edad = calcularEdad(fecha);
    var texto = capitalizarTexto(nombre) + " tiene " + edad + " años. ";

    if (esMayorDeEdad(fecha) == true) {
      texto = texto + "Es mayor de edad.";
    } else {
      texto = texto + "Es menor de edad.";
    }

    document.getElementById("modalEdadTexto").textContent = texto;

    var modal = new bootstrap.Modal(document.getElementById("modalEdad"));
    modal.show();
  }
}