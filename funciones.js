export function calcularDisponible(ingresos, egresos) {
  return (ingresos - egresos) <= 0 ? 0 : ingresos - egresos;
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