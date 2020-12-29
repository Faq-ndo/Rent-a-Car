'use strict';
class httpService {
  constructor(urlServer, portServer, endPointService) {
    this.getOpt = {
      method: 'GET',
    };
    this.insertOpt = {
      method: 'POST',
    };
    this.updateOpt = {
      method: 'PUT',
    };
    this.deleteOpt = {
      method: 'DELETE',
    };
    this.getAll = () => {
      fetch(this.endPoint, this.getOpt)
        .then(response => response.json())
        .then(occurrences => {
          return occurrences;
        });
    };
    this.getOne = id => {
      fetch(this.endPoint + `&id=${id}`, this.getOpt)
        .then(response => response.json())
        .then(occurrence => {
          return occurrence;
        });
    };
    this.insert = object => {
      this.insertOpt.body = JSON.stringify(object);
      fetch(this.endPoint, this.insertOpt)
        .then(response => response.json())
        .then(occurrence => {
          return occurrence;
        });
    };
    this.update = (id, object) => {
      this.updateOpt.body = JSON.stringify(object);
      fetch(this.endPoint + `&id=${id}`, this.updateOpt)
        .then(response => response.json())
        .then(occurrence => {
          return occurrence;
        });
    };
    this.delete = id => {
      fetch(this.endPoint + `&id=${id}`, this.deleteOpt)
        .then(response => response.json())
        .then(occurrence => {
          return occurrence;
        });
    };
    this.urlServer = urlServer;
    this.portServer = portServer;
    this.endPointService = endPointService;
    this.endPoint = `${this.urlServer}?service=${this.endPointService}`;
  }
}
const http = new httpService(
  'http://localhost:5000/backend/indexController.php',
  61813,
  'serviceCars',
);
console.log(http.getAll());
