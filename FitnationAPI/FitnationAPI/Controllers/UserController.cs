using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FitnationAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Serilog;

namespace FitnationAPI.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly UserManager<IdentityUser> _userManager;

        public UserController(UserManager<IdentityUser> userManager)
        {
            _userManager = userManager;
        }

        /// <summary>
        /// Get list users
        /// </summary>
        /// <returns>Ok(List<string, string> users)</returns>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var users = await _userManager.Users.Select(s => new
                {
                    Id = s.Id,
                    Email = s.Email
                }).ToListAsync();
                Log.Error("Get users was succeded");
                return Ok(users);
            }
            catch (Exception ex)
            {
                Log.Error($"Get users was fail with exception: {ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }
    }
}