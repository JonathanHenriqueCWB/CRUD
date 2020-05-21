using Crud.Domain.Model;
using Microsoft.EntityFrameworkCore;

namespace Crud.Repository.Data
{
    public class Context : DbContext
    {        
        public Context(DbContextOptions<Context> options) : base(options)
        {
        }

        public DbSet<Usuario> MyProperty { get; set; }

    }
}
