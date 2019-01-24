import { Component, OnInit } from '@angular/core';
import { Clan } from '../models/Clan';
import { User } from '../models/User';
import { Usuario } from '../models/Usuario';
import { ClanService } from '../services/clan.service';



@Component({
  selector: 'app-tusclanes',
  templateUrl: './tusclanes.component.html',
  styleUrls: ['./tusclanes.component.scss']
})
export class TusclanesComponent implements OnInit {
  private _tusClanes:Clan[] = null;

  constructor(private _tusclanesservice:ClanService) { }

  ngOnInit() {  
    this._tusclanesservice.getClanesFromAPI().subscribe(listaclanes => {
      this._tusClanes = listaclanes;
    
  });
}
}
