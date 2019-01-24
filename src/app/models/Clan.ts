import { Usuario } from './Usuario';

export class Clan {

    constructor(private _cid: number, private _nombre: string, private _nbares: number, private _usuarios: Usuario[]) {

    }

    get cid() { return this._cid; }
    get nombre() { return this._nombre; }
    get nbares() { return this._nbares; }
    get usuarios() { return this.usuarios; }
    
    set cid(cid) { this._cid = cid; }
    set nombre(nombre) { this._nombre = nombre; }
    set nbares(nbares) { this._nbares = nbares; }
    set usuarios(usuarios) { this.usuarios = usuarios; }
    


}