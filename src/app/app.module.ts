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
import { DetalleBarComponent } from './detalle-bar/detalle-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    MiheaderComponent,
    NewUserComponent,
    NewPedidoComponent,
    LoginComponent,
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
    TusclanesComponent,
    DetalleBarComponent
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
