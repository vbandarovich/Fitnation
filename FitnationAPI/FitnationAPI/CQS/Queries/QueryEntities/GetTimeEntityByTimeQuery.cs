using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FitnationAPI.Data;
using MediatR;

namespace FitnationAPI.CQS.Queries.QueryEntities
{
    public class GetTimeEntityByTimeQuery : IRequest<TimeRange>
    {
        public string Time { get; }

        public GetTimeEntityByTimeQuery(string time)
        {
            Time = time;
        }
    }
}
