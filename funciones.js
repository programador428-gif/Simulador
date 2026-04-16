function calcularDisponible(ingresos, egresos) {
  return (ingresos - egresos) <= 0 ? 0 : ingresos - egresos;
}

function calcularCapacidadPago(montoDisponible) {
  return montoDisponible * 0.5;
}