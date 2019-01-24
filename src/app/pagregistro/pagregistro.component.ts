import { Component, OnInit } from '@angular/core';
import { UsuarioService} from '../services/Usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-pagregistro',
  templateUrl: './pagregistro.component.html',
  styleUrls: ['./pagregistro.component.scss']
})
export class PagregistroComponent implements OnInit {
  imagePath ="assets/images/Ardilla-Cerveza.png";

  nuevoUsuario:Usuario = new Usuario(0,'','',0,'',0);
  constructor(private _usuarioService:UsuarioService, private _router:Router) { }

  ngOnInit() {
  }
  addUsuario(){
    console.log(this.nuevoUsuario);
    this._usuarioService.addUsuarioAPI(this.nuevoUsuario).subscribe(usuarioRec =>
      {this.nuevoUsuario=usuarioRec}
      )
      this._router.navigate(['/login']);
  }

  
}
