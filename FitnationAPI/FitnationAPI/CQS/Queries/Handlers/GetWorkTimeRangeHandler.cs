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
    public class GetWorkTimeRangeHandler : IRequestHandler<GetWorkTimeRangeQuery, IEnumerable<string>>
    {
        private readonly ApplicationDbContext _context;

        public GetWorkTimeRangeHandler(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<string>> Handle(GetWorkTimeRangeQuery request, CancellationToken cancellationToken)
        {
            return await _context.TimeRange.Select(s => s.Time)
                .ToListAsync(cancellationToken: cancellationToken);
        }
    }
}
