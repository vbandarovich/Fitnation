using System;
using System.Collections.Generic;
using System.Text;

namespace FitnationAPI.Data
{
    public class Reservation : BaseEntity
    {
        public string UserId { get; set; }
        public DateTime DateReservation { get; set; }
        public Guid ReservationTimeId { get; set; }
        public Guid ReservationObjectId { get; set; }
        public decimal Price { get; set; }
    }
}
