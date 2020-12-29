class bookingService {
    public bookings: Booking[];
    constructor() {
        this.bookings = [];
    }

    findLocalBookingById = (booking: Booking) => this.bookings.find(_bookings => _bookings.bookingId === booking.bookingId);

    add = (booking: Booking) => {
        const bookingSearched = this.findLocalBookingById(booking);
         if (!bookingSearched){
        this.bookings = [...this.bookings, booking];
      }
    }
}