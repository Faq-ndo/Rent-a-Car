"use strict";
class httpService {
    constructor(urlServer, portServer, endPointService) {
        this.getAllOccurrences = (url, options) => {
            fetch(url, options)
                .then(response => response.json())
                .then(occurrences => console.log(occurrences));
        };
        this.urlServer = urlServer;
        this.portServer = portServer;
        this.endPointService = endPointService;
        this.endPoint = `${this.urlServer}:${this.portServer}/service=${this.endPointService}`;
    }
}
const opt = {
    method: "GET",
};
console.log(opt.method);
const http = new httpService('as', 23, 'holis');
http.getAllOccurrences('https://jsonplaceholder.typicode.com/posts', opt);
