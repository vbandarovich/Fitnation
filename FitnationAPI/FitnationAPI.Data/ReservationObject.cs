using System;
using System.Collections.Generic;
using System.Text;

namespace FitnationAPI.Data
{
    public class ReservationObject : BaseEntity
    {
        public Guid ObjectTypeId { get; set; }
        public string Name { get; set; }
    }
}
