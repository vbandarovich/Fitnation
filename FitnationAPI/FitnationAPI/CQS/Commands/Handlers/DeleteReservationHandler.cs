using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using FitnationAPI.CQS.Commands.CommandEntities;
using FitnationAPI.Data;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace FitnationAPI.CQS.Commands.Handlers
{
    public class DeleteReservationHandler : IRequestHandler<DeleteReservationCommand, bool>
    {
        private readonly ApplicationDbContext _context;

        public DeleteReservationHandler(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<bool> Handle(DeleteReservationCommand request, CancellationToken cancellationToken)
        {
            try
            {
                var entity = await _context.Reservations.FirstOrDefaultAsync(s =>
                    s.Id.Equals(request.Id), cancellationToken: cancellationToken);
                var result = _context.Reservations.Remove(entity);
                await _context.SaveChangesAsync(cancellationToken);
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
