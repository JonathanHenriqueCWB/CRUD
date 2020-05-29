import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastrar.usuario.component.html'
})
export class CadastroUsuarioComponent implements OnInit {

  public usuario: Usuario;
    
  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
    this.usuario = new Usuario();
  } 

  public cadastrar() {
    console.log("Nome: ", this.usuario.nome, "Email: ", this.usuario.email, "Senha: ", this.usuario.senha);
    /*
    this.usuarioService.cadastrar(this.usuario).subscribe(
      data => {
      },
      err => {
      }
    );
    */
  }
}
