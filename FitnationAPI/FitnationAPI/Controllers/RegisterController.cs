using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core;
using FitnationAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Serilog;

namespace FitnationAPI.Controllers
{
    [Route("api/register")]
    [ApiController]
    public class RegisterController : Controller
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IAuthHelper _authHelper;

        public RegisterController(UserManager<IdentityUser> userManager, IAuthHelper authHelper)
        {
            _userManager = userManager;
            _authHelper = authHelper;
        }

        /// <summary>
        /// Register action
        /// </summary>
        /// <param name="model"></param>
        /// <returns>Ok(string Id, string UserName, string Email, List<string> Roles, object Token)</returns>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] RegisterModel model)
        {
            try
            {
                var user = new IdentityUser
                {
                    UserName = model.UserName,
                    Email = model.Email,
                    PhoneNumber = model.Phone
                };

                var result = await _userManager.CreateAsync(user, model.Password);

                if (result.Succeeded)
                {
                    await _userManager.AddToRoleAsync(user, "user");

                    Log.Information("Create user was succeeded");

                    Log.Information("SignInAsync was succeeded");

                    return Ok(new
                    {
                        id = user.Id,
                        userName = user.UserName,
                        email = user.Email,
                        phone = user.PhoneNumber,
                        roles = await _userManager.GetRolesAsync(user),
                        token = await _authHelper.GenerateJwtToken(model.Email, user)
                    });
                }

                Log.Error("SignInAsync was failed");
                return BadRequest();
            }
            catch (Exception ex)
            {
                Log.Error($"SignInAsync was failed with exception: {ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }
    }
}