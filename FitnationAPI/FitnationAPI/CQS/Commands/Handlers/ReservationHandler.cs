using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using FitnationAPI.CQS.Commands.CommandEntities;
using FitnationAPI.Data;
using MediatR;

namespace FitnationAPI.CQS.Commands.Handlers
{
    public class ReservationHandler : IRequestHandler<ReservationCommand, bool>
    {
        private readonly ApplicationDbContext _context;

        public ReservationHandler(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<bool> Handle(ReservationCommand request, CancellationToken cancellationToken)
        {
            try
            {
                var reservEntity = new Reservation()
                {
                    Id = new Guid(),
                    DateReservation = request.DateReservation,
                    Price = request.Price,
                    ReservationObjectId = request.ReservationObjectId,
                    ReservationTimeId = request.ReservationTime,
                    UserId = request.UserId
                };

                await _context.Reservations.AddAsync(reservEntity, cancellationToken);
                await _context.SaveChangesAsync(cancellationToken);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}
