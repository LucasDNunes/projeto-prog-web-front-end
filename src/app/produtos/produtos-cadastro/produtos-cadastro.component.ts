import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto.model';
import { Categoria } from 'src/app/categorias/model';
import { ProdutosService } from '../produtos.service';
import { CategoriasService } from 'src/app/categorias/categorias.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-produtos-cadastro',
  templateUrl: './produtos-cadastro.component.html',
  styleUrls: ['./produtos-cadastro.component.css']
})
export class ProdutosCadastroComponent implements OnInit {

  produto = new Produto();
  categorias: Categoria[];

  constructor(
    private service: ProdutosService,
    private categoriaService: CategoriasService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pesquisarCategorias();
  }

  pesquisarCategorias() {
    this.categoriaService.pesquisar('')
      .then((dados) => {
        this.categorias = dados['content'];
      });
  }

  salvar(form: FormControl) {
    this.service.adicionar(this.produto)
      .then(() => {
        this.messageService.add({ severity: 'success', summary: 'Cadastro', detail: 'Produto ' + this.produto.nome + ' cadastrado' });
        form.reset();
      });
  }

}
