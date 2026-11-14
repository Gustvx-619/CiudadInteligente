// Dashboards de cada grupo. Para agregar un grupo nuevo: poner aquí su enlace de
// "Publicar en la web" de Power BI y cambiar su tarjeta en index.html de div a enlace (#clave).
var MODULOS = {
  parking: {
    nombre: "Smart Parking",
    url: "https://app.powerbi.com/view?r=eyJrIjoiYTgwZTY5OTUtOWMyNi00OWNhLThiNTYtMzYyZjU4N2E5YTk0IiwidCI6IjA3ZGE2N2EwLTFmNDMtNGU4Yy05NzdmLTVmODhiNjQ3MGVlNiIsImMiOjR9"
  },
  green: {
    nombre: "SmartGreenZone",
    url: "https://app.powerbi.com/view?r=eyJrIjoiOTI4ZGUwMjYtYjU4Mi00Y2MwLWI4OTUtMTkxMWQxMDIxMjhjIiwidCI6IjA3ZGE2N2EwLTFmNDMtNGU4Yy05NzdmLTVmODhiNjQ3MGVlNiIsImMiOjR9"
  }
};

(function () {
  var visor = document.getElementById("visor");
  var marco = document.getElementById("visor-marco");
  var titulo = document.getElementById("visor-titulo");
  var externo = document.getElementById("visor-externo");
  var abierto = null;

  function sincronizar() {
    var clave = location.hash.slice(1);
    var m = MODULOS[clave];
    if (m) {
      if (abierto !== clave) {
        titulo.textContent = "Dashboard de " + m.nombre;
        marco.title = "Dashboard de " + m.nombre + " en Power BI";
        marco.src = m.url;
        externo.href = m.url;
        abierto = clave;
      }
      if (!visor.open) visor.showModal();
    } else {
      if (visor.open) visor.close();
      marco.removeAttribute("src");
      abierto = null;
    }
  }

  // Esc cierra el visor: se quita la clave de la dirección para que no se reabra
  visor.addEventListener("close", function () {
    if (MODULOS[location.hash.slice(1)]) {
      history.replaceState(null, "", location.pathname + location.search + "#modulos");
    }
    marco.removeAttribute("src");
    abierto = null;
  });

  window.addEventListener("hashchange", sincronizar);
  sincronizar();
})();
