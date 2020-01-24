using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitnationAPI.Models
{
    public class ReservTimeRangeModel
    {
        public DateTime DateReservation { get; set; }
        public string ObjectType { get; set; }
        public IEnumerable<string> ObjectNames { get; set; }
    }
}
