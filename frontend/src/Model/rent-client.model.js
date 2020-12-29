"use strict";
class rentClient {
    constructor({ id, dni, name, address, phone, avaledBy = "", endorses = [] }) {
        this._dni = "";
        this._name = "";
        this._phone = "";
        this.id = id;
        this.dni = dni;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.avaledBy = avaledBy;
        this.endorses = endorses;
    }
    set dni(dni) {
        if (!/([aA-zZ]|[0-9])[0-9]{7}([a-z]|[A-Z]|[0-9])/.test(dni)) {
            throw new Error('Insert a valid Spanish DNI');
        }
        this._dni = dni;
    }
    get dni() {
        return this._dni;
    }
    set name(name) {
        if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name)) {
            throw new Error('Insert a valid Name');
        }
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set phone(phone) {
        if (!/(^[679]{1}[0-9]{8}$)/.test(phone)) {
            throw new Error('Insert a valid Phone');
        }
        this._phone = phone;
    }
    get phone() {
        return this._phone;
    }
}
const co = {
    id: '1',
    dni: 'Y1029209L',
    name: 'Facundo',
    address: 'Calle 123',
    phone: '679337793',
};
const c = new rentClient(co);
console.log(c);
