using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API;

[ApiController]
[Route("api/[controller]")] //api/users
public class UsersController(DataContext context) : ControllerBase
{
    // This is synchronous code 
    // [HttpGet]
    // public ActionResult<IEnumerable<AppUser>> GetUsers()
    // {
    //     var users = context.Users.ToList();

    //     return users;
    // }

    // [HttpGet("{id:int}")]
    // public ActionResult<AppUser> GetUsers(int id)
    // {
    //     var user = context.Users.Find(id);

    //     if (user == null) return NotFound();

    //     return user;
    // }


    //This is Asynchronous code
    [HttpGet]
    public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
    {
        var users = await context.Users.ToListAsync();

        return users;
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<AppUser>> GetUsers(int id)
    {
        var user = await context.Users.FindAsync(id);

        if (user == null) return NotFound();

        return user;
    }

}
