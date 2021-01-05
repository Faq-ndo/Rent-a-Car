"use strict";
class httpService {
    constructor(urlServer, endPointService) {
        this.getOpt = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        this.insertOpt = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };
        this.updateOpt = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            }
        };
        this.deleteOpt = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        this.getAll = async () => {
            const response = await fetch(this.endPoint, this.getOpt);
            const occurences = await response.json();
            return occurences;
        };
        this.getOne = async (id) => {
            const response = await fetch(this.endPoint + `&id=${id}`, this.getOpt);
            const occurrence = await response.json();
            return occurrence;
        };
        this.insert = async (object) => {
            this.insertOpt.body = JSON.stringify(object);
            const response = await fetch(this.endPoint, this.insertOpt);
            const occurrence = await response.json();
            return occurrence;
        };
        this.update = async (id, object) => {
            this.updateOpt.body = JSON.stringify(object);
            const response = await fetch(this.endPoint + `&id=${id}`, this.updateOpt);
            const occurrence = await response.json();
            return occurrence;
        };
        this.delete = async (id) => {
            const response = await fetch(this.endPoint + `&id=${id}`, this.deleteOpt);
            const occurrence = await response.json();
            return occurrence;
        };
        this.urlServer = urlServer;
        this.endPointService = endPointService;
        this.endPoint = `${this.urlServer}?service=${this.endPointService}`;
    }
}
const http = new httpService('http://146.59.159.215:82', 'carService');
const car = {
    numberPlate: '1212GLE',
    brand: 'ford',
    model: 'fiesta',
    color: 'green',
    garage: 'B32',
    bookingPrice: 32.10
};
/* console.log(http.getAll());
console.log(http.getOne('3'));
console.log(http.insert(car));
console.log(http.getAll()); */
