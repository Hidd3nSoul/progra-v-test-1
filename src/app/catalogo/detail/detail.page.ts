import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Partido } from '../catalogo.model';
import { CatalogoService } from '../catalogo.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  partido: Partido;
  public finalizado = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private catalogoServicio: CatalogoService,
    private router: Router,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paraMap => {
        if (!paraMap.has('catalogoId')) {
          //si no existe el parametro redireccione
          return;
        }
        const partidoId = paraMap.get('catalogoId');
        this.partido = this.catalogoServicio.getPartido(partidoId);
      }
    );
  }
  delete(){
    this.alertCtrl.create({
      header: 'Borrar',
      message: '¿Desea borrar el partido?',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.catalogoServicio.deletePartido(this.partido.id);
            this.router.navigate(['/catalogo']);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    }).then(
      alertElement => {
        alertElement.present();
      }
    );
  }

}
