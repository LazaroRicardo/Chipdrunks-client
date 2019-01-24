import { Component, OnInit } from '@angular/core';
import { Bar } from '../models/Bar';
import { BarService } from '../services/bar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-bar',
  templateUrl: './detalle-bar.component.html',
  styleUrls: ['./detalle-bar.component.scss']
})
export class DetalleBarComponent implements OnInit {

  private _barActual = new Bar(1, "", "", 0, 0, 0, "", "");

  constructor(private route: ActivatedRoute, private _barService: BarService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('params', params);
      let bid = params['bid'];
      this._barService.getBar(bid).subscribe(barDeLaAPI => {
        this._barActual = barDeLaAPI;
      });
    });


  }

}
