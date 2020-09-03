import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { MenudetailComponent } from './menudetail/menudetail.component';
import { ViewmenuComponent } from './viewmenu/viewmenu.component';


const routes: Routes = [
  {
    path: 'add',
    component: AddmenuComponent
  },
  {
    path: 'detail/:menuId',
    component: MenudetailComponent
  },
  {
    path: '',
    component: ViewmenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
