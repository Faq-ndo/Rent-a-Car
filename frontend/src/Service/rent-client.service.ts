class clientService {
    public clients: Client[];

    constructor() {
        this.clients = [];
    }

    findLocalClientBy = (param: string, valueParam: string) => {
        return this.clients.find(_client => _client[param as keyof Client] === valueParam);
    }

    add = (client: Client) => {
        const clientSearched = this.findLocalClientBy('dni', client.dni);
        if (!clientSearched){
            this.clients = [...this.clients, client];
      }
    }

    update = (newClientData: Client) => {
        this.clients.find(_client => {
            if(_client.id === newClientData.id){
                _client.dni = newClientData.dni;
                _client.name = newClientData.name;
                _client.address = newClientData.address;
                _client.phone = newClientData.phone;
                _client.avaledBy = newClientData.avaledBy;
                _client.endorses = newClientData.endorses;
            }
        })
        return true;
    }

    delete = (client : Client) => {
        return this.clients.filter(_client => _client.dni !== client.dni)
    }

    createUUID4 = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, cod => {
            let randUUID = Math.random() * 16 | 0, value = cod == 'x' ? randUUID : (randUUID & 0x3 | 0x8);
            return value.toString(16);
        });
      }
}