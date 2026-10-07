## Actividad 5 PROYECTO LOGIN
### Integrantes del equipo
## Hernández Guzmán Concepción Escarleth
---
## Arcadio Aparicio Ingrid

### Nombre del proyecto
Sistema de Login

---

## Descripción del proyecto

Este proyecto consiste en realizar un sistema de login utilizando HTML, CSS y JavaScript.

El proyecto cuenta con dos pantallas principales. La primera es `login.html`, donde el usuario ingresa su correo y contraseña. Estos datos son validados utilizando las funciones de nuestra librería `utileria.js`.

Si los datos cumplen con las validaciones, el usuario puede ingresar al sistema y es enviado a la página `index.html`.

En `index.html` se encuentra la pantalla principal del sistema, que contiene un navbar, un sidebar y las demás opciones correspondientes al proyecto.

---

## Framework CSS utilizado

Para realizar el diseño del proyecto utilizamos **Bootstrap** como framework CSS.

Bootstrap nos ayudó principalmente a darle estilo y organización a algunos elementos de las páginas, como formularios, botones, navbar y otros componentes.

También utilizamos nuestros propios archivos CSS para personalizar el diseño del proyecto, por ejemplo los colores, tamaños, espacios y algunos estilos del login.

De esta manera utilizamos Bootstrap como base, pero también agregamos nuestros propios estilos.

---

## Funcionamiento del login

El funcionamiento del proyecto comienza en `login.html`.

El usuario debe escribir su correo electrónico y su contraseña. Cuando presiona el botón **Iniciar sesión**, JavaScript obtiene los datos ingresados y realiza las validaciones correspondientes.

Para realizar estas validaciones utilizamos funciones que ya habíamos creado anteriormente en nuestra librería `utileria.js`.

Por ejemplo:

- `validarCorreo()` verifica que el correo tenga un formato correcto.
- `validarPassword()` verifica que la contraseña cumpla con los requisitos establecidos.

Si algún dato no es válido, se muestra un mensaje indicando el error.

Si los datos son correctos, se redirige al usuario hacia `index.html`, simulando que inició sesión correctamente.

El flujo general es:

`login.html` → validación con JavaScript → `index.html`

---

## Paso del nombre de usuario al navbar

Para mostrar el nombre del usuario después de iniciar sesión utilizamos `localStorage`.

Cuando el usuario inicia sesión correctamente, guardamos su nombre antes de enviarlo a `index.html`.

Ejemplo:

```javascript
localStorage.setItem("nombreUsuario", nombre);
window.location.href = "index.html";
