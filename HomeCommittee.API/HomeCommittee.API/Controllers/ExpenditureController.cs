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
    public class ExpenditureController : ApiController
    {
        //public List<Expenditure> Get()
        //{
        //    return ExpenditureBL.Get();
        //}

        public Expenditure Get(int id)
        {
          return ExpenditureBL.GetById(id);
        }

        public IHttpActionResult Post([FromBody] Expenditure expenditure)
        {
            try
            {
                ExpenditureBL.Add(expenditure);
                return Ok();
            }
            catch
            {
                throw;
            }
        }

    }
}
