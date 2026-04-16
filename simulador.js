import { calcularDisponible, calcularCapacidadPago, calcularInteresSimple } from './funciones.js'

function calcular() {
  const ingresos = parseFloat(document.getElementById("txtIngresos").value) || 0;
  const egresos = parseFloat(document.getElementById("txtEgresos").value) || 0;
  const monto = parseInt(document.getElementById("txtMonto").value) || 0;
  const plazoAnios = parseInt(document.getElementById("txtPlazo").value) || 0;
  const interes = parseInt(document.getElementById("txtTasaInteres").value) || 0;

  let disponible = calcularDisponible(ingresos, egresos);
  let capacidad = calcularCapacidadPago(disponible);
  let interesSimple = calcularInteresSimple(monto, interes, plazoAnios);

  document.getElementById("lblDisponibleValor").textContent = disponible;
  document.getElementById("lblCapacidadValor").textContent = capacidad;
  document.getElementById("lblInteresValor").textContent = interesSimple;
}

document.getElementById("btnCalcularCredito").addEventListener("click", calcular);