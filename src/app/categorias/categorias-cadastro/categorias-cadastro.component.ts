import { Categoria } from './../model';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MessageService } from 'primeng/api';
import { CategoriasService } from '../categorias.service';
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-categorias-cadastro',
  templateUrl: './categorias-cadastro.component.html',
  styleUrls: ['./categorias-cadastro.component.css']
})
export class CategoriasCadastroComponent implements OnInit {

  categoria = new Categoria();

  constructor(
    private service: CategoriasService,
    private messageService: MessageService,
    private rota: ActivatedRoute,
    // private rotaP : Route
  ) { }

  ngOnInit() {
    const codigoCategoria = this.rota.snapshot.params['id'];
    if (codigoCategoria) {
      this.carregarCategoria(codigoCategoria);
    }
  }

  inserir(form: FormControl) {
    this.service.adicionar(this.categoria)
      .then(() => {
        this.messageService.add({ severity: 'success', summary: 'Cadastro', detail: 'Categoria ' + this.categoria.nome + ' cadastrada' });
        form.reset();
      });
  }

  carregarCategoria(id: number) {
    this.service.buscarPorCodigo(id).then((data) => {
      this.categoria = data;
    });
  }

  alterar(form: FormControl) {
    this.service.alterar(this.categoria)
      .then(() => {
        this.messageService.add({ severity: 'success', summary: 'Edição', detail: 'Categoria ' + this.categoria.nome + ' alterada' });
        form.reset();
      });
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.alterar(form);
    } else {
      this.inserir(form);
    }
    //this.rotaP.navigate(['/categorias']);
  }

  get editando() {
    return Boolean(this.categoria.id);
  }

}
