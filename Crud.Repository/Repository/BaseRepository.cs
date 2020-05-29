using Crud.Domain.Contratos;
using Crud.Repository.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Crud.Repository.Repository
{
    public class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : class
    {
        protected readonly Context _context;
        public BaseRepository(Context context)
        {
            _context = context;
        }

        public void Adicionar(TEntity entity)
        {
            _context.Set<TEntity>().Add(entity);
            _context.SaveChanges();

        }

        public void Atualizar(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public void Deletar(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<TEntity> Listar()
        {
            throw new NotImplementedException();
        }
    }
}
