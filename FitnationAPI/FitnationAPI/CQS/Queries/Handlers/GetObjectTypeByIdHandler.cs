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
    public class GetObjectTypeByIdHandler : IRequestHandler<GetObjectTypeByIdQuery, ObjectType>
    {
        private readonly ApplicationDbContext _context;

        public GetObjectTypeByIdHandler(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<ObjectType> Handle(GetObjectTypeByIdQuery request, CancellationToken cancellationToken)
        {
            var result = await _context.ObjectTypes
                .FirstOrDefaultAsync(s => s.Id.Equals(request.TypeId), cancellationToken: cancellationToken);
            return result;
        }
    }
}
