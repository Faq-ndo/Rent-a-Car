"use strict";
class clientService {
    constructor() {
        this.insertClient = (client) => {
            this.add(client);
            this.http.insert(client).then(res => {
                if (res.status === 'ko') {
                    console.log(res.errorMessage);
                    this.delete(client);
                }
                if (res.status === 'ok') {
                    this.clients.find(_client => {
                        if (_client.dni === res.dni) {
                            _client.id = res.id;
                        }
                    });
                }
            });
        };
        this.updateClient = (client) => {
            const backupClient = this.findLocalClientBy('id', client.id);
            this.update(client);
            this.http.update(client.id, client).then(res => {
                if (res.status === 'ko') {
                    console.log(res.errorMessage);
                    this.delete(client);
                    this.add(backupClient);
                }
                if (res.status === 'ok') {
                    console.log('The client was updated successfully');
                }
            });
        };
        this.deleteClient = (client) => {
            this.delete(client);
            this.http.delete(client.id).then(res => {
                if (res.status === 'ko') {
                    console.log(res.errorMessage);
                }
                if (res.status === 'ok') {
                    console.log('The car was deleted successfully');
                }
            });
        };
        this.findLocalClientBy = (param, valueParam) => {
            return this.clients.find(_client => _client[param] === valueParam);
        };
        this.add = (client) => {
            client.id = Math.floor(Math.random() * 100);
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
            /* return this.clients.filter(_client => _client.dni !== client.dni) */
            this.clients.splice(this.clients.indexOf(client), 1);
        };
        this.clients = [];
        this.http = new httpService('http://146.59.159.215:82', 'clientService');
        this.http.getAll().then(res => {
            const clients = res.map((_ob) => {
                return new rentClient(_ob);
            });
            this.clients = [...this.clients, ...clients];
        });
    }
}
const cliserve = new clientService();
setTimeout(() => {
    console.log(cliserve.clients);
}, 3000);
