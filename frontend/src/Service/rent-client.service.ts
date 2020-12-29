class clientService {
    public clients: Client[];

    constructor() {
        this.clients = [];
        /*
        TODO:
            - Crar una función "grande" que lo que tiene q hacer es: 
                1. Comprobar si está en local y si no está mirar en la bsd con la función HTTPSERVICE de buscar(facu)
                2. En el caso que si esté en la bsd meterlo en la lista local. 
                3. Y si no está en ninguno de los dos lados lanza el ERROR.
        */
    }

    findLocalClientByDNI = (client: Client) => this.clients.find(_clients => _clients.dni === client.dni);

    add = (client: Client) => {
        const clientSearched = this.findLocalClientByDNI(client);
        if (!clientSearched){
            this.clients = [...this.clients, client];
      }
    }

    createUUID4 = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, cod => {
            let randUUID = Math.random() * 16 | 0, value = cod == 'x' ? randUUID : (randUUID & 0x3 | 0x8);
            return value.toString(16);
        });
      }

}