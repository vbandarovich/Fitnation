using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Serilog;

namespace FitnationAPI.Controllers
{
    [Route("api/admin")]
    [Authorize(Roles="admin")]
    [ApiController]
    public class AdminController : Controller
    {
        private readonly UserManager<IdentityUser> _userManager;

        public AdminController(UserManager<IdentityUser> userManager)
        {
            _userManager = userManager;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var users = new List<string>();
                foreach (var user in _userManager.Users)
                {
                    var result = await _userManager.IsInRoleAsync(user, "admin");
                    if (result)
                    {
                        users.Add(user.Email);
                    }
                }
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