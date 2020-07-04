import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: 'login',
  loadChildren: () => import('./auths/auth.module').then(m =>m.AuthModule)

},
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m =>m.HomeModule)

  },
  {
    path: 'layout',
    loadChildren: () => import('./layout/layout.module').then(m =>m.LayoutModule)

  },
  {
    path: 'verb',
    loadChildren: () => import('./components/irregular-verb/irregular-verb.module').then(m =>m.IrregularVerbModule)

  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
