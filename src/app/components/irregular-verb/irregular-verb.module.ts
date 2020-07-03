import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IrregularVerbRoutingModule } from './irregular-verb-routing.module';
import { IrrVerbListComponent } from './irr-verb-list/irr-verb-list.component';


@NgModule({
  declarations: [IrrVerbListComponent],
  imports: [
    CommonModule,
    IrregularVerbRoutingModule
  ]
})
export class IrregularVerbModule { }
