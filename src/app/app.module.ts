import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component'

@NgModule({
  declarations: [
    AppComponent, 
    ProdutosListComponent, HomeComponent, ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProdutosListComponent],
})
export class AppModule { }
