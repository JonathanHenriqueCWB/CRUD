import { Component,OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-remover-usuario',
  templateUrl: './remover.usuario.component.html',
  styleUrls: ['./remover.usuario.component.css']
})
export class RemoverUsuarioComponent implements OnInit {

  public usuario;

  ngOnInit(): void {
    this.usuario = new Usuario();
  }
  constructor(public usuarioService: UsuarioService) {
  }

  public remover() {
    console.log("Removendo");
    /*
    this.usuarioService.remover(this.usuario).subscribe(
      data => {

      },
      err => {

      }
    );
    */
  }
}
