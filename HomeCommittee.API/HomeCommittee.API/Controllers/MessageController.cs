using HomeCommittee.BL;
using HomeCommittee.DAL;
using HomeCommittee.Entties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HomeCommittee.API.Controllers
{
    public class MessageController : ApiController
    {
        HomeCommitteeDBEntities et = new HomeCommitteeDBEntities();

        // GET api/<controller>
        public List<Message> Get()
        {
            return MessageBL.GetAll();
        }

        // GET api/<controller>/5
        public Message Get(int id)
        {
            return MessageBL.GetById(id);
        }

        // POST api/<controller>
        public IHttpActionResult Post([FromBody]Message m)
        {
            try
            {
                MessageBL.AddMessage(m);
                return Ok();
            }
            catch
            {
                throw;
            }
        }

        // PUT api/<controller>/5
        public IHttpActionResult Put(int id, [FromBody]message_tbl message)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            if (id != message.id)
               return Conflict();
            et.Entry(message).State = System.Data.Entity.EntityState.Modified;
            et.SaveChanges();
            return CreatedAtRoute("DefaultApi", new { id = message.id }, message);
        }
        
        // DELETE api/<controller>/5
        public void Delete(int id)
        {
            message_tbl m = et.message_tbl.Find(id);
            if (m == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            et.message_tbl.Remove(m);
            et.SaveChanges();
        }
    }
}