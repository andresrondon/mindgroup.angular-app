import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoremIpsumComponent } from './lorem-ipsum/lorem-ipsum.component';
import { LoginComponent } from './login/login.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    LoremIpsumComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
