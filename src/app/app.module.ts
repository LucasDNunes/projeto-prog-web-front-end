import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { CategoriasModule } from './categorias/categorias.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MessageService, ConfirmationService } from 'primeng/api';
import { CategoriasPesquisaComponent } from './categorias/categorias-pesquisa/categorias-pesquisa.component';
import { CategoriasCadastroComponent } from './categorias/categorias-cadastro/categorias-cadastro.component';
import { EstadosPesquisaComponent } from './estados/estados-pesquisa/estados-pesquisa.component';
import { EstadosCadastroComponent } from './estados/estados-cadastro/estados-cadastro.component';
import { EstadosModule } from './estados/estados.module';
import { CidadesPesquisaComponent } from './cidades/cidades-pesquisa/cidades-pesquisa.component';
import { CidadesCadastroComponent } from './cidades/cidades-cadastro/cidades-cadastro.component';
import { CidadesModule } from './cidades/cidades.module';
import {SidebarModule} from 'primeng/sidebar';
import { ProdutosModule } from './produtos/produtos.module';
import { ProdutosCadastroComponent } from './produtos/produtos-cadastro/produtos-cadastro.component';

const rotas: Routes = [
  {path: '', redirectTo: 'categorias', pathMatch: 'full'},
  { path: 'categorias', component: CategoriasPesquisaComponent },
  { path: 'categorias/novo', component: CategoriasCadastroComponent },
  { path: 'categorias/:id', component: CategoriasCadastroComponent },
  { path: 'estados', component: EstadosPesquisaComponent },
  { path: 'estados/novo', component: EstadosCadastroComponent },
  { path: 'estados/:id', component: EstadosCadastroComponent },
  { path: 'cidades', component: CidadesPesquisaComponent },
  { path: 'cidades/novo', component: CidadesCadastroComponent },
  { path: 'cidades/:id', component: CidadesCadastroComponent },
  {path: 'produtos', component:ProdutosCadastroComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CategoriasModule,
    HttpClientModule,
    EstadosModule,
    CidadesModule,
    ButtonModule,
    SidebarModule,
    ProdutosModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
