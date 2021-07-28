import { Component, OnInit } from '@angular/core';
import { Partido } from './catalogo.model';
import { CatalogoService } from './catalogo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
  partidos: Partido[];
  constructor(private catalogoServicio: CatalogoService) { }

  ngOnInit() {
    //console.log('entra al init');
    this.partidos = this.catalogoServicio.getAll();
  }
  ionViewWillEnter(){
    //console.log('Entra al will never enter');
    this.partidos = this.catalogoServicio.getAll();
  }

}
