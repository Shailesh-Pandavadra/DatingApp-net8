using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class UsersController(DataContext context) : BaseApiController
{

    // // Synchronous Code

    // [HttpGet]
    // public ActionResult<IEnumerable<AppUser>> GetUsers()
    // {
    //     var users = context.Users.ToList();
    //     return users;
    // }

    // [HttpGet("{id}")]       // /api/users/1
    // public ActionResult<AppUser> GetUser(int id)
    // {
    //     var user = context.Users.Find(id);

    //     if (user == null)
    //         return NotFound();

    //     return user;
    // }


    // Asynchronous Code


    [AllowAnonymous]
    [HttpGet]
    public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
    {
        var users = await context.Users.ToListAsync();
        return users;
    }

    [Authorize]
    [HttpGet("{id}")]       // /api/users/1
    public async Task<ActionResult<AppUser>> GetUser(int id)
    {
        var user = await context.Users.FindAsync(id);

        if (user == null)
            return NotFound();

        return user;
    }
}
