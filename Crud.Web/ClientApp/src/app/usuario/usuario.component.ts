import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuario-component',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuario: Usuario;

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  public listar() {
    this.usuarioService.listar().subscribe(
      data => {
        console.log("Json retornado com sucesso ", data);
      },
      err => {
        console.log("Erro no retorno do json");
      }
    );
  }

  public cadastrar() {
    this.usuarioService.cadastrar(this.usuario).subscribe(
      data => {
        console.log("Json retornado com sucesso ", data);
      },
      err => {
        console.log("Erro no retorno do json");
      }
    );
  }

  public alterar() {
    this.usuarioService.alterar(this.usuario).subscribe(
      data => {
        console.log("Json retornado com sucesso ", data);
      },
      err => {
        console.log("Erro no retorno do json");
      }
    );
  }

  public remover() {
    this.usuarioService.remover(this.usuario).subscribe(
      data => {
        console.log("Json retornado com sucesso ", data);
      },
      err => {
        console.log("Erro no retorno do json");
      }
    );
  }
}
