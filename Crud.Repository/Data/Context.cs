using Crud.Domain.Model;
using Crud.Repository.Config;
using Microsoft.EntityFrameworkCore;

namespace Crud.Repository.Data
{
    public class Context : DbContext
    {        
        public Context(DbContextOptions<Context> options) : base(options)
        {
        }

        public DbSet<Usuario> Usuarios { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UsuarioConfiguration());
            base.OnModelCreating(modelBuilder);
        }
    }
}
