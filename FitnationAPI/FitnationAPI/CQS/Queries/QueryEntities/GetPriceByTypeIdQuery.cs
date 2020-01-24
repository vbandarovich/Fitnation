using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;

namespace FitnationAPI.CQS.Queries.QueryEntities
{
    public class GetPriceByTypeIdQuery : IRequest<decimal>
    {
        public Guid Type { get; }

        public GetPriceByTypeIdQuery(Guid type)
        {
            Type = type;
        }
    }
}
