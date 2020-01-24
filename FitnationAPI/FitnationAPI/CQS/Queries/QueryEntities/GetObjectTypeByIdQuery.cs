using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FitnationAPI.Data;
using MediatR;

namespace FitnationAPI.CQS.Queries.QueryEntities
{
    public class GetObjectTypeByIdQuery : IRequest<ObjectType>
    {
        public Guid TypeId { get; }

        public GetObjectTypeByIdQuery(Guid typeId)
        {
            TypeId = typeId;
        }
    }
}
