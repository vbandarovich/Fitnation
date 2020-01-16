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
    public class GetTimeIdByTimeHandler : IRequestHandler<GetTimeIdByTimeQuery, Guid>
    {
        private readonly ApplicationDbContext _context;

        public GetTimeIdByTimeHandler(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Guid> Handle(GetTimeIdByTimeQuery request, CancellationToken cancellationToken)
        {
            var time = await _context.TimeRange.FirstOrDefaultAsync(s => s.Time.Equals(request.Time), cancellationToken: cancellationToken);
            return time.Id;
        }
    }
}
