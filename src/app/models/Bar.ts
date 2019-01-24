export class Bar {

    constructor(private _bid: number, private _nombre: string, private _direccion: string, private _telefono: number, private _latitud: number, private _longitud: number, private _descripcion: string, private _imagen: string) {

    }

    get bid() { return this._bid; }
    get nombre() { return this._nombre; }
    get direccion() { return this._direccion; }
    get telefono() { return this._telefono; }
    get latitud() { return this._latitud; }
    get longitud() { return this._longitud; }
    get descripcion() { return this._descripcion; }
    get imagen() { return this._imagen; }

    set bid(bid) { this._bid = bid; }
    set nombre(nombre) { this._nombre = nombre; }
    set direccion(direccion) { this._direccion = direccion; }
    set telefono(telefono) { this._telefono = telefono; }
    set latitud(latitud) { this._latitud = latitud; }
    set longitud(longitud) { this._longitud = longitud; }
    set descripcion(descripcion) { this._descripcion = descripcion; }
    set imagen(imagen) { this._imagen = imagen; }

}