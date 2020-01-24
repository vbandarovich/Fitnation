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
    public class GetReservationObjectByIdHandler : IRequestHandler<GetReservationObjectByIdQuery, ReservationObject>
    {
        private readonly ApplicationDbContext _context;

        public GetReservationObjectByIdHandler(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<ReservationObject> Handle(GetReservationObjectByIdQuery request, CancellationToken cancellationToken)
        {
            var result = await _context.ReservationObjects
                .FirstOrDefaultAsync(s => 
                    s.Id.Equals(request.ObjectId), cancellationToken: cancellationToken);
            return result;
        }
    }
}
