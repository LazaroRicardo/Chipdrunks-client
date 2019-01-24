import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  imagePath ="assets/images/Ardilla-Cerveza.png";
  user = { usuario:'', pass:''};

  constructor(private _auth: AuthService, private _router:Router) { }

  ngOnInit() {
  }

  acceder() {
    console.log(this.user);
    this._router.navigate(['/index']);
    this._auth.login(this.user.usuario, this.user.pass).subscribe(respuesta => {
      console.log(respuesta);
      localStorage.setItem('token',respuesta.message);
      
    });
  }

}
