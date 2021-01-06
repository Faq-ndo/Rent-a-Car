class rentClient{
    public id : number | undefined;
    public dni : string = "";
    private _name : string = "";
    public address : string;
    private _phoneNumber : string = "";
    public avaledBy : string | undefined;
    public endorses: string[] | undefined;


    constructor ({id, dni, name, address, phoneNumber, avaledBy, endorses}: Client){
            this.id = id;
            this.dni = dni;
            this.name = name;
            this.address = address;
            this.phone = phoneNumber;
            this.avaledBy = avaledBy;
            this.endorses = endorses;
    }

/*     set dni(dni : string){
       if(!/([aA-zZ]|[0-9])[0-9]{7}([a-z]|[A-Z]|[0-9])/.test(dni)){
           throw new Error('Insert a valid Spanish DNI');
       }
        this._dni = dni;
   }
   get dni(){
       return this._dni;
   } */

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
       this._phoneNumber = phone;
   }

   get phone(){
       return this._phoneNumber;
   }
   toJSON() {
       return {
        dni : this.dni,
        name: this.name,
        address : this.address,
        phoneNumber : this._phoneNumber,
       }
   }
}