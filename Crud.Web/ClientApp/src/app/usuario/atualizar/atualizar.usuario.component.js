"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usuario_1 = require("../../model/usuario");
var AtualizarUsuarioComponent = /** @class */ (function () {
    function AtualizarUsuarioComponent(usuarioService) {
        this.usuarioService = usuarioService;
    }
    AtualizarUsuarioComponent.prototype.ngOnInit = function () {
        this.usuario = new usuario_1.Usuario();
    };
    AtualizarUsuarioComponent.prototype.atualizar = function () {
        console.log("Atualizando");
        /*
        this.usuarioService.alterar(this.usuario).subscribe(
          data => {
    
          },
          err => {
    
          }
        );
     */
    };
    return AtualizarUsuarioComponent;
}());
exports.AtualizarUsuarioComponent = AtualizarUsuarioComponent;
//# sourceMappingURL=atualizar.usuario.component.js.map