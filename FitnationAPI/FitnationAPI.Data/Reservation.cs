using System;
using System.Collections.Generic;
using System.Text;

namespace FitnationAPI.Data
{
    public class Reservation : BaseEntity
    {
        public Guid UserId { get; set; }
        public DateTime Date { get; set; }
        public List<TimeRange> ReservationTime { get; set; }
        public Guid ReservationObjectId { get; set; }
        public decimal Price { get; set; }
        public decimal TotalPrice { get; set; }
    }
}
