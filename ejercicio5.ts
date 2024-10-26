// Definir la estructura de una reserva
type Reservation = {
    guestName: string;
    roomNumber: number;
    nights: number;
    pricePerNight: number;
  };
  
  // Array para almacenar las reservas
  let reservations: Reservation[] = [];
  
  // Función para agregar una reserva
  function addReservation(guestName: string, roomNumber: number, nights: number, pricePerNight: number): void {
    const newReservation: Reservation = { guestName, roomNumber, nights, pricePerNight };
    reservations.push(newReservation);
    console.log(`Reserva agregada para '${guestName}' en la habitación ${roomNumber} por ${nights} noches.`);
  }
  
  // Función para buscar una reserva por nombre del huésped
  function searchReservationByName(guestName: string): Reservation | undefined {
    const reservation = reservations.find((r) => r.guestName.toLowerCase() === guestName.toLowerCase());
    if (reservation) {
      console.log(`Reserva encontrada: Huésped: ${reservation.guestName}, Habitación: ${reservation.roomNumber}, Noches: ${reservation.nights}, Precio por noche: ${reservation.pricePerNight}`);
    } else {
      console.log(`No se encontró ninguna reserva para el huésped '${guestName}'.`);
    }
    return reservation;
  }
  
  // Función para calcular el ingreso total del hotel
  function calculateTotalIncome(): number {
    if (reservations.length === 0) {
      console.log("No hay reservas en el hotel.");
      return 0;
    }
  
    const totalIncome = reservations.reduce((sum, reservation) => sum + (reservation.nights * reservation.pricePerNight), 0);
    console.log(`El ingreso total del hotel es: ${totalIncome.toFixed(2)}`);
    return totalIncome;
  }
  // Ejemplos de uso:
  addReservation("Luis García", 101, 3, 100);
  addReservation("Andrea López", 102, 2, 150);
  searchReservationByName("Andrea López");
  calculateTotalIncome();
  