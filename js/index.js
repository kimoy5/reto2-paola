let user = "oscar@gmail.com";
let password = "123";

function recibirDatos(tecladoUser, tecladoPassword) {
  if (tecladoUser === user && tecladoPassword === password) {
    return true;
  } else {
    return false;
  }
}

function login() {
  let usuario = document.getElementById("email").value;
  let clave = document.getElementById("password").value;
  if (recibirDatos(usuario, clave)) {
    window.location.href = "https://kimoy5.github.io/reto-paola/";
    alert("Ingrerso!");
  } else {
    alert("Usuario o Contraseña incorrectos!⛔");
  }
}
