using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;

namespace FitnationAPI.CQS.Queries.QueryEntities
{
    public class GetTimeIdByTimeQuery : IRequest<Guid>
    {
        public string Time { get; }

        public GetTimeIdByTimeQuery(string time)
        {
            Time = time;
        }
    }
}
