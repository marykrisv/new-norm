import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddmenucategoryComponent } from './addmenucategory/addmenucategory.component';
import { MenucategorydetailComponent } from './menucategorydetail/menucategorydetail.component';
import { ViewmenucategoryComponent } from './viewmenucategory/viewmenucategory.component';


const routes: Routes = [
  {
    path: 'add',
    component: AddmenucategoryComponent
  },
  {
    path: 'detail/:dosId',
    component: MenucategorydetailComponent
  },
  {
    path: '',
    component: ViewmenucategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenucategoryRoutingModule { }
