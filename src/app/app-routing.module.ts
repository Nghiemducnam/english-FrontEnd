import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: 'login',
  loadChildren: () => import('./auths/auth-routing.module').then(m =>m.AuthRoutingModule)

},
  {
    path: 'home',
    loadChildren: () => import('./home/home-routing.module').then(m =>m.HomeRoutingModule)

  },
  {
    path: 'layout',
    loadChildren: () => import('./layout/layout-routing.module').then(m =>m.LayoutRoutingModule)

  },
  {
    path: 'verb',
    loadChildren: () => import('./components/irregular-verb/irregular-verb-routing.module').then(m =>m.IrregularVerbRoutingModule)

  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
