"use strict";
class clientService {
    constructor() {
        this.findLocalClientBy = (param, valueParam) => {
            return this.clients.find(_client => _client[param] === valueParam);
        };
        this.add = (client) => {
            const clientSearched = this.findLocalClientBy('dni', client.dni);
            if (!clientSearched) {
                this.clients = [...this.clients, client];
            }
        };
        this.update = (newClientData) => {
            this.clients.find(_client => {
                if (_client.id === newClientData.id) {
                    Object.assign(_client, newClientData);
                }
            });
        };
        this.delete = (client) => {
            return this.clients.filter(_client => _client.dni !== client.dni);
        };
        this.createUUID4 = () => {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, cod => {
                let randUUID = Math.random() * 16 | 0, value = cod == 'x' ? randUUID : (randUUID & 0x3 | 0x8);
                return value.toString(16);
            });
        };
        this.clients = [];
        this.http = new httpService('http://146.59.159.215:82', 'clientService');
        this.http.getAll().then(res => {
            this.clients = res;
        });
    }
}
