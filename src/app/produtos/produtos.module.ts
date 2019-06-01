import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosCadastroComponent } from './produtos-cadastro/produtos-cadastro.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ProdutosService } from './produtos.service';
import {PickListModule} from 'primeng/picklist';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  declarations: [ProdutosCadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    InputTextModule,
    PickListModule,
    ButtonModule,
    CurrencyMaskModule
  ],
  exports: [
    ProdutosCadastroComponent
  ],
  providers: [
    ProdutosService
  ]
})
export class ProdutosModule { }
