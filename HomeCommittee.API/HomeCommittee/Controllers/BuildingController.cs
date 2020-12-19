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
    [RoutePrefix("api/Building")]
    public class BuildingController : ApiController
    {
        public List<Building> Get()
        {
            return BuildingBL.GetAll();
        }
        public Building Get(int id)
        {
            return BuildingBL.GetById(id);
        }

        [HttpPost]
        [Route("AddBuilding")]
        public HttpResponseMessage AddBuilding(Building b)
        {
            try
            {
                int buildingId = BuildingBL.AddBuilding(b);
                return Request.CreateResponse(HttpStatusCode.OK, buildingId);
            }
            catch(Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.ExpectationFailed, ex);
            }
        }







    }
}