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
    public class TenantController : ApiController
    {
        public List<Tenant> Get()
        {
            return TenantBL.GetAll();
        }

        public Tenant Get(int id)
        {
            return TenantBL.GetById(id);
        }

        //post - הוספת דייר
        public IHttpActionResult Post([FromBody]Tenant t)
        {
            try
            {
                TenantBL.AddTenant(t);
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

    }
}
