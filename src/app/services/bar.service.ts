import { Injectable } from '@angular/core';
import { getBootstrapListener } from '@angular/router/src/router_module';
import { Bar } from '../models/Bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarService {

  API_URL='http://localhost:8080/Chipdrunks/api/bares/';

  private _bares = [
    new Bar(1, "Bar Pepe", "fwefedf", 1343, 243431, 1432432432, "dfsdfdsfdsf", "nudsfdsfdsfdfdsll"),
    new Bar(2, "asumbawe", "fgfgfgffg", 133434, 343431, 34341, "fgfgfgf", "ndgfdgfgull"),
  ];

  constructor(private _http:HttpClient) { }

  getBar(bid:number):Observable<Bar> {
    return this._http.get<Bar>(this.API_URL+bid);
  }

}