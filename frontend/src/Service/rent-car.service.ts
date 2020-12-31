class carService {
    public cars: Car[];

    constructor() {
        this.cars = [];
    }


    findLocalCarBy = (param: string, valueParam: string) => {
        return this.cars.find(_car => _car[param as keyof Car] === valueParam)
    }


    add = (car: Car) => {
        const carSearched = this.findLocalCarBy('numberPlate', car.numberPlate);
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
    }

    delete = (car : Car) => {
        return this.cars.filter(_car => _car.numberPlate !== car.numberPlate)
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
console.log(carserv.findLocalCarBy('numberPlate', c1.numberPlate));
/* console.log('ARRAY DE COCHES: ', carserv.cars);
setTimeout(function asd (){
    carserv.update(c2)
    console.log('ARRAY DESPUES UPDATE: ', carserv.cars);
}, 6000); */




