import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { SelecttableComponent } from './selecttable/selecttable.component';
import { CustomernameComponent } from './customername/customername.component';

@NgModule({
  declarations: [LoginComponent, CustomerloginComponent, SelecttableComponent, CustomernameComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
