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
    public class GetTimeByIdHandler : IRequestHandler<GetTimeByIdQuery, string>
    {
        private readonly ApplicationDbContext _context;

        public GetTimeByIdHandler(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<string> Handle(GetTimeByIdQuery request, CancellationToken cancellationToken)
        {
            var result = await _context.TimeRange.Where(s => 
                    s.Id.Equals(request.TimeId))
                .Select(t => t.Time)
                .FirstOrDefaultAsync(cancellationToken: cancellationToken);
            return result;
        }
    }
}
