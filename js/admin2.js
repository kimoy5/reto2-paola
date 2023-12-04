window.addEventListener("load", () => {
  // el evento load hace referencia cuando los elemetos han terminado de cambiar
  const formulario = document.getElementById("form-crear");
  const listMulta = document.getElementById("listaMulta");
  const nombre = document.getElementById("name");
  const numerocc = document.getElementById("numberce");
  const correo = document.getElementById("correo");
  const fecha = document.getElementById("fecha");
  const observa = document.getElementById("observa");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    capturarValor();
  });

  const capturarValor = () => {
    const nombrecap = nombre.value.trim();
    const numerocap = numerocc.value.trim();
    const correocap = correo.value.trim();
    const fechacap = fecha.value.trim();
    const observacap = observa.value.trim();

    console.log(nombrecap, numerocap, correocap, fechacap, observacap);
    nombrecap.length &&
    numerocap.length &&
    correocap.length &&
    fechacap.length &&
    observacap.length
      ? pintarHtml(nombrecap, numerocap, correocap, fechacap, observacap)
      : alert("Por favor ingresa un valor!");
  };

  const pintarHtml = (
    nombreHtml,
    numeroHtml,
    correoHtml,
    fechaHtml,
    obserHtml
  ) => {
    const liHtml = `
    <li borrar >
            <strong>${nombreHtml}</strong>
            <strong>${numeroHtml}</strong>
            <strong>${correoHtml}</strong>
            <strong>${fechaHtml}</strong>
            <strong>${obserHtml}</strong>
            <i class="fa-solid fa-trash borrar"></i>
      </li>`;
    listMulta.innerHTML += liHtml;
    formulario.reset();
  };

  const inputBuscar = document.getElementById("buscar");

  inputBuscar.addEventListener("keyup", () => {
    const dtrecibe = inputBuscar.value.trim();
    busqueda(dtrecibe);
  });

  const busqueda = (letras) => {
    // console.log(listMulta.children);
    let arreglo = Array.from(listMulta.children);
    arreglo
      .filter((texto) => !texto.textContent.toLowerCase().includes(letras))
      .forEach((cadenaFiltrada) => {
        cadenaFiltrada.classList.add("textoFiltrado");
      });
    arreglo
      .filter((texto) => texto.textContent.toLowerCase().includes(letras))
      .forEach((cadenaFiltrada) => {
        cadenaFiltrada.classList.remove("textoFiltrado");
      });
  };
  listMulta.addEventListener("click", (e) => {
    if (e.target.classList.contains("borrar")) {
      e.target.parentElement.remove(borrar());
      function borrar() {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Eliminado!",
          showConfirmButton: true,
          width: "80%",
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
          stopKeydownPropagation: false,
          customClass: {},
          confirmButtonColor: "#3085d6",
        });
      }
    }
    console.log(e.target.parentElement);
  });
  inputBuscar.value = "";
});
