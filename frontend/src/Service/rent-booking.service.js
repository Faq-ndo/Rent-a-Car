"use strict";
class bookingService {
    constructor() {
        this.findLocalBookingBy = (param, valueParam) => {
            return this.bookings.find(_booking => _booking[param] === valueParam);
        };
        this.add = (booking) => {
            const bookingSearched = this.findLocalBookingBy('bookingId', booking.bookingId);
            if (!bookingSearched) {
                this.bookings = [...this.bookings, booking];
            }
        };
        this.update = (newBookingData) => {
            this.bookings.find(_booking => {
                if (_booking.bookingId === newBookingData.bookingId) {
                    Object.assign(_booking, newBookingData);
                }
            });
        };
        this.delete = (booking) => {
            return this.bookings.filter(_booking => _booking.bookingId !== booking.bookingId);
        };
        this.bookings = [];
        this.http = new httpService('http://146.59.159.215:82', 'bookingService');
        this.http.getAll().then(res => {
            this.bookings = res;
        });
    }
}
