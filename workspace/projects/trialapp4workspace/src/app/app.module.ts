import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HjemComponent } from './hjem/hjem.component';
import { LoginComponent } from './login/login.component';
import { LogutComponent } from './path1/paht2/logut/logut.component';
import { SignupComponent } from './signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HjemComponent,
    LoginComponent,
    LogutComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
