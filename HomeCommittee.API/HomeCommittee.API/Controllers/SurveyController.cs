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
    public class SurveyController : ApiController
    {
        // GET api/<controller>
        public List<Survey> Get()
        {
            return SurveyBL.GetAll();
        }

        // GET api/<controller>/5
        public Survey Get(int id)
        {
            return SurveyBL.GetById(id);
        }

        // POST api/<controller>
        public IHttpActionResult Post([FromBody]Survey s)
        {
            try
            {
                SurveyBL.AddSurvey(s);
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