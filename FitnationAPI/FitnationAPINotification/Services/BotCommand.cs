using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitnationAPINotification.Services
{
    public abstract class BotCommand
    {
        public abstract string Name { get; }

        public abstract void Execute(string message);

        public bool Contains(string command)
        {
            return command.Contains(Name);
        }
    }
}
