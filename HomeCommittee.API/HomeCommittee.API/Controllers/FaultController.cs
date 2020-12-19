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
    public class FaultController : ApiController
    {
        public Fault Get(int id)
        {
            return FaultBL.GetById(id);
        }

        public List<Fault> Get()
        {
            return FaultBL.GetAll();
        }

        public IHttpActionResult Add([FromBody] Fault fault)
        {
            try
            {
                FaultBL.AddFault(fault);
                return Ok();
            }
            catch
            {
                throw;
            }
        }
    }
}
