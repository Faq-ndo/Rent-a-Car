class httpService { 
    public urlServer: string;
    public endPointService: string;
    private endPoint: string;

    private getOpt: RequestInit = {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
          }
    }
    private insertOpt: RequestInit = {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
          }
    }
    private updateOpt: RequestInit = {
        method: "PUT",
        headers:{
            'Content-Type': 'application/json'
          }
    }
    public deleteOpt: RequestInit = {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
          }
    }

    constructor(urlServer: string, endPointService: string){
        this.urlServer = urlServer;
        this.endPointService = endPointService;
        this.endPoint = `${this.urlServer}?service=${this.endPointService}`;
    }

    getAll = async () => {
        const response = await fetch(this.endPoint, this.getOpt);
        const occurences = await response.json();
        return occurences;
    }

    getOne = async (id: string) => {
        const response = await fetch(this.endPoint + `&id=${id}`, this.getOpt);
        const occurrence = await response.json().catch(e => {
            console.log(e);
        });
        return occurrence;
    }

    insert = async (object: Client|Car|Booking) => {
        this.insertOpt.body = JSON.stringify(object);
        const response = await fetch(this.endPoint, this.insertOpt);
        const occurrence = await response.json().catch(e => {
            console.log(e);
        })
        return occurrence;
    }

    update = async (id: string | undefined, object: Client|Car|Booking) => {
        this.updateOpt.body = JSON.stringify(object);
        const response = await fetch(this.endPoint + `&id=${id}`, this.updateOpt);
        const occurrence = await response.json().catch(e => {
            console.log(e);
        });
        return occurrence;
    }

    delete = async (id: string | undefined) =>{
        const response = await fetch(this.endPoint + `&id=${id}`, this.deleteOpt)
        const occurrence = await response.json().catch(e => {
            console.log(e);
        });
        return occurrence;
    }
}

const http = new httpService('http://146.59.159.215:82', 'carService');
const car: Car = {
    numberPlate: '6881GLE',
    brand: 'ford',
    model: 'fiesta',
    color: 'green',
    garage: 'B32',
    bookingPrice: 32.10
}
/* console.log(http.getAll());
console.log(http.getOne('3'));
console.log(http.insert(car));
console.log(http.getAll()); */
