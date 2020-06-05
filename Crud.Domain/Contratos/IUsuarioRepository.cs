using Crud.Domain.Model;

namespace Crud.Domain.Contratos
{
    public interface IUsuarioRepository : IBaseRepository<Usuario>
    {
        Usuario VerificarUsuario(string email, string senha);
    }
}
