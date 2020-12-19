using HomeCommittee.BL;
using HomeCommittee.Entties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace HomeCommittee.Controllers
{
    [RoutePrefix("api/Tenant")]
    public class TenantController : ApiController
    {
        [HttpGet]
        [Route("GetTenant/{userId}")]
        public HttpResponseMessage GetTenant(int userId)
        {
           Tenant t = TenantBL.GetTenantByUserId(userId);
            return Request.CreateResponse(HttpStatusCode.OK, t);
        }
        public Tenant Get(int id)
        {
            return TenantBL.GetById(id);
        }

        //post - הוספת דייר
        [HttpPost]
        [Route("AddTenant")]
        public HttpResponseMessage Post(Tenant t)
        {
            try
            {
                t.user_id= UserBL.AddUser(new User() { password = t.password, user_name = t.mail });
                TenantBL.AddTenant(t);
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.ExpectationFailed, ex);
            }
        }




        // PUT api/User/5
        public void Put(int id, [FromBody]string value)
        {
        }

    }
}