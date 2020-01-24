using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FitnationAPI.CQS.Queries.QueryEntities;
using MediatR;

namespace FitnationAPI.Helpers
{
    public class GetReservTimeHelper
    {
        private readonly IMediator _mediator;

        public GetReservTimeHelper( IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task<List<string>> GetListTimeRange(IEnumerable<string> names, Guid typeId, DateTime dateReserv)
        {
            var listTimeRange = new List<string>();

            foreach (var objName in names)
            {
                var objectId = await _mediator.Send(new GetObjectIdByTypeAndNameQuery(typeId, objName));
                var timeObjReserv = await _mediator.Send(new GetReservedTimeRangeToObjectQuery(dateReserv, objectId));

                foreach (var time in timeObjReserv)
                {
                    listTimeRange.Add(time);
                }
            }

            return listTimeRange.Distinct().ToList();
        }
    }
}
