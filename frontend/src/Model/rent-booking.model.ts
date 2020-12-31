class rentBooking { 
    public bookingId: string;
    public clientId: string;
    public carId: string;
    private _startDate : string = "";
    private _endDate: string = "";
    public totalPrice: number;
    public gasLiters: number;
    public delivered: boolean;
    public description: string;
    
    //TODO create a date control to start and end date.
    constructor({bookingId, clientId, carId, startDate, endDate, totalPrice, gasLiters, delivered, description}: Booking){
        this.bookingId = bookingId;
        this.clientId = clientId;
        this.carId = carId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.totalPrice = totalPrice;
        this.gasLiters = gasLiters;
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