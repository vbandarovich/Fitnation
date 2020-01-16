using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FitnationAPI.Data;
using MediatR;

namespace FitnationAPI.CQS.Commands.CommandEntities
{
    public class ReservationCommand : IRequest<bool>
    {
        public string UserId { get; }
        public DateTime DateReservation { get; }
        public Guid ReservationTime { get; }
        public Guid ReservationObjectId { get; }
        public decimal Price { get; }

        public ReservationCommand(string userId, DateTime date, Guid reservationTime, Guid reservationObjectId, decimal price)
        {
            UserId = userId;
            DateReservation = date;
            ReservationTime = reservationTime;
            ReservationObjectId = reservationObjectId;
            Price = price;
        }
    }
}
