import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocktypeRoutingModule } from './stocktype-routing.module';
import { AddstocktypeComponent } from './addstocktype/addstocktype.component';
import { ViewstocktypeComponent } from './viewstocktype/viewstocktype.component';
import { StocktypedetailComponent } from './stocktypedetail/stocktypedetail.component';


@NgModule({
  declarations: [AddstocktypeComponent, ViewstocktypeComponent, StocktypedetailComponent],
  imports: [
    CommonModule,
    StocktypeRoutingModule,
    ReactiveFormsModule
  ]
})
export class StocktypeModule { }
