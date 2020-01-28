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
    [Route("api/login")]
    [ApiController]
    public class LoginController : Controller
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly IAuthHelper _authHelper;

        public LoginController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager, IAuthHelper authHelper)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _authHelper = authHelper;
        }

        /// <summary>
        /// Login action
        /// </summary>
        /// <param name="model"></param>
        /// <returns>Ok(string Id, string UserName, string Email, List<string> Roles, object Token)</returns>
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] LoginModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var user = await _userManager.FindByEmailAsync(model.Email);
                    var result = await _signInManager.PasswordSignInAsync(user.UserName, model.Password, false, true);

                    if (result.Succeeded)
                    {
                        Log.Information("Login operation was succeeded");
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
                    return Ok();
                }
                catch (Exception ex)
                {
                    Log.Error($"Login operation was failed with exception: {ex.Message}");
                    return StatusCode(500, "Internal server error");
                    
                }
            }
            Log.Warning($"Create user was failed: model is invalid");
            return BadRequest();
        }
    }
}