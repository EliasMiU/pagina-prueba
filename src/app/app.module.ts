import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BarHeaderComponent } from './bar-header/bar-header.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { LoginUserComponent } from './login-user/login-user.component'

@NgModule({
  declarations: [
    AppComponent,
    BarHeaderComponent,
    MenuLateralComponent,
    LoginUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: LoginUserComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
