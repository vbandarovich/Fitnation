using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using FitnationAPI.CQS.Queries.QueryEntities;
using FitnationAPI.Data;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace FitnationAPI.CQS.Queries.Handlers
{
    public class GetReservationsByUserIdHandler : IRequestHandler<GetReservationsByUserIdQuery, List<Reservation>>
    {
        private readonly ApplicationDbContext _context;

        public GetReservationsByUserIdHandler(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<Reservation>> Handle(GetReservationsByUserIdQuery request, CancellationToken cancellationToken)
        {
            var result = await _context.Reservations
                .Where(s => s.UserId.Equals(request.UserId))
                .ToListAsync(cancellationToken: cancellationToken);
            return result;
        }
    }
}
