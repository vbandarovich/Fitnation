using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FitnationAPI.CQS.Commands.CommandEntities;
using FitnationAPI.CQS.Queries.QueryEntities;
using FitnationAPI.Helpers;
using FitnationAPI.Models;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Serilog;

namespace FitnationAPI.Controllers
{
    [Route("api/reservation")]
    [Authorize]
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

        [HttpGet]
        public async Task<IActionResult> Get(string id)
        {
            try
            {
                var list = new List<object>();
                var reservRows = await _mediator.Send(new GetReservationsByUserIdQuery(id));
                if (reservRows.Count != 0)
                {
                    foreach (var reservation in reservRows)
                    {
                        var date = reservation.DateReservation;
                        var reservObject = await _mediator.Send(new GetReservationObjectByIdQuery(reservation.ReservationObjectId));
                        var objectName = reservObject.Name;
                        var objectType = await _mediator.Send(new GetObjectTypeByIdQuery(reservObject.ObjectTypeId));
                        var type = objectType.Name;
                        var time = await _mediator.Send(new GetTimeByIdQuery(reservation.ReservationTimeId));
                        list.Add(new
                        {
                            Id = reservation.Id,
                            Date = date.ToShortDateString(),
                            Type = type,
                            Name = objectName,
                            Time = time
                        });
                    }

                    Log.Information("Get reservations for user was succeded");
                    return Ok(list);
                }
                Log.Information("User don't have any reservations");
                return Ok();
            }
            catch (Exception ex)
            {
                Log.Error($"Get reservations for user was fail with exception: {ex.Message}");
                return BadRequest();
            }
        }

        /// <summary>
        /// Reservation action
        /// </summary>
        /// <param name="model"></param>
        /// <returns>Status code 200</returns>
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] ReservationModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var reservationHelper = new ReservationHelper( _mediator);

                    var user = await _userManager.FindByEmailAsync(model.Email);
                    var typeId = await _mediator.Send(new GetTypeIdByNameQuery(model.Type));
                    var price = await _mediator.Send(new GetPriceByTypeIdQuery(typeId));

                    var splitTime = model.TimeRange.Split(new[] { "\n" }, StringSplitOptions.RemoveEmptyEntries);
                    var timeEntities = await reservationHelper.GetTimeEntities(splitTime);

                    var objectsId = await reservationHelper.GetObjectsId(model.ObjectNames, typeId);

                    foreach (var obj in objectsId)
                    {
                        foreach (var time in timeEntities)
                        {
                            await _mediator.Send(new ReservationCommand(user.Id, model.DateReservation, time.Id, obj, price));
                        }
                    }

                    Log.Information($"Reservation was succeded");
                    return Ok();
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