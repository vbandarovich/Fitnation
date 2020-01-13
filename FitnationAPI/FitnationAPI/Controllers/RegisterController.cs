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

        [HttpPost]
        public async Task<object> Post([FromBody] RegisterModel model)
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

                    Log.Information("Create user was successfully");

                    Log.Information("SignInAsync was successfully");

                    return Ok(new
                    {
                        id = user.Id,
                        userName = user.UserName,
                        email = user.Email,
                        roles = await _userManager.GetRolesAsync(user),
                        token = _authHelper.GenerateJwtToken(model.Email, user)
                    });
                }

                Log.Error("SignInAsync was fail");
                return Task.FromResult(false);
            }
            catch (Exception ex)
            {
                Log.Error($"SignInAsync was fail with exception: {ex.Message}");
                return null;
            }
        }
    }
}