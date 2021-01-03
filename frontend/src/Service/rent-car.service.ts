class carService {
    public cars: Car[];
    private http:  httpService;

    constructor() {
        this.cars = [];
        this.http = new httpService('http://146.59.159.215:82','carService');
        const as = this.http.getAll().then(res =>  res);
        
    }

    insertCar = (car: Car) => {
        this.add(car);
        this.http.insert(car);
    }

    updateCar = (car: Car) => {
        this.update(car);
        this.http.update(car.id, car)
    }

    deleteCar = (car: Car) => {
        this.delete(car);
        this.http.delete(car.id)
    }


    findLocalCarBy = (param: string, valueParam: string) => {
        return this.cars.find(_car => _car[param as keyof Car] === valueParam)
    }


    private add = (car: Car) => {
        const carSearched = this.findLocalCarBy('numberPlate', car.numberPlate);
        if (!carSearched){
            this.cars = [...this.cars, car];
        }
    }

    private update = (newCarData: Car) => {
        this.cars.find(_car => {
            if(_car.numberPlate === newCarData.numberPlate){
               Object.assign(_car, newCarData);
            }
        })
    }

    private delete = (car : Car) => {
        return this.cars.filter(_car => _car.numberPlate !== car.numberPlate)
    }
}
const c1: Car = {
    numberPlate: '6881GLE',
    brand: 'ford',
    model: 'fiesta',
    color: 'green',
    garage: 'B32',
    bookingPrice: 32.10
}
const carserv = new carService();
/* console.log('ARRAY DE COCHES: ', carserv.cars);
setTimeout(function asd (){
    carserv.update(c2)
    console.log('ARRAY DESPUES UPDATE: ', carserv.cars);
}, 6000); */




