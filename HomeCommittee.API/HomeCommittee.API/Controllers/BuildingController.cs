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

        public IHttpActionResult Post([FromBody] Building b)
        {
            try
            {
                  BuildingBL.AddBuilding(b);
                return Ok();
            }
            catch
            {
                throw;
            }
        }


    }
}
