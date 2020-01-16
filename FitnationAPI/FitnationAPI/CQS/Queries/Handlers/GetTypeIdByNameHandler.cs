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
    public class GetTypeIdByNameHandler : IRequestHandler<GetTypeIdByNameQuery, Guid>
    {
        private readonly ApplicationDbContext _context;

        public GetTypeIdByNameHandler(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Guid> Handle(GetTypeIdByNameQuery request, CancellationToken cancellationToken)
        {
            var type = await _context.ObjectTypes.FirstOrDefaultAsync(s => s.Name.Equals(request.Name), cancellationToken: cancellationToken);
            return type.Id;
        }
    }
}
