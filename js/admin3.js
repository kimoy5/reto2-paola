window.addEventListener("load", () => {
  const inputBuscar = document.getElementById("buscar");

  inputBuscar.addEventListener("keyup", () => {
    const dtrecibe = inputBuscar.value.trim();
    busqueda(dtrecibe);
  });

  const busqueda = (letras) => {
    console.log(first);
  };
});
