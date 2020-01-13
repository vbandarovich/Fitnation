using System;
using System.Collections.Generic;
using System.Text;

namespace FitnationAPI.Data
{
    public abstract class BaseEntity
    {
        public Guid Id { get; set; }
    }
}
