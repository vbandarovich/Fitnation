using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;

namespace FitnationAPI.CQS.Queries.QueryEntities
{
    public class GetReservedTimeRangeToObjectQuery : IRequest<IEnumerable<string>>
    {
        public DateTime DateReservation { get; }
        public Guid ReservationObjectId { get; }

        public GetReservedTimeRangeToObjectQuery(DateTime dateReservation, Guid reservationObjectId)
        {
            DateReservation = dateReservation;
            ReservationObjectId = reservationObjectId;
        }
    }
}
