using Crud.Domain.Contratos;
using Crud.Domain.Model;
using Crud.Repository.Data;
using System.Linq;

namespace Crud.Repository.Repository
{
    public class UsuarioRepository : BaseRepository<Usuario>, IUsuarioRepository
    {
        public UsuarioRepository(Context context) : base(context)
        {
        }

        public Usuario VerificarUsuario(string email, string senha)
        {
            return Context.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);
        }
    }
}
