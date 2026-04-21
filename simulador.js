import {
  calcularDisponible,
  calcularCapacidadPago,
  calcularInteresSimple,
  calcularTotalPagar,
  calcularCuotaMensual,
  analizarCredito,
  aprobarCredito
} from './funciones.js';

function mostrarError(idInput, mensaje) {
  const input = document.getElementById(idInput);
  if (!input.nextElementSibling || !input.nextElementSibling.classList.contains("error-msg")) {
    const errorSpan = document.createElement("span");
    errorSpan.className = "error-msg";
    errorSpan.textContent = mensaje;
    errorSpan.style.cssText = "color: #dc3545; font-size: 12px; display: block; margin-top: -15px; margin-bottom: 15px; font-weight: 500;";
    input.insertAdjacentElement("afterend", errorSpan);
    input.style.borderColor = "#dc3545";
  }
}

function limpiarErrores() {
  const errores = document.querySelectorAll(".error-msg");
  errores.forEach(error => error.remove());
  const inputs = document.querySelectorAll("input");
  inputs.forEach(input => input.style.borderColor = "");
}

function calcular() {
  limpiarErrores();
  let validacionExitosa = true;

  const rawIngresos = document.getElementById("txtIngresos").value.trim();
  const rawArriendo = document.getElementById("txtArriendo").value.trim();
  const rawAlimentacion = document.getElementById("txtAlimentacion").value.trim();
  const rawVarios = document.getElementById("txtVarios").value.trim();
  const rawMonto = document.getElementById("txtMonto").value.trim();
  const rawPlazo = document.getElementById("txtPlazo").value.trim();
  const rawTasa = document.getElementById("txtTasaInteres").value.trim();

  const campos = { txtIngresos: rawIngresos, txtArriendo: rawArriendo, txtAlimentacion: rawAlimentacion, txtVarios: rawVarios, txtMonto: rawMonto, txtPlazo: rawPlazo, txtTasaInteres: rawTasa };
  for (const id in campos) {
    if (campos[id] === "") {
      mostrarError(id, "Este campo es obligatorio.");
      validacionExitosa = false;
    }
  }

  const monto = parseFloat(rawMonto);
  if (!isNaN(monto)) {
    if (monto <= 0) {
      mostrarError("txtMonto", "El monto debe ser mayor a 0.");
      validacionExitosa = false;
    } else if (monto > 50000) {
      mostrarError("txtMonto", "El monto no puede superar los $50,000.");
      validacionExitosa = false;
    }
  }

  const plazo = parseInt(rawPlazo);
  if (!isNaN(plazo)) {
    if (plazo <= 0) {
      mostrarError("txtPlazo", "El plazo debe ser al menos 1 año.");
      validacionExitosa = false;
    } else if (plazo > 10) {
      mostrarError("txtPlazo", "El plazo máximo es de 10 años.");
      validacionExitosa = false;
    }
  }

  if (validacionExitosa) {
    const ingresos = parseFloat(rawIngresos);
    const arriendo = parseFloat(rawArriendo);
    const alimentacion = parseFloat(rawAlimentacion);
    const varios = parseFloat(rawVarios);
    const tasa = parseFloat(rawTasa);

    const totalGastos = arriendo + alimentacion + varios;
    document.getElementById("lblTotalGastos").textContent = `$${totalGastos.toLocaleString()}`;

    let disponible = calcularDisponible(ingresos, arriendo, alimentacion, varios);
    let capacidad = calcularCapacidadPago(disponible);
    let interesSimple = calcularInteresSimple(monto, tasa, plazo);
    let totalPagar = calcularTotalPagar(monto, interesSimple);
    let cuotaMensual = parseFloat(calcularCuotaMensual(totalPagar, plazo));

    let creditoPosible = analizarCredito(capacidad, cuotaMensual);

    document.getElementById("lblDisponibleValor").textContent = `$${disponible.toLocaleString()}`;
    document.getElementById("lblCapacidadValor").textContent = `$${capacidad.toLocaleString()}`;
    document.getElementById("lblInteresValor").textContent = `$${interesSimple.toLocaleString()}`;
    document.getElementById("lblTotalValor").textContent = `$${totalPagar.toLocaleString()}`;
    document.getElementById("lblCuotaValor").textContent = `$${cuotaMensual.toLocaleString()}`;

    const mensajeFinal = aprobarCredito(creditoPosible);
    document.getElementById("spnEstadoCredito").textContent = mensajeFinal;
  }
}

function reiniciar() {
  limpiarErrores();
  document.querySelectorAll("input").forEach(input => input.value = "");
  document.getElementById("lblDisponibleValor").textContent = "0";
  document.getElementById("lblCapacidadValor").textContent = "0";
  document.getElementById("lblInteresValor").textContent = "0";
  document.getElementById("lblTotalValor").textContent = "0";
  document.getElementById("lblCuotaValor").textContent = "0";
  document.getElementById("lblTotalGastos").textContent = "0";
  document.getElementById("spnEstadoCredito").textContent = "ESPERANDO DATOS...";
}

document.getElementById("btnCalcularCredito").addEventListener("click", calcular);
document.getElementById("btnReiniciar").addEventListener("click", reiniciar);