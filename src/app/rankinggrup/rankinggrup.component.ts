import { Component, OnInit } from '@angular/core';
import { ClanService } from '../services/clan.service';
import { Clan } from '../models/Clan';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rankinggrup',
  templateUrl: './rankinggrup.component.html',
  styleUrls: ['./rankinggrup.component.scss']
  
})
export class RankinggrupComponent implements OnInit {

  private _rankinggrupArr:Clan[]=null;

  constructor(private _Clanservice:ClanService) { }

  ngOnInit() {
    this._Clanservice.getClanesFromAPI().subscribe(listaclanes=>{
      this._rankinggrupArr = listaclanes;
    });
}
}