import { AuthGuard } from './auth/auth.guard';
import { MenuviewComponent } from './menuview/menuview.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'menu',
    component: MenuviewComponent,
    children: [
      {
        path: 'users',
        loadChildren: () => import('./user/user.module').then(m => m.UsersModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '\login',
    pathMatch: 'full'
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
