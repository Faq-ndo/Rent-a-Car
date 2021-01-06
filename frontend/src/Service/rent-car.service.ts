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
        const backupCar = this.findLocalCarBy('id', car.id!);
        this.update(car);
        this.http.update(car.id, car).then(res => {
            if(res.status === 'ko'){
                console.log(res.errorMessage);
                this.delete(car);
                this.add(backupCar!);
            }if(res.status === 'ok'){
                console.log('The car was updated successfully');
            }
        });
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


    findLocalCarBy = (param: string, valueParam: string | number) => 
         this.cars.find(_car => _car[param as keyof Car] === valueParam);


    private add = (car: rentCar) => {
        car.id = Math.floor(Math.random() * 100);
        const carSearched = this.findLocalCarBy('numberPlate', car.numberPlate);
        if (!carSearched){
            this.cars = [...this.cars, car];
        }
    }

    private update = (newCarData: rentCar) => {
        this.cars.find(_car => {
            if(_car.id == newCarData.id){
               Object.assign(_car, newCarData);
            }
        })
    }

    private delete = (car : rentCar) => {
        /* return this.cars.filter(_car => _car.id !== car.id) */
        this.cars.splice(this.cars.indexOf(car), 1);
    }
}





