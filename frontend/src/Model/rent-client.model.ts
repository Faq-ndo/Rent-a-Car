class rentClient{
    public id : string;
    private _dni : string = "";
    private _name : string = "";
    public address : string;
    private _phone : string = "";
    public avaledBy : string;
    public endorses: Client[];


    constructor ({id, dni, name, address, phone, avaledBy = "", endorses = []}: Client){
            this.id = id;
            this.dni = dni;
            this.name = name;
            this.address = address;
            this.phone = phone;
            this.avaledBy = avaledBy;
            this.endorses = endorses;
    }

    set dni(dni : string){
       if(!/([aA-zZ]|[0-9])[0-9]{7}([a-z]|[A-Z]|[0-9])/.test(dni)){
           throw new Error('Insert a valid Spanish DNI');
       }
        this._dni = dni;
   }
   get dni(){
       return this._dni;
   }

   set name(name : string){
       if(!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name)){
           throw new Error('Insert a valid Name');
       }
       this._name = name;
   }

   get name(){
       return this._name;
   }

   set phone(phone : string){
       if(!/(^[679]{1}[0-9]{8}$)/.test(phone)){
           throw new Error('Insert a valid Phone')
       }
       this._phone = phone;
   }

   get phone(){
       return this._phone;
   }
}
const co : Client = {
    id: '1',
    dni : 'Y1029209L',
    name : 'Facundo',
    address : 'Calle 123',
    phone : '679337793',
}

const c = new rentClient(co);
console.log(c);