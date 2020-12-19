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
    public class VoteController : ApiController
    {
        // GET api/<controller>
        public List<Vote> Get()
        {
            return VoteBL.GetAll();
        }

        // GET api/<controller>/5
        public Vote Get(int id)
        {
            return VoteBL.GetById(id);
        }

        // POST api/<controller>
        public IHttpActionResult Post([FromBody]Vote v)
        {
            try
            {
                VoteBL.AddMVote(v);
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