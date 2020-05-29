using Crud.Domain.Contratos;
using Crud.Repository.Data;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Crud.Repository.Repository
{
    public class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : class
    {
        protected readonly Context Context;
        public BaseRepository(Context context)
        {
            Context = context;
        }

        public void Adicionar(TEntity entity)
        {
            Context.Set<TEntity>().Add(entity);
            Context.SaveChanges();

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
            return Context.Set<TEntity>().ToList();
        }
    }
}
