import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyyComponent } from './bodyy/bodyy.component';
import { FormmComponent } from './formm/formm.component';
import { FooterrComponent } from './footerr/footerr.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyyComponent,
    FormmComponent,
    FooterrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
