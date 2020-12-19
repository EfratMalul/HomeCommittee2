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
    public class PaymentController : ApiController
    {
        public List<Payment> Get()
        {
            return PaymentBL.GetAll();
        }

        public Payment Get(int id)
        {
            return PaymentBL.GetById(id);
        }

        public IHttpActionResult Post([FromBody]Payment p)
        {
            try
            {
                PaymentBL.AddPayment(p);
                return Ok();
            }
            catch
            {
                throw;
            }
        }


    }
}
