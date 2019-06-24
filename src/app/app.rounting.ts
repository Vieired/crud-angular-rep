import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';


const APP_ROUTING: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'produtos', component: ProdutosListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTING);