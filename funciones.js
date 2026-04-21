export function calcularDisponible(ingresos, ...egresos) {
  let sumaEgresos = egresos.reduce((acc, actual) => acc + actual, 0);
  let resultado = ingresos - sumaEgresos;
  return resultado <= 0 ? 0 : resultado;
}

export function calcularCapacidadPago(montoDisponible) {
  return montoDisponible * 0.5;
}

export function calcularInteresSimple(monto, tasa, plazoAnios) {
  return monto * (tasa / 100) * plazoAnios;
}

export function calcularTotalPagar(monto, interes) {
  return monto + interes + 100;
}

export function calcularCuotaMensual(total, plazoAnios) {
  let cuota = total / (plazoAnios * 12);
  return cuota.toFixed(2);
}

export function analizarCredito(capacidadPago, cuotaMensual) {
  return capacidadPago > cuotaMensual ? true : false;
}

export function aprobarCredito(credito) {
  return credito === true ? "CREDITO APROBADO" : "CREDITO RECHAZADO";
}