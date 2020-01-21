using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FitnationAPI.Data;
using MediatR;

namespace FitnationAPI.CQS.Queries.QueryEntities
{
    public class GetReservationsByUserIdQuery : IRequest<List<Reservation>>
    {
        public string UserId { get; }

        public GetReservationsByUserIdQuery(string userId)
        {
            UserId = userId;
        }
    }
}
