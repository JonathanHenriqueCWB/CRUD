"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usuario_1 = require("../../model/usuario");
var RemoverUsuarioComponent = /** @class */ (function () {
    function RemoverUsuarioComponent(usuarioService) {
        this.usuarioService = usuarioService;
    }
    RemoverUsuarioComponent.prototype.ngOnInit = function () {
        this.usuario = new usuario_1.Usuario();
    };
    RemoverUsuarioComponent.prototype.remover = function () {
        /*
        this.usuarioService.remover(this.usuario).subscribe(
          data => {
    
          },
          err => {
    
          }
        );
        */
    };
    return RemoverUsuarioComponent;
}());
exports.RemoverUsuarioComponent = RemoverUsuarioComponent;
//# sourceMappingURL=remover.usuario.component.js.map