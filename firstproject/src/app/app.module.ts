import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent1 } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorC } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent1,
    LogoutComponent,
    ErrorC
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
