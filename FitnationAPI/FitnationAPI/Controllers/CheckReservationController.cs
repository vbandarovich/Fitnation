using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FitnationAPI.CQS.Queries.QueryEntities;
using FitnationAPI.Helpers;
using FitnationAPI.Models;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Serilog;

namespace FitnationAPI.Controllers
{
    [Route("api/checkreservation")]
    [ApiController]
    public class CheckReservationController : Controller
    {
        private readonly IMediator _mediator;

        public CheckReservationController(IMediator mediator)
        {
            _mediator = mediator;
        }

        /// <summary>
        /// Check reservation time range action
        /// </summary>
        /// <param name="model"></param>
        /// <returns>List<string></returns>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] ReservTimeRangeModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var listTimeRange = new List<string>();
                    var reservTimeHepler = new GetReservTimeHelper(_mediator);
                    var typeId = await _mediator.Send(new GetTypeIdByNameQuery(model.ObjectType));

                    listTimeRange = await reservTimeHepler.GetListTimeRange(model.ObjectNames, typeId, model.DateReservation);
                    var fullTimeRange = await _mediator.Send(new GetWorkTimeRangeQuery());
                    return Ok(fullTimeRange.Except(listTimeRange));
                }
                catch (Exception ex)
                {
                    Log.Error($"Get reservation time range was fail: {ex.Message}");
                    return StatusCode(500, "Internal server error");
                }
            }

            Log.Warning($"Get reservation time range was failed: model is invalid");
            return BadRequest();
        }
    }
}