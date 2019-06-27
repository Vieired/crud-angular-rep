import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from './app.rounting';
import * as angular from '@angular/material';

import { HomeComponent } from './home/home.component';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';
import { ContatoComponent } from './contato/contato.component'
import { MenuTopoComponent } from './menu-topo/menu-topo.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent, ProdutosListComponent, HomeComponent, 
    ContatoComponent, MenuTopoComponent, MenuLateralComponent, 
    angular.MatToolbar
  ],
  imports: [
    angular.MatToolbar,
    BrowserModule,
    AppRoutingModule,
    routing,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    angular.MatToolbar,
    ProdutosListComponent, MenuLateralComponent
  ],
})
export class AppModule { }
