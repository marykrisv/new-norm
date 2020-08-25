import { CustomernameComponent } from './customername/customername.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelecttableComponent } from './selecttable/selecttable.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerloginComponent,
    children: [
      {
        path: '',
        component: SelecttableComponent
      },
      {
        path: 'customer-name/:tableId',
        component: CustomernameComponent
      }
    ]
  },
  {
    path: 'admin',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
