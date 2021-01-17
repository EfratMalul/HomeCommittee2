using HomeCommittee.BL;
using HomeCommittee.Entties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HomeCommittee.Controllers
{
    [RoutePrefix("api/Session")]
    public class SessionController : ApiController
    {
        // GET: api/Session
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Session/5
        [Route("GetByBuilding/{id}")]
        public List<Session> GetByBuilding(int id)
        {
            return SessionBL.GetByBuildingId(id);
        }


        // POST: api/Session
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Session/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Session/5
        public void Delete(int id)
        {
        }
    }
}
