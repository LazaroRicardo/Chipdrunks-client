import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/Usuario'; 
import { UsuarioService} from '../services/Usuario.service';

@Component({
  selector: 'app-editperf',
  templateUrl: './editperf.component.html',
  styleUrls: ['./editperf.component.scss']
})
export class EditperfComponent implements OnInit {
  modifUsuario:Usuario = new Usuario(0,'','',0,'',0);
  constructor(private _usuarioService:UsuarioService) { }

  ngOnInit() {
  }
  editUsuario()
  {
    console.log(this.modifUsuario);
    
  }
}