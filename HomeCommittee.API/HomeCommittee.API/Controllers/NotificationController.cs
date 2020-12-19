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
    public class NotificationController : ApiController
    {
        // GET api/<controller>
        public List<Notification> Get()
        {
            return NotificationBL.GetAll();
        }

        // GET api/<controller>/5
        public Notification Get(int id)
        {
            return NotificationBL.GetById(id);
        }

        // POST api/<controller>
        public IHttpActionResult Post([FromBody]Notification n)
        {
            try
            {
                NotificationBL.AddNotification(n);
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