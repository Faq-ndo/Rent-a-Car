class rentBooking { 
    public bookingId: string;
    public clientId: string;
    private _startDate : string = "";
    private _endDate: string = "";
    public totalPrice: number;
    public delivered: boolean;
    public description: string;

    constructor({bookingId, clientId, startDate, endDate, totalPrice, delivered, description}: Booking){
        this.bookingId = bookingId;
        this.clientId = clientId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.totalPrice = totalPrice;
        this.delivered = delivered;
        this.description = description;
    }

    set startDate(startDate: string){
        const mStartDate = moment(startDate, 'DD-MM-YYYY');
        const now = moment();
        if(!mStartDate.isValid()){
            throw new Error('StartDate invalid');
        }
        if(mStartDate.isBefore(now)){
            throw new Error('Can not enter a past date')
        }
        this._startDate = mStartDate.toString();
    }

    get startDate(){
        return this._startDate;
    }

    set endDate(endDate : string){
        const mDate = moment(endDate, 'DD-MM-YYYY');
        const now = moment()

        if(!mDate.isValid()){
            throw new Error('EndDateInvalid');
        }
        if(mDate.isBefore(now)){
            throw new Error('Can not enter a past date')
        }
        this._startDate = mDate.toString();
    }
    get endDate(){
        return this._endDate;
    }

    
}

const book: Booking = {
    bookingId: '1',
    clientId: '2',
    startDate: '31-12-2020',
    endDate: '30-12-2020',
    totalPrice: 23,
    delivered: true,
    description: ' asdasd'
}

const myBooking = new rentBooking(book);