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
    public class GetReservedTimeRangeToObjectHandler : IRequestHandler<GetReservedTimeRangeToObjectQuery, IEnumerable<string>>
    {
        private readonly ApplicationDbContext _context;

        public GetReservedTimeRangeToObjectHandler(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<string>> Handle(GetReservedTimeRangeToObjectQuery request, CancellationToken cancellationToken)
        {
            var result = new List<string>();
            var listTimeId = await _context.Reservations
                .Where(s =>
                    s.DateReservation.Date.Equals(request.DateReservation.Date)
                    && s.ReservationObjectId.Equals(request.ReservationObjectId))
                .Select(t=>t.ReservationTimeId)
                .ToListAsync(cancellationToken: cancellationToken);

            foreach (var timeId in listTimeId)
            {
                var time = await _context.TimeRange.FirstOrDefaultAsync(s => s.Id.Equals(timeId), cancellationToken: cancellationToken);
                result.Add(time.Time);
            }

            return result;
        }
    }
}
