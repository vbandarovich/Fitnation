using System;
using System.Collections.Generic;
using System.Text;

namespace FitnationAPI.Data
{
    public class PriceList : BaseEntity
    {
        public Guid ObjectTypeId { get; set; }
        public decimal Price { get; set; }
    }
}
