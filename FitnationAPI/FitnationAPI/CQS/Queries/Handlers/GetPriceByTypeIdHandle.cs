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
    public class GetPriceByTypeIdHandle : IRequestHandler<GetPriceByTypeIdQuery, decimal>
    {
        private readonly ApplicationDbContext _context;

        public GetPriceByTypeIdHandle(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<decimal> Handle(GetPriceByTypeIdQuery request, CancellationToken cancellationToken)
        {
            var priceObject = await _context.PriceList.FirstOrDefaultAsync(s => 
                s.ObjectTypeId.Equals(request.Type), cancellationToken: cancellationToken);
            return priceObject.Price;
        }
    }
}
