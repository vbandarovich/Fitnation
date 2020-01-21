using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;

namespace FitnationAPI.CQS.Queries.QueryEntities
{
    public class GetTimeByIdQuery : IRequest<string>
    {
        public Guid TimeId { get; }

        public GetTimeByIdQuery(Guid timeId)
        {
            TimeId = timeId;
        }
    }
}
