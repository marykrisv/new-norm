import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { AddstockComponent } from './addstock/addstock.component';
import { ViewstockComponent } from './viewstock/viewstock.component';
import { StockdetailComponent } from './stockdetail/stockdetail.component';


@NgModule({
  declarations: [AddstockComponent, ViewstockComponent, StockdetailComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
