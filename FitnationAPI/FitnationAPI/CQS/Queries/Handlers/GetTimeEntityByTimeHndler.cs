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
    public class GetTimeEntityByTimeHndler : IRequestHandler<GetTimeEntityByTimeQuery, TimeRange>
    {
        private readonly ApplicationDbContext _context;

        public GetTimeEntityByTimeHndler(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<TimeRange> Handle(GetTimeEntityByTimeQuery request, CancellationToken cancellationToken)
        {
            return await _context.TimeRange.FirstOrDefaultAsync(s => 
                s.Time.Equals(request.Time), cancellationToken: cancellationToken);
        }
    }
}
