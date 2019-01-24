import { Component, OnInit } from '@angular/core';
import { ClanService } from '../services/clan.service';
import { Clan } from '../models/Clan';

@Component({
  selector: 'app-crearclan',
  templateUrl: './crearclan.component.html',
  styleUrls: ['./crearclan.component.scss']
})
export class CrearclanComponent implements OnInit {

  nuevoClan:Clan =new Clan(0,'',0,[]);
  nombres:string="";

  constructor(private _clanService:ClanService) { }

  ngOnInit() {
  }

  addClan(){
    console.log(this.nuevoClan);
    //this._pedidoService.addPedido(this.nuevoPedido);

    this.nuevoClan.usuarios=[
      
    ];

    this._clanService.addClanAPI(this.nuevoClan).subscribe(clanRec => {
      this.nuevoClan=clanRec;
    });
  }

}
