using Crud.Domain.Contratos;
using Crud.Domain.Model;
using Crud.Repository.Data;

namespace Crud.Repository.Repository
{
    public class UsuarioRepository : BaseRepository<Usuario>, IUsuarioRepository
    {
        public UsuarioRepository(Context context) : base(context)
        {
        }
    }
}
