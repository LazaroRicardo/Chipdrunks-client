export class Usuario {

    constructor(private _nid: number, private _nombre: string,
         private _email: string,private _codigopostal: number, private _password: string, private _nbares: number) {

    }

    get nid() { return this._nid; }
    get nombre() { return this._nombre; }
    get email() { return this._email; }
    get codigopostal() { return this._codigopostal; }
    get password() { return this._password; }
    get nbares() { return this._nbares; }

    set nid(nid) { this._nid = nid; }
    set nombre(nombre) { this._nombre = nombre; }
    set email(email) { this._email = email; }
    set codigopostal(codigopostal) { this._codigopostal = codigopostal; }
    set password(password) { this._password = password; }
    set nbares(nbares) { this._nbares = nbares; }


}