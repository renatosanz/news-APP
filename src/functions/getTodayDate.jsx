export default function getTodayDate() {
  // Obtiene la fecha de hoy
  const today = new Date();

  // Formatea la fecha en formato legible
  const y = today.getFullYear();
  const m = String(today.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11, por eso se suma 1
  const d = String(today.getDate()).padStart(2, '0');

  const dateToday = {
    year : y,
    month : m,
    day : d
  };
  return dateToday
}
