import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyyComponent } from './bodyy/bodyy.component';
import { FormmComponent } from './formm/formm.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyyComponent,
    FormmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
