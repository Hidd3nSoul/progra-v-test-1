import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'catalogo',
    pathMatch: 'full'
  },
  {
    path: 'catalogo',
    children: [
      {
        path: '',
        loadChildren: () => import('./catalogo/catalogo.module').then( m => m.CatalogoPageModule)

      },
      {
        path: ':catalogoId',
        loadChildren: () => import('./catalogo/detail/detail.module').then(
          m => m.DetailPageModule)
      },
      /*{
        path: 'add',
        loadChildren: () => import('./catalogo/add/add.module').then(
          m => m.DetailPageModule)
      }*/
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
