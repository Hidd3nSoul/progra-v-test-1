import { Injectable } from '@angular/core';
import { Partido } from './catalogo.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  private partidos: Partido[] = [
    {
      id: 'Partido-1',
      nombre: 'Esp vs Ing',
      evento1: 'Pitazo inicial',
      evento2: 'Gol España',
      evento3: 'Amarilla a Inglaterra',
      evento4: 'Gol España',
      img: 'https://img.blogs.es/anexom/wp-content/uploads/2018/08/mitos-futbol-racha-1024x683.jpg'
    },
    {
      id: 'Partido-2',
      nombre: 'CR vs Col',
      evento1: 'Pitazo inicial',
      evento2: 'Gol Colombia',
      evento3: 'Amarilla Colombia',
      evento4: 'Gol Costa Rica',
      img: 'https://img.blogs.es/anexom/wp-content/uploads/2018/08/mitos-futbol-racha-1024x683.jpg'
    }
  ];

  constructor() { }
  getAll(){
    return [...this.partidos];
  }
  getPartido(catalogoId: string){
    return {...this.partidos.find(
      partido => catalogoId === partido.id
    )};
  }
  deletePartido(catalogoId: string){
    this.partidos = this.partidos.filter(
      partido => partido.id !== catalogoId
    );
  }
}
