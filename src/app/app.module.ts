import { CustomertableModule } from './customertable/customertable.module';
import { StocktypeModule } from './stocktype/stocktype.module';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { UsersModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HttpClientModule }    from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { MenuviewComponent } from './menuview/menuview.component';
import { HeaderComponent } from './header/header.component';
import { MenucategoryModule } from './menucategory/menucategory.module';
import { UomModule } from './uom/uom.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuviewComponent,
    SideMenuComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    UsersModule,
    LoginModule,
    ReactiveFormsModule,
    MenucategoryModule,
    UomModule,
    StocktypeModule,
    CustomertableModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
