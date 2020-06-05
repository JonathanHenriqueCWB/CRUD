import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-atualizar-usuario',
  templateUrl: './atualizar.usuario.component.html',
  styleUrls: ['./atualizar.usuario.component.css']
})
export class AtualizarUsuarioComponent implements OnInit {

  public usuario;

  ngOnInit(): void {
    this.usuario = new Usuario();
  }
  constructor(public usuarioService: UsuarioService) {

  }

  public atualizar() {
    console.log("Atualizando");
    /*
    this.usuarioService.alterar(this.usuario).subscribe(
      data => {

      },
      err => {

      }
    );
 */
  } 
}
