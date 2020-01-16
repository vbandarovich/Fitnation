using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;

namespace FitnationAPI.CQS.Queries.QueryEntities
{
    public class GetObjectIdByTypeAndNameQuery : IRequest<Guid>
    {
        public Guid TypeId { get; }
        public string Name { get; }

        public GetObjectIdByTypeAndNameQuery(Guid typeId, string name)
        {
            TypeId = typeId;
            Name = name;
        }
    }
}
