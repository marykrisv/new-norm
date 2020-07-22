import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddinventorycategoryComponent } from './addinventorycategory/addinventorycategory.component';
import { InventorycategorydetailComponent } from './inventorycategorydetail/inventorycategorydetail.component';
import { ViewinventorycategoryComponent } from './viewinventorycategory/viewinventorycategory.component';


const routes: Routes = [
  {
    path: 'add',
    component: AddinventorycategoryComponent
  },
  {
    path: 'detail/:dosId',
    component: InventorycategorydetailComponent
  },
  {
    path: '',
    component: ViewinventorycategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventorycategoryRoutingModule { }
