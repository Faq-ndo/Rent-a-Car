class bookingService {
    public bookings: Booking[];
    constructor() {
        this.bookings = [];
    }

    findLocalBookingBy = (param: string, valueParam: string) => {
        return this.bookings.find(_booking => _booking[param as keyof Booking] === valueParam);
    }

    add = (booking: Booking) => {
        const bookingSearched = this.findLocalBookingBy('bookingId', booking.bookingId);
         if (!bookingSearched){
        this.bookings = [...this.bookings, booking];
      }
    }

    update = (newBookingData: Booking) => {
        this.bookings.find(_booking => {
            if(_booking.bookingId === newBookingData.bookingId){
                _booking.clientId = newBookingData.clientId;
                _booking.carId = newBookingData.carId;
                _booking.startDate = newBookingData.startDate;
                _booking.endDate = newBookingData.endDate;
                _booking.totalPrice = newBookingData.totalPrice;
                _booking.gasLiters = newBookingData.gasLiters;
                _booking.delivered = newBookingData.delivered;
                _booking.description = newBookingData.description;
            }
        })
    }

    delete = (booking : Booking) => {
        return this.bookings.filter(_booking => _booking.bookingId !== booking.bookingId)
    }
}