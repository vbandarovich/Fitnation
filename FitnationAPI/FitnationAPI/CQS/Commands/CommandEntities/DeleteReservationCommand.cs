using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;

namespace FitnationAPI.CQS.Commands.CommandEntities
{
    public class DeleteReservationCommand : IRequest<bool>
    {
        public Guid Id { get; }
        public DeleteReservationCommand(Guid id)
        {
            Id = id;
        }
    }
}
