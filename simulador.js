function calcular() {
  let ingresos = parseFloat(document.getElementById("txtIngresos").value);
  let egresos = parseFloat(document.getElementById("txtEgresos").value);

  let disponible = calcularDisponible(ingresos, egresos);
  let capacidad = calcularCapacidadPago(disponible);

  document.getElementById("lblDisponibleValor").textContent = disponible;
  document.getElementById("lblCapacidadValor").textContent = capacidad;
}