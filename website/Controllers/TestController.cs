using Microsoft.AspNetCore.Mvc;

namespace website.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        public string Get()
        {
            return "Hello";
        }
    }
}
