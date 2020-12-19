using HomeCommittee.BL;
using HomeCommittee.Entties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HomeCommittee.API.Controllers
{
    public class UserController : ApiController
    {
        //// GET api/User
        //public List<User> Get()
        //{
        //    return UserBL.GetAll();
        //}

        // GET api/User/5
        //public User Get(int id)
        //{
        //    return UserBL.GetById(id);
        //}

        [Route("Api/User/Get/{password}")]
        public Boolean Get(String password)
        {
            return UserBL.GetByPassword(password);
            // return UserBL.GetByPassword(password);
        }

        // POST api/User
        public IHttpActionResult Post([FromBody]User u)
        {
            try
            {
                UserBL.AddUser(u);
                return Ok();
            }
            catch
            {
                throw;
            }
        }

        // PUT api/User/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/User/5
        public void Delete(int id)
        {
        }
    }
}