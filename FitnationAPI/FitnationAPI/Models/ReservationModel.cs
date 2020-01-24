using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitnationAPI.Models
{
    public class ReservationModel
    {
        public string Email { get; set; }
        public string TimeRange { get; set; }
        public string Type { get; set; }
        public IEnumerable<string> ObjectNames { get; set; }
        public DateTime DateReservation { get; set; }
    }
}
