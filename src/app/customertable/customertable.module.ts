import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomertableRoutingModule } from './customertable-routing.module';
import { AddcustomertableComponent } from './addcustomertable/addcustomertable.component';
import { ViewcustomertableComponent } from './viewcustomertable/viewcustomertable.component';
import { CustomertabledetailComponent } from './customertabledetail/customertabledetail.component';


@NgModule({
  declarations: [AddcustomertableComponent, ViewcustomertableComponent, CustomertabledetailComponent],
  imports: [
    CommonModule,
    CustomertableRoutingModule
  ]
})
export class CustomertableModule { }
