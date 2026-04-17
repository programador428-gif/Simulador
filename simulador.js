import { calcularDisponible, calcularCapacidadPago, calcularInteresSimple, calcularTotalPagar, calcularCuotaMensual, analizarCredito, aprobarCredito } from './funciones.js'

function calcular() {
  const ingresos = parseFloat(document.getElementById("txtIngresos").value) || 0;
  const egresos = parseFloat(document.getElementById("txtEgresos").value) || 0;
  const monto = parseInt(document.getElementById("txtMonto").value) || 0;
  const plazoAnios = parseInt(document.getElementById("txtPlazo").value) || 0;
  const interes = parseInt(document.getElementById("txtTasaInteres").value) || 0;

  let disponible = calcularDisponible(ingresos, egresos);
  let capacidad = calcularCapacidadPago(disponible);
  let interesSimple = calcularInteresSimple(monto, interes, plazoAnios);
  let totalPagar = calcularTotalPagar(monto, interesSimple);
  let cuotaMensual = calcularCuotaMensual(totalPagar, plazoAnios);
  let creditoAnalizado = analizarCredito(capacidad, cuotaMensual);
  let mensajeFinal = aprobarCredito(creditoAnalizado);

  document.getElementById("lblDisponibleValor").textContent = disponible;
  document.getElementById("lblCapacidadValor").textContent = capacidad;
  document.getElementById("lblInteresValor").textContent = interesSimple;
  document.getElementById("lblTotalValor").textContent = totalPagar;
  document.getElementById("lblCuotaValor").textContent = cuotaMensual;
  document.getElementById("spnEstadoCredito").textContent = mensajeFinal;
}

function reiniciar() {
  document.getElementById("txtIngresos").value = "";
  document.getElementById("txtEgresos").value = "";
  document.getElementById("txtMonto").value = "";
  document.getElementById("txtPlazo").value = "";
  document.getElementById("txtTasaInteres").value = "";

  document.getElementById("lblDisponibleValor").textContent = "0";
  document.getElementById("lblCapacidadValor").textContent = "0";
  document.getElementById("lblInteresValor").textContent = "0";
  document.getElementById("lblTotalValor").textContent = "0";
  document.getElementById("lblCuotaValor").textContent = "0";

  document.getElementById("spnEstadoCredito").textContent = "ESPERANDO DATOS...";
}

document.getElementById("btnCalcularCredito").addEventListener("click", calcular);
document.getElementById("btnReiniciar").addEventListener("click", reiniciar);