using System;
using System.Collections.Generic;
using System.Text;

namespace Core
{
    public class Message
    {
        public string Email { get; set; }
        public string ObjectType { get; set; }
        public string DateReservation { get; set; }
        public IEnumerable<string> ObjectNames { get; set; }
        public IEnumerable<string> TimeRange { get; set; }
    }
}
