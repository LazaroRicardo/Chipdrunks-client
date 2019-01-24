import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/Usuario.service';
import { Usuario } from '../models/Usuario';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rankingind',
  templateUrl: './rankingind.component.html',
  styleUrls: ['./rankingind.component.scss']
})
export class RankingindComponent implements OnInit {

  private _rankingindArr:Usuario[]=null;

  constructor(private _Usuarioservice: UsuarioService) { }

  ngOnInit() {
    this._Usuarioservice.getUsuarioFromAPI().subscribe(listaUsuarios=>{
      this._rankingindArr = listaUsuarios;
    });


  }
}