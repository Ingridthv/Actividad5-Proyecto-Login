function iniciarSesion(evento) {
  evento.preventDefault();

  var correo = document.getElementById("correo").value;
  var password = document.getElementById("password").value;

  document.getElementById("errorCorreo").textContent = "";
  document.getElementById("errorPassword").textContent = "";

  var todoBien = true;

  if (validarCorreo(correo) == false) {
    document.getElementById("errorCorreo").textContent = "Ingresa un correo válido.";
    todoBien = false;
  }

  if (validarPassword(password) == false) {
    document.getElementById("errorPassword").textContent =
      "Mínimo 8 caracteres, con mayúscula, minúscula, número y carácter especial.";
    todoBien = false;
  }

  if (todoBien == true) {
    localStorage.setItem("nombreUsuario", correo);
    window.location.href = "index.html";
  }
}

document.getElementById("formLogin").addEventListener("submit", iniciarSesion);