using System;
using System.Collections.Generic;

namespace Crud.Domain.Contratos
{
    interface IBaseRepository<TEntity> : IDisposable  where TEntity: class
    {        
        void Adicionar(TEntity entity);
        IEnumerable<TEntity> Listar();
        void Deletar(TEntity entity);
        void Atualizar(TEntity entity);
    }
}
