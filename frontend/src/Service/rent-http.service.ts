class httpService { 
    public urlServer: string;
    public endPointService: string;
    private endPoint: string;

    private getOpt: Options = {
        method: 'GET'
    }
    private insertOpt: Options = {
        method: "POST",
    }

    private updateOpt: Options = {
        method: "PUT",
    }

    private deleteOpt: Options = {
        method: 'DELETE',
    }
    constructor(urlServer: string, endPointService: string){
        this.urlServer = urlServer;
        this.endPointService = endPointService;
        this.endPoint = `${this.urlServer}?service=${this.endPointService}`;
    }

    getAll = () => {
        fetch(this.endPoint, this.getOpt)
        .then(response => response.json())
        .then(occurrences => {return occurrences});
    }

    getOne = (id: string) => {
        fetch(this.endPoint + `&id=${id}`, this.getOpt)
        .then(response => response.json())
        .then(occurrence => {return occurrence});
    }

    insert = (object: Client|Car|Booking) => {
        this.insertOpt.body = JSON.stringify(object);
        fetch(this.endPoint, this.insertOpt)
        .then(response => response.json())
        .then(occurrence => {return occurrence});
    }

    update = (id:string, object: Client|Car|Booking) => {
        this.updateOpt.body = JSON.stringify(object);
        fetch(this.endPoint + `&id=${id}`, this.updateOpt)
        .then(response => response.json())
        .then(occurrence => {return occurrence});
    }

    delete = (id: string) =>{
        fetch(this.endPoint + `&id=${id}`, this.deleteOpt)
        .then(response => response.json())
        .then(occurrence => {return occurrence});
    }
}

const http = new httpService('http://146.59.159.215:82', 'serviceCars');
console.log(http.getAll());
