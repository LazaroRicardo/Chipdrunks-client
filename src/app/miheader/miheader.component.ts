import { Component, OnInit } from '@angular/core';
import { Bar } from '../models/Bar';

@Component({
  selector: 'app-miheader',
  templateUrl: './miheader.component.html',
  styleUrls: ['./miheader.component.scss']
})
export class MiheaderComponent implements OnInit {

  showBares: boolean = true;
  listaBares = [
    new Bar(1,"Bar El Alamo","Calle Madrid 2",916564876,40.4619445,-3.6741318,"Chupitos Gratis de 00:00 a 00:30 los Martes",null),
    new Bar(3, 'Bar el Fresxo', 'Calle del Mar 45', 915684752, 40.4634891, -3.6752189, 'Con el Fresco ven al Fresxo y tienes un 3x2 en Birra',null),
    new Bar(4, 'Cerveceria Blanco y Azul', 'Calle Blanco Y Negro', 916582563, 40.4637448, -3.6764269, 'Si vienes de blanco y azul, únicamente, chupito gratis',null),
    new Bar(5, 'Taberna la Cocodrila', 'Calle de los Cocodrilos Revoltosos 23 ', 916587455, 40.462959, -3.6780409, 'Todos los miercoles cerveza artesana nueva',null),
    new Bar(6, 'Bar Pop Copas y tapas', 'Calle de la Tapa gratis 23', 916754787, 40.461812, -3.6767821, 'Ven 5 dias en tres semanas y te regalamos la tapa del mes con tu birra',null)
  ];

  constructor() { }

  ngOnInit() {
  }

  filterBarsByName(valor: string) {
    console.log('filterBarsByName:', valor);
    if(valor) {
      return this.listaBares.filter(unBar => { return unBar.nombre.toLowerCase().indexOf(valor.toLocaleLowerCase())>=0 })
    }else {
      return null;
    }
  }

}
