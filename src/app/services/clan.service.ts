import { Injectable } from "@angular/core";
import { Clan } from "../models/Clan";
import { Usuario } from "../models/Usuario";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
   providedIn: 'root'
})
export class ClanService {

   API_URL = 'http://localhost:8080/Chipdrunks/api/clanes';

   private clanes = [
       new Clan(1, 'Blurp', 78, [
           new Usuario(1, 'Chema', 'c@c.es', 28054, 'mecagoento', 89),
           new Usuario(2, 'Jorge', 'j@j.es', 28983, 'tuputamadre', 43)
       ]),
       new Clan(2, 'Felipe', 23, [
           new Usuario(1, 'Josemi', 'c@c.es', 28054, 'mecagoento', 89),
           new Usuario(2, 'Andres', 'j@j.es', 28983, 'tuputamadre', 43)
       ])
   ];

   constructor(private _http: HttpClient) { }

   getClanes(): Clan[] {
       return this.clanes;
   }

   gettusClanes(uid: number) {
       return this.clanes;
   }

   getClanesFromAPI(): Observable<Clan[]> {
       return this._http.get<Clan[]>(this.API_URL);
   }

   addClan(nuevoC: Clan): boolean {
       nuevoC.cid = (new Date()).getTime();
       this.clanes.push(nuevoC);
       return true;
   }

   addClanAPI(nuevoClan: Clan): Observable<Clan> {
       const options = {
           headers: {
               "Content-Type": "application/json"
           }
       };

       const clanAEnviar = {
           cid: 0,
           nombre: nuevoClan.nombre,
           usuarios: nuevoClan.usuarios
       }

       return this._http.post<Clan>(this.API_URL, clanAEnviar, options);
   }


}