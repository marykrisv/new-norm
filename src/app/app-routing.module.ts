
import { MenuviewComponent } from './menuview/menuview.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {
    path: 'menu',
    component: MenuviewComponent,
    children: [
      {
        path: 'users',
        loadChildren: () => import('./user/user.module').then(m => m.UsersModule)
      },
      {
        path: 'menus',
        loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)
      },
      {
        path: 'menu-categories',
        loadChildren: () => import('./menucategory/menucategory.module').then(m => m.MenucategoryModule)
      },
      {
        path: 'stock-types',
        loadChildren: () => import('./stocktype/stocktype.module').then(m => m.StocktypeModule)
      },
      {
        path: 'uoms',
        loadChildren: () => import('./uom/uom.module').then(m => m.UomModule)
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: '**',
    component: NotfoundComponent
  }
  // {
  //   path: '**',
  //   component: LoginComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
