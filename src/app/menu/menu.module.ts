import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { MenudetailComponent } from './menudetail/menudetail.component';
import { ViewmenuComponent } from './viewmenu/viewmenu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AddmenuComponent, 
    MenudetailComponent, 
    ViewmenuComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class MenuModule { }
