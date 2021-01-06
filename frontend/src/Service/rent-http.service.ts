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
            'Content-Type': 'application/json',
            'Accept': 'application/json'
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
        const occurrence = await response.json();
        return occurrence;
    }

    insert = async (object: rentClient|rentCar|rentBooking) => {
        this.insertOpt.body = JSON.stringify(object);
        const response = await fetch(this.endPoint, this.insertOpt);
        const occurrence = await response.json();
        return occurrence;
    }

    update = async (id: number | undefined, object: rentClient|rentCar|rentBooking) => {
        this.updateOpt.body = JSON.stringify(object);
        const response = await fetch(this.endPoint + `&id=${id}`, this.updateOpt);
        const occurrence = await response.json();
        return occurrence;
    }

    delete = async (id: number | undefined) =>{
        const response = await fetch(this.endPoint + `&id=${id}`, this.deleteOpt);
        const occurrence = await response.json();
        return occurrence;
    }
}
