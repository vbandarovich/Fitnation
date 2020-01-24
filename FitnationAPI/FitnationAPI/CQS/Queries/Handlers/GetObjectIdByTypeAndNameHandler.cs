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
    public class GetObjectIdByTypeAndNameHandler : IRequestHandler<GetObjectIdByTypeAndNameQuery, Guid>
    {
        private readonly ApplicationDbContext _context;

        public GetObjectIdByTypeAndNameHandler(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Guid> Handle(GetObjectIdByTypeAndNameQuery request, CancellationToken cancellationToken)
        {
            var requestObj = await _context.ReservationObjects.FirstOrDefaultAsync(s =>
                s.ObjectTypeId.Equals(request.TypeId) 
                && s.Name.Equals(request.Name), cancellationToken: cancellationToken);
            return requestObj.Id;
        }
    }
}
