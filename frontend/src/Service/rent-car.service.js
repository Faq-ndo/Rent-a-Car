"use strict";
class carService {
    constructor() {
        this.insertCar = (car) => {
            this.add(car);
            this.http.insert(car).then(res => {
                if (res.status === 'ko') {
                    console.log(res.errorMessage);
                    this.delete(car);
                }
                if (res.status === 'ok') {
                    this.cars.find(_car => {
                        if (_car.numberPlate === res.numberPlate) {
                            _car.id = res.id;
                        }
                    });
                }
            });
        };
        this.updateCar = (car) => {
            this.update(car);
            this.http.update(car.id, car).then(res => {
                if (res.status === 'ko') {
                    console.log(res.errorMessage);
                }
                if (res.status === 'ok') {
                    console.log('The car was updated successfully');
                }
            });
        };
        this.deleteCar = (car) => {
            this.delete(car);
            this.http.delete(car.id).then(res => {
                if (res.status === 'ko') {
                    console.log(res.errorMessage);
                }
                if (res.status === 'ok') {
                    console.log('The car was deleted successfully');
                }
            });
        };
        this.findLocalCarBy = (param, valueParam) => this.cars.find(_car => _car[param] === valueParam);
        this.add = (car) => {
            car.id = 45;
            const carSearched = this.findLocalCarBy('numberPlate', car.numberPlate);
            if (!carSearched) {
                this.cars = [...this.cars, car];
            }
        };
        this.update = (newCarData) => {
            console.log('entra');
            this.cars.find(_car => {
                if (_car.id == newCarData.id) {
                    Object.assign(_car, newCarData);
                }
            });
        };
        this.delete = (car) => {
            /* return this.cars.filter(_car => _car.id !== car.id) */
            this.cars.splice(this.cars.indexOf(car), 1);
        };
        this.createUUID4 = () => {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, cod => {
                let randUUID = Math.random() * 16 | 0, value = cod == 'x' ? randUUID : (randUUID & 0x3 | 0x8);
                return value.toString(16);
            });
        };
        this.cars = [];
        this.http = new httpService('http://146.59.159.215:82', 'carService');
        this.http.getAll().then(res => {
            const cars = res.map((_ob) => {
                return new rentCar(_ob);
            });
            this.cars = [...this.cars, ...cars];
        });
    }
}
const c1 = {
    id: 36,
    numberPlate: '6124MMM',
    brand: 'Ferrari',
    model: 'F40',
    color: 'Red',
    garage: 'B11',
    bookingPrice: 15.99
};
const carserv = new carService();
const car1 = new rentCar(c1);
setTimeout(function as() {
    console.log(carserv.cars);
}, 2000);
setTimeout(function as() {
    carserv.updateCar(car1);
}, 4000);
setTimeout(function as() {
    console.log(carserv.cars);
}, 8000);
