import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IrrVerbListComponent} from './irr-verb-list/irr-verb-list.component';


const routes: Routes = [{
  path: '',
  component: IrrVerbListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IrregularVerbRoutingModule { }
