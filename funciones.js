function calcularDisponible(ingresos, egresos) {
  return (ingresos - egresos) <= 0 ? 0 : ingresos - egresos;
}