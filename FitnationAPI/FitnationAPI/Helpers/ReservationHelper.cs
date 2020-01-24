using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FitnationAPI.CQS.Queries.QueryEntities;
using FitnationAPI.Data;
using MediatR;

namespace FitnationAPI.Helpers
{
    public class ReservationHelper
    {
        private readonly IMediator _mediator;

        public ReservationHelper(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task<List<TimeRange>> GetTimeEntities(string[] mas)
        {
            var result = new List<TimeRange>();
            foreach (var time in mas)
            {
                result.Add(await _mediator.Send(new GetTimeEntityByTimeQuery(time)));
            }

            return result;
        }

        public async Task<List<Guid>> GetObjectsId(IEnumerable<string> names, Guid typeId)
        {
            var objectsId = new List<Guid>();
            foreach (var objName in names)
            {
                objectsId.Add(await _mediator.Send(new GetObjectIdByTypeAndNameQuery(typeId, objName)));
            }

            return objectsId;
        }
    }
}
