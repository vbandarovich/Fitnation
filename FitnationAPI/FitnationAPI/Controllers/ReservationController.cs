using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FitnationAPI.CQS.Commands.CommandEntities;
using FitnationAPI.CQS.Queries.QueryEntities;
using FitnationAPI.Data;
using FitnationAPI.Models;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Serilog;

namespace FitnationAPI.Controllers
{
    [Route("api/reservation")]
    [ApiController]
    public class ReservationController : Controller
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IMediator _mediator;

        public ReservationController(UserManager<IdentityUser> userManager, IMediator mediator)
        {
            _userManager = userManager;
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] ReservationModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var user = await _userManager.FindByEmailAsync(model.Email);
                    var typeId = await _mediator.Send(new GetTypeIdByNameQuery(model.Type));
                    var price = await _mediator.Send(new GetPriceByTypeIdQuery(typeId));

                    var splitTime = model.TimeRange.Split(new[] { "\n" }, StringSplitOptions.RemoveEmptyEntries);
                    var timeEntities = new List<TimeRange>();
                    foreach (var time in splitTime)
                    {
                        timeEntities.Add(await _mediator.Send(new GetTimeEntityByTimeQuery(time)));
                    }

                    var objectsId = new List<Guid>();
                    foreach (var objName in model.ObjectNames)
                    {
                        objectsId.Add(await _mediator.Send(new GetObjectIdByTypeAndNameQuery(typeId, objName)));
                    }

                    foreach (var obj in objectsId)
                    {
                        foreach (var time in timeEntities)
                        {
                            await _mediator.Send(new ReservationCommand(user.Id, model.DateReservation, time.Id, obj, price));
                        }
                    }
                }
                catch (Exception ex)
                {
                    Log.Error($"Reservation was fail: {ex.Message}");
                    return StatusCode(500, "Internal server error");
                }

            }

            Log.Warning($"Reservation was fail: model is invalid");
            return BadRequest();
        }
    }
}