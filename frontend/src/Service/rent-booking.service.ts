class bookingService {
    public bookings: Booking[];
    private http : httpService;
    constructor() {
        this.bookings = [];
        this.http = new httpService('http://146.59.159.215:82','bookingService');
        this.http.getAll().then(res => {
            this.bookings = res;
        });
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
                Object.assign(_booking, newBookingData);
            }
        })
    }

    delete = (booking : Booking) => {
        return this.bookings.filter(_booking => _booking.bookingId !== booking.bookingId)
    }
}