import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectTableComponent } from './select-table/select-table.component';


const routes: Routes = [
  {
    path: '',
    component: SelectTableComponent
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
