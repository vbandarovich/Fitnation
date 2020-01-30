using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
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
    [Route("api/user")]
    [Authorize(Roles = "admin")]
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
                Log.Error("Get users was succeeded");
                return Ok(users);
            }
            catch (Exception ex)
            {
                Log.Error($"Get users was failed with exception: {ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }

        /// <summary>
        /// Delete users by id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns>Ok(List<UserModel> users)</returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string Id)
        {
            var user = await _userManager.Users.FirstOrDefaultAsync(s => s.Id.Equals(Id));
            if (user != null)
            {
                var result = await _userManager.DeleteAsync(user);

                if (result.Succeeded)
                {
                    return Ok(await _userManager.Users.Select(s => new
                    {
                        Id = s.Id,
                        Email = s.Email
                    })
                        .ToListAsync());
                }
            }

            return BadRequest();
        }
    }
}