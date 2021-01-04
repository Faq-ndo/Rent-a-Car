class rentCar { 
    public id : string | undefined;
    private _numberPlate: string = "";
    public model : string;
    public color : string;
    private _brand : string = "";
    public bookingPrice : number;
    private _garage : string = "";

    constructor({id, numberPlate, model, color, brand, bookingPrice, garage}: Car){
        this.id = id;
        this.numberPlate = numberPlate;
        this.model = model;
        this.color = color;
        this.brand  = brand;
        this.bookingPrice = bookingPrice;
        this.garage = garage;
    }

    set numberPlate(numberPlate : string){
        if(!/^([A-Z]{1,2})?\d{4}([A-Z]{2,3})$/.test(numberPlate)){
            throw new Error('Insert a valid Number Plate');
        }
        this._numberPlate = numberPlate;
    }
    get numberPlate(){
        return this._numberPlate;
    }

    set brand(brand : string){
        if(!/^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/.test(brand)){
            throw new Error('Inser a valid Brand´s Car')
        }
        this._brand = brand;
    }
    get brand() {
        return this._brand;
    }

    set garage(garage : string){
        if(!/(^[A-Z][0-9][0-9]$)/.test(garage)){
            throw new Error('Invalid garage number format')
        }
        this._garage = garage;
    }
    get garage(){
        return this._garage;
    }
}