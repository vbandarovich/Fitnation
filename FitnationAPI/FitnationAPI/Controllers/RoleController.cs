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
    [Route("api/role")]
    [Authorize(Roles = "admin")]
    [ApiController]
    public class RoleController : Controller
    {
        private readonly RoleManager<IdentityRole> _roleManager;

        public RoleController(RoleManager<IdentityRole> roleManager)
        {
            _roleManager = roleManager;
        }

        /// <summary>
        /// Get roles
        /// </summary>
        /// <returns>Ok(List<string,string> roles)</returns>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var roles = await _roleManager.Roles.Select(s => new
                {
                    Id = s.Id,
                    Name = s.Name
                }).ToListAsync();
                Log.Error("Get roles was succeeded");
                return Ok(roles);
            }
            catch (Exception ex)
            {
                Log.Error($"Get roles was failed with exception: {ex.Message}");
                return null;
            }
        }
    }
}