import { Injectable, Inject, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements OnInit {

  public usuario: Usuario[];
  private url: string;

  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  ngOnInit(): void {
    this.usuario = [];
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.url = baseUrl;
  }

  public listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url + 'api/usuario');
  }

  public cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url + 'api/usuario/', JSON.stringify(usuario), { headers: this.headers });
  }

  public alterar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url + 'api/usuario/alterar', JSON.stringify(this.usuario), { headers: this.headers });
  }

  public remover(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url + 'api/usuario/remover', JSON.stringify(usuario), { headers: this.headers });
  }
}
