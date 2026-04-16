import { calcularDisponible, calcularCapacidadPago } from './funciones.js'

function calcular() {
  let ingresos = parseFloat(document.getElementById("txtIngresos").value) || 0;
  let egresos = parseFloat(document.getElementById("txtEgresos").value) || 0;

  let disponible = calcularDisponible(ingresos, egresos);
  let capacidad = calcularCapacidadPago(disponible);

  document.getElementById("lblDisponibleValor").textContent = disponible;
  document.getElementById("lblCapacidadValor").textContent = capacidad;
}

document.getElementById("btnCalcularCredito").addEventListener("click", calcular);