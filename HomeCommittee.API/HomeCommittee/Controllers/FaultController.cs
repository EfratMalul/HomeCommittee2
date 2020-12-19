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
    [RoutePrefix("api/Fault")]
    public class FaultController : ApiController
    {
        [HttpGet]
        [Route("GetAllFaults/{buildingId}")]
        public HttpResponseMessage GetAllFaults(int buildingId)
        {
            List<Fault> faults = FaultBL.GetFaultByBuilding(buildingId);
            return Request.CreateResponse(HttpStatusCode.OK, faults);
        }

        [HttpPost]
        [Route("AddFault")]
        public HttpResponseMessage AddFault(Fault f)
        {
            FaultBL.AddFault(f);
            return Request.CreateResponse(HttpStatusCode.OK, true);
        }
    }
}