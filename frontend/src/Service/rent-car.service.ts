class carService {
    public cars: Car[];

    constructor() {
        this.cars = [];
    }

    findLocalCarByNumberPlate = ({numberPlate}: Car) => this.cars.find(_cars => _cars.numberPlate === numberPlate);

    add = (car: Car) => {
        const carSearched = this.findLocalCarByNumberPlate(car);
        if (!carSearched){
            this.cars = [...this.cars, car];
        }
    }
    update = (newCarData: Car) => {
        this.cars.find(_car => {
            if(_car.id === newCarData.id){
                _car.numberPlate = newCarData.numberPlate;
                _car.brand = newCarData.brand;
                _car.model = newCarData.model;
                _car.model = newCarData.color;
                _car.bookingPrice = newCarData.bookingPrice;
            }
        })
        return true;
    }
    delete = (car : Car) => {
        this.cars.splice(this.cars.indexOf(car, 1));
    }
}
const c1: Car = {
    id: '12',
    numberPlate: '6881 GDL',
    model: 'FOCUS',
    brand: 'FORD',
    color: 'RED',
    bookingPrice: 32,
    garage: 'A23'
}
const c2: Car = {
    id: '12',
    numberPlate: '4771 GDL',
    model: 'IBIZA',
    brand: 'SEAT',
    color: 'BLUE',
    bookingPrice: 52,
    garage: 'A63'
}
const carserv = new carService();
carserv.add(c1);
console.log('ARRAY DE COCHES: ', carserv.cars);
setTimeout(function asd (){
    carserv.update(c2)
    console.log('ARRAY DESPUES UPDATE: ', carserv.cars);
}, 6000);




