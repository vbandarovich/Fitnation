using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FitnationAPI.Models;
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
                Log.Information("Get roles was succeeded");
                return Ok(roles);
            }
            catch (Exception ex)
            {
                Log.Error($"Get roles was failed with exception: {ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }

        /// <summary>
        /// Create new role
        /// </summary>
        /// <param name="roleName"></param>
        /// <returns>Ok(List<string,string> roles)</returns>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] RoleModel model)
        {
            try
            {
                var role = new IdentityRole(model.RoleName);
                await _roleManager.CreateAsync(role);

                var roles = await _roleManager.Roles.Select(s => new
                {
                    Id = s.Id,
                    Name = s.Name
                }).ToListAsync();
                Log.Information("Create role was succeeded");
                return Ok(roles);
            }
            catch (Exception ex)
            {
                Log.Error($"Create role was failed with exception: {ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string Id)
        {
            try
            {
                var role = await _roleManager.FindByIdAsync(Id);
                await _roleManager.DeleteAsync(role);
                var roles = await _roleManager.Roles.Select(s => new
                {
                    Id = s.Id,
                    Name = s.Name
                }).ToListAsync();
                Log.Information("Delete role was succeeded");
                return Ok(roles);
            }
            catch (Exception ex)
            {
                Log.Error($"Delete role was failed with exception: {ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }
    }
}