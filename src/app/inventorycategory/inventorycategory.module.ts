import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventorycategoryRoutingModule } from './inventorycategory-routing.module';
import { AddinventorycategoryComponent } from './addinventorycategory/addinventorycategory.component';
import { ViewinventorycategoryComponent } from './viewinventorycategory/viewinventorycategory.component';
import { InventorycategorydetailComponent } from './inventorycategorydetail/inventorycategorydetail.component';


@NgModule({
  declarations: [AddinventorycategoryComponent, ViewinventorycategoryComponent, InventorycategorydetailComponent],
  imports: [
    CommonModule,
    InventorycategoryRoutingModule
  ]
})
export class InventorycategoryModule { }
