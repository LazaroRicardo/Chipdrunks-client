import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  API_URL = 'http://localhost:8080/Chipdrunks/api/usuarios';

  private _usuarios = [
    new Usuario(1, "JOse", "gfhdf@df", 435345, "rfggrw", 34234),
    new Usuario(2, "Pepe", "gfhdf@df", 435345, "rfggrw", 34234)
  ]

  constructor(private _http: HttpClient) { }

  getUsuario(): Usuario[] {
    return this._usuarios;
  }
  getUnUsuario(nid: number) {
    return this._usuarios;
  }

  getUsuarioFromAPI(): Observable<Usuario[]> {
    return this._http.get<Usuario[]>(this.API_URL);
  }

  addUsuario(nuevoU: Usuario): boolean {
    nuevoU.nid = (new Date()).getTime();
    this._usuarios.push(nuevoU);
    return true;
  }

  addUsuarioAPI(nuevoUsu: Usuario): Observable<Usuario> {
    const options = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const usuarioAEnviar = {
      nid: 0,
      nombre: nuevoUsu.nombre,
      email: nuevoUsu.email,
      codigopostal: nuevoUsu.codigopostal,
      password: nuevoUsu.password,
      nbares: nuevoUsu.nbares
    }

    return this._http.post<Usuario>(this.API_URL, usuarioAEnviar, options);
  }



}
