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
    public class SessionController : ApiController
    {
        // GET api/<controller>
        public List<Session> Get()
        {
            return SessionBL.GetAll();
        }

        // GET api/<controller>/5
        public Session Get(int id)
        {
            return SessionBL.GetById(id);
        }

        // POST api/<controller>
        public IHttpActionResult Post([FromBody]Session s)
        {
            try
            {
                SessionBL.AddSession(s);
                return Ok();
            }
            catch
            {
                throw;
            }
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}