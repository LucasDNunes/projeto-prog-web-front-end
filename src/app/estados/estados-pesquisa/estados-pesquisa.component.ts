import { Component, OnInit } from '@angular/core';
import { EstadosService } from '../estados.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-estados-pesquisa',
  templateUrl: './estados-pesquisa.component.html',
  styleUrls: ['./estados-pesquisa.component.css']
})
export class EstadosPesquisaComponent implements OnInit {

  constructor(
    private service: EstadosService,
    private msgService: MessageService,
  ) { }

  ngOnInit() {
  }

}
