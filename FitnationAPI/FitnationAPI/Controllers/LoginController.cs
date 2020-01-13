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
                        Log.Information("Login operation was successfully");
                        return Ok(new
                        {
                            id = user.Id,
                            userName = user.UserName,
                            email = user.Email,
                            roles = await _userManager.GetRolesAsync(user),
                            token = _authHelper.GenerateJwtToken(model.Email, user)
                        });
                    }

                    return null;

                }
                catch (Exception ex)
                {
                    Log.Error($"Login operation was fail with exception: {ex.Message}");
                    return null;
                }
            }

            Log.Warning($"Create user was fail: model is invalid");
            return BadRequest();
        }
    }
}