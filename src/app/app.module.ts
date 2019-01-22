import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { MiheaderComponent } from './miheader/miheader.component';
import { NewUserComponent } from './users/new-user/new-user.component';
import { NewPedidoComponent } from './pedido/new-pedido/new-pedido.component';
import { LoginComponent } from './login/login.component';
import { Barejemplo1Component } from './barejemplo1/barejemplo1.component';
import { Barejemplo2Component } from './barejemplo2/barejemplo2.component';
import { Barejemplo3Component } from './barejemplo3/barejemplo3.component';
import { Barejemplo4Component } from './barejemplo4/barejemplo4.component';
import { BarejemploComponent } from './barejemplo/barejemplo.component';
import { BlurpComponent } from './blurp/blurp.component';
import { ClanComponent } from './clan/clan.component';
import { CodigoqrComponent } from './codigoqr/codigoqr.component';
import { CrearclanComponent } from './crearclan/crearclan.component';
import { EditperfComponent } from './editperf/editperf.component';
import { EventosComponent } from './eventos/eventos.component';
import { IndexComponent } from './index/index.component';
import { PagregistroComponent } from './pagregistro/pagregistro.component';
import { PerfilinicioComponent } from './perfilinicio/perfilinicio.component';
import { PgprincipalComponent } from './pgprincipal/pgprincipal.component';
import { RankinggrupComponent } from './rankinggrup/rankinggrup.component';
import { RankingindComponent } from './rankingind/rankingind.component';
import { RankinginicioComponent } from './rankinginicio/rankinginicio.component';
import { TusclanesComponent } from './tusclanes/tusclanes.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    MiheaderComponent,
    NewUserComponent,
    NewPedidoComponent,
    LoginComponent,
    Barejemplo1Component,
    Barejemplo2Component,
    Barejemplo3Component,
    Barejemplo4Component,
    BarejemploComponent,
    BlurpComponent,
    ClanComponent,
    CodigoqrComponent,
    CrearclanComponent,
    EditperfComponent,
    EventosComponent,
    IndexComponent,
    PagregistroComponent,
    PerfilinicioComponent,
    PgprincipalComponent,
    RankinggrupComponent,
    RankingindComponent,
    RankinginicioComponent,
    TusclanesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
