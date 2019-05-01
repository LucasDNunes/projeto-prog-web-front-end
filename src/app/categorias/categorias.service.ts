import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  categoriasUrl = 'http://localhost:8080/categorias';

  constructor(private http: HttpClient) {}

  pesquisar(): Promise<any> {
    return this.http.get<any>(this.categoriasUrl).toPromise();
  }

  excluir(id: number): Promise<void> {
    return this.http
      .delete(this.categoriasUrl + '/' + id)
      .toPromise()
      .then(() => null);
  }

  listarPorNome(nome: string): Promise<any> {
    return this.http.get<any>(this.categoriasUrl + '?nome=' + nome).toPromise();
  }
}
