using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FitnationAPI.Data;
using MediatR;

namespace FitnationAPI.CQS.Queries.QueryEntities
{
    public class GetReservationObjectByIdQuery : IRequest<ReservationObject>
    {
        public Guid ObjectId { get; }

        public GetReservationObjectByIdQuery(Guid objectId)
        {
            ObjectId = objectId;
        }
    }
}
