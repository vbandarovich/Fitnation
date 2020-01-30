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

        /// <summary>
        /// Get moderators
        /// </summary>
        /// <returns>List<UserModel> moderators</returns>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var users = new List<UserModel>();
                foreach (var user in _userManager.Users)
                {
                    var result = await _userManager.IsInRoleAsync(user, "admin");
                    if (result)
                    {
                        users.Add(new UserModel()
                        {
                            Id = user.Id,
                            Email = user.Email
                        });;
                    }
                }
                Log.Error("Get users was succeeded");
                return Ok(users);
            }
            catch (Exception ex)
            {
                Log.Error($"Get users was failed with exception: {ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }
    }
}