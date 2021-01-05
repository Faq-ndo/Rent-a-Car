class carService {
    public cars: rentCar[];
    private http:  httpService;

    constructor() {
        this.cars = [];
        this.http = new httpService('http://146.59.159.215:82','carService');
        this.http.getAll().then(res => {
            const cars = res.map((_ob: Car) => {
                return new rentCar(_ob);
            })
            this.cars = [...this.cars, ...cars];
        });
    }

    insertCar = (car: rentCar) => {
        this.add(car);
        this.http.insert(car).then(res => {
            if(res.status === 'ko'){
                console.log(res.errorMessage)
                this.delete(car);
            }
            if(res.status === 'ok'){
                this.cars.find(_car => {
                    if(_car.numberPlate === res.numberPlate){
                        _car.id = res.id
                    }
                })
            }
        });
    }

    updateCar = (car: rentCar) => {
        this.update(car);
        this.http.update(car.id, car).then()
    }

    deleteCar = (car: rentCar) => {
        this.delete(car);
        this.http.delete(car.id).then(res => {
            if(res.status === 'ko'){
                console.log(res.errorMessage);
            }if(res.status === 'ok'){
                console.log('The car was deleted successfully');
            }
        })
    }


    findLocalCarBy = (param: string, valueParam: string) => 
         this.cars.find(_car => _car[param as keyof Car] === valueParam)


    private add = (car: rentCar) => {
        car.id = this.createUUID4();
        const carSearched = this.findLocalCarBy('numberPlate', car.numberPlate);
        if (!carSearched){
            this.cars = [...this.cars, car];
        }
    }

    private update = (newCarData: rentCar) => {
        this.cars.find(_car => {
            if(_car.id === newCarData.id){
               Object.assign(_car, newCarData);
            }
        })
    }

    private delete = (car : rentCar) => {
        /* return this.cars.filter(_car => _car.id !== car.id) */
        this.cars.splice(this.cars.indexOf(car), 1);
    }

    createUUID4 = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, cod => {
            let randUUID = Math.random() * 16 | 0, value = cod == 'x' ? randUUID : (randUUID & 0x3 | 0x8);
            return value.toString(16);
        });
      }
}
const c1: Car = {
    id: '33',
    numberPlate: '6104MMM',
    brand: 'Renault',
    model: 'Clio',
    color: 'Red',
    garage: 'B33',
    bookingPrice: 32.10
}
const carserv = new carService();
const car1 = new rentCar(c1);
//carserv.insertCar(car1);

setTimeout(function as(){
    carserv.deleteCar(car1);
    console.log('COCHES CARGADOS EN LOCAL', carserv.cars)
},9000);





