using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core
{
    public interface IAuthHelper
    {
        Task<object> GenerateJwtToken(string email, IdentityUser user);
    }
}
