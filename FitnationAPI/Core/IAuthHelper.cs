using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core
{
    public interface IAuthHelper
    {
        object GenerateJwtToken(string email, IdentityUser user);
    }
}
