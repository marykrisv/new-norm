import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenucategoryRoutingModule } from './menucategory-routing.module';
import { AddmenucategoryComponent } from './addmenucategory/addmenucategory.component';
import { ViewmenucategoryComponent } from './viewmenucategory/viewmenucategory.component';
import { MenucategorydetailComponent } from './menucategorydetail/menucategorydetail.component';


@NgModule({
  declarations: [AddmenucategoryComponent, ViewmenucategoryComponent, MenucategorydetailComponent],
  imports: [
    CommonModule,
    MenucategoryRoutingModule,
    ReactiveFormsModule
  ]
})
export class MenucategoryModule { }
