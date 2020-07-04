import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IrregularVerbRoutingModule } from './irregular-verb-routing.module';
import { IrrVerbListComponent } from './irr-verb-list/irr-verb-list.component';


@NgModule({
  imports: [
    CommonModule,
    IrregularVerbRoutingModule
  ],
  declarations: [IrrVerbListComponent],

})
export class IrregularVerbModule { }
