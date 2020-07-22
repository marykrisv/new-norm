import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddstocktypeComponent } from './addstocktype/addstocktype.component';
import { StocktypedetailComponent } from './stocktypedetail/stocktypedetail.component';
import { ViewstocktypeComponent } from './viewstocktype/viewstocktype.component';


const routes: Routes = [
  {
    path: 'add',
    component: AddstocktypeComponent
  },
  {
    path: 'detail/:ssId',
    component: StocktypedetailComponent
  },
  {
    path: '',
    component: ViewstocktypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StocktypeRoutingModule { }
