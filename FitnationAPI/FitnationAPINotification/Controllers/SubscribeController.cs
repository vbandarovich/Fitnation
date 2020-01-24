using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Core;
using EasyNetQ;
using Microsoft.AspNetCore.Mvc;
using Serilog;

namespace FitnationAPINotification.Controllers
{
    [Route("api/subscribe")]
    [ApiController]
    public class SubscribeController : Controller
    {
        private const string Host = "localhost";
        private readonly IMessageHandler _messageHandler;

        public SubscribeController(IMessageHandler messageHandler)
        {
            _messageHandler = messageHandler;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var bus = RabbitHutch.CreateBus($"host=localhost");
            Log.Information($"Start listening host: localhost");
            bus.SubscribeAsync<Message>("reservation", _messageHandler.SendMessage);
            return Ok($"Start listening host: {Host}");
        }
    }
}