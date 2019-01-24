import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { NewUserComponent } from './users/new-user/new-user.component';
import { NewPedidoComponent } from './pedido/new-pedido/new-pedido.component';
import { LoginComponent } from './login/login.component';
import { DetalleBarComponent } from './detalle-bar/detalle-bar.component';
import { PgprincipalComponent } from './pgprincipal/pgprincipal.component';
import { RankinginicioComponent } from './rankinginicio/rankinginicio.component';
import { RankingindComponent } from './rankingind/rankingind.component';
import { RankinggrupComponent } from './rankinggrup/rankinggrup.component';

const routes: Routes = [
  {path:"login", component:LoginComponent, pathMatch:"full"},
  {path:"a", component:AComponent, pathMatch:"full"},
  {path:"a/new", component:NewUserComponent, pathMatch:"full"},
  {path:"b", component:BComponent, pathMatch:"full"},
  {path:"b/new", component:NewPedidoComponent, pathMatch:"full"},
  {path:"bares/:bid", component:DetalleBarComponent, pathMatch:"full"},
  {path:"pgprincipal", component:PgprincipalComponent, pathMatch:"full"},
  {path:"rankinginicio", component:RankinginicioComponent, pathMatch:"full"},
  {path:"rankinginicio/rankingind", component:RankingindComponent, pathMatch:"full"},
  {path:"rankinginicio/rankinggrup", component:RankinggrupComponent, pathMatch:"full"},
  {path:"", redirectTo:"pgprincipal", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
