"use strict";
class rentClient {
    constructor({ id, dni, name, address, phoneNumber }) {
        this._dni = "";
        this._name = "";
        this._phoneNumber = "";
        this.avaledBy = "";
        this.endorses = [];
        this.id = id;
        this.dni = dni;
        this.name = name;
        this.address = address;
        this.phone = phoneNumber;
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
        this._phoneNumber = phone;
    }
    get phone() {
        return this._phoneNumber;
    }
}
